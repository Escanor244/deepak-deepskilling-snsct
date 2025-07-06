input/output from postman:
![Screenshot 2025-07-06 201538](https://github.com/user-attachments/assets/df389b56-9bc6-4f11-811b-7eeacd786638)
![Screenshot 2025-07-06 201734](https://github.com/user-attachments/assets/29d43247-6971-49bc-8eb5-b5bc408a6f17)

output in terminal :
![Screenshot 2025-07-06 201745](https://github.com/user-attachments/assets/0b457cc0-eb63-4fbb-a2a0-c0de3748d9bf)

question:
Hands on 4
Difference between JPA, Hibernate and Spring Data JPA 

Java Persistence API (JPA)
•	JSR 338 Specification for persisting, reading and managing data from Java objects
•	Does not contain concrete implementation of the specification
•	Hibernate is one of the implementation of JPA
Hibernate
•	ORM Tool that implements JPA
Spring Data JPA
•	Does not have JPA implementation, but reduces boiler plate code
•	This is another level of abstraction over JPA implementation provider like Hibernate
•	Manages transactions
Refer code snippets below on how the code compares between Hibernate and Spring Data JPA
Hibernate
   /* Method to CREATE an employee in the database */
   public Integer addEmployee(Employee employee){
      Session session = factory.openSession();
      Transaction tx = null;
      Integer employeeID = null;
      
      try {
         tx = session.beginTransaction();
         employeeID = (Integer) session.save(employee); 
         tx.commit();
      } catch (HibernateException e) {
         if (tx != null) tx.rollback();
         e.printStackTrace(); 
      } finally {
         session.close(); 
      }
      return employeeID;
   }
Spring Data JPA
EmployeeRespository.java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
EmployeeService.java
    @Autowire
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
 

Reference Links: 
https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1 
https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html
