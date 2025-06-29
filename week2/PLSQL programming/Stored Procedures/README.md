# Stored Procedures (PL/SQL)

This folder contains PL/SQL stored procedures for three banking scenarios:

## Scenario 1: Process Monthly Interest
- **Procedure:** `ProcessMonthlyInterest`
- **Description:** Calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance.
- **Sample Output:**
  - All savings accounts will have their balance increased by 1% (no direct output, but you can verify by querying the table).

## Scenario 2: Update Employee Bonus
- **Procedure:** `UpdateEmployeeBonus`
- **Description:** Updates the salary of employees in a given department by adding a bonus percentage (passed as a parameter).
- **Sample Output:**
  - Employees in the specified department will have their salary increased by the given bonus percentage (no direct output, but you can verify by querying the table).

## Scenario 3: Transfer Funds
- **Procedure:** `TransferFunds`
- **Description:** Transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.
- **Sample Output:**
  - If the transfer is successful: (no direct output, but balances will be updated)
  - If the source account has insufficient balance:
    ```
    Insufficient balance in source account.
    ```

---

**File:** `StoredProcedures.sql`
- Contains all three stored procedures for the above scenarios. 