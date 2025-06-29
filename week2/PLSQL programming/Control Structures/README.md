# Control Structures (PL/SQL)

This folder contains PL/SQL solutions for three control structure scenarios:

## Scenario 1: Interest Rate Discount
- **Description:** Loops through all customers, checks if their age is above 60, and applies a 1% discount to their current loan interest rate.
- **How it works:** Uses a FOR loop and IF condition to update the `loan_interest_rate` for eligible customers.
- **Sample Output:**
  - Customers above 60 will have their `loan_interest_rate` reduced by 1% (no direct output, but you can verify by querying the table).

## Scenario 2: VIP Status
- **Description:** Iterates through all customers and sets the `IsVIP` flag to TRUE for those with a balance over $10,000.
- **How it works:** Uses a FOR loop and IF condition to update the `IsVIP` flag for qualifying customers.
- **Sample Output:**
  - Customers with balance over $10,000 will have their `IsVIP` flag set to TRUE (no direct output, but you can verify by querying the table).

## Scenario 3: Loan Reminders
- **Description:** Fetches all loans due in the next 30 days and prints a reminder message for each customer.
- **How it works:** Uses a CURSOR and FOR loop to print reminders using `DBMS_OUTPUT.PUT_LINE`.
- **Sample Output:**
  ```
  Reminder: Loan 101 for customer 2001 is due on 2024-07-15
  Reminder: Loan 102 for customer 2002 is due on 2024-07-20
  ...
  ```

---

**File:** `ControlStructures.sql`
- Contains all three PL/SQL blocks for the above scenarios. 