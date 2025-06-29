-- Exercise 3: Stored Procedures
-- Scenario 1: ProcessMonthlyInterest procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR rec IN (SELECT account_id, balance FROM savings_accounts) LOOP
    UPDATE savings_accounts
    SET balance = balance * 1.01
    WHERE account_id = rec.account_id;
  END LOOP;
END;
/

-- Scenario 2: UpdateEmployeeBonus procedure
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_id IN NUMBER,
  bonus_pct IN NUMBER
) AS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department_id = dept_id;
END;
/

-- Scenario 3: TransferFunds procedure
CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account IN NUMBER,
  to_account IN NUMBER,
  amount IN NUMBER
) AS
  insufficient_balance EXCEPTION;
  v_balance NUMBER;
BEGIN
  SELECT balance INTO v_balance FROM accounts WHERE account_id = from_account FOR UPDATE;
  IF v_balance < amount THEN
    RAISE insufficient_balance;
  END IF;
  UPDATE accounts SET balance = balance - amount WHERE account_id = from_account;
  UPDATE accounts SET balance = balance + amount WHERE account_id = to_account;
  COMMIT;
EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance in source account.');
    ROLLBACK;
END;
/ 