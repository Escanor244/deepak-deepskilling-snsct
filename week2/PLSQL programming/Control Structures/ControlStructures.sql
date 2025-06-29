-- Exercise 1: Control Structures
-- Scenario 1: Apply a 1% discount to loan interest rates for customers above 60 years old
BEGIN
  FOR rec IN (SELECT customer_id, age, loan_interest_rate FROM customers) LOOP
    IF rec.age > 60 THEN
      UPDATE customers
      SET loan_interest_rate = loan_interest_rate * 0.99
      WHERE customer_id = rec.customer_id;
    END IF;
  END LOOP;
END;
/

-- Scenario 2: Set IsVIP flag to TRUE for customers with balance over $10,000
BEGIN
  FOR rec IN (SELECT customer_id, balance FROM customers) LOOP
    IF rec.balance > 10000 THEN
      UPDATE customers
      SET IsVIP = 'TRUE'
      WHERE customer_id = rec.customer_id;
    END IF;
  END LOOP;
END;
/

-- Scenario 3: Print reminders for loans due in the next 30 days
DECLARE
  CURSOR c_loans IS
    SELECT loan_id, customer_id, due_date FROM loans
    WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
  FOR rec IN c_loans LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || rec.loan_id || ' for customer ' || rec.customer_id || ' is due on ' || rec.due_date);
  END LOOP;
END;
/ 