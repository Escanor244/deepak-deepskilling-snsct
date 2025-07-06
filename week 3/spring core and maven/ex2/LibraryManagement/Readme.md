output:
![image](https://github.com/user-attachments/assets/7c8fb46c-89f0-48c8-863d-cf5cf5d44f0c)

Exercise 2: Implementing Dependency Injection
Scenario: 
In the library management application, you need to manage the dependencies between the BookService and BookRepository classes using Spring's IoC and DI.
Steps:
1.	Modify the XML Configuration:
o	Update applicationContext.xml to wire BookRepository into BookService.
2.	Update the BookService Class:
o	Ensure that BookService class has a setter method for BookRepository.
3.	Test the Configuration:
o	Run the LibraryManagementApplication main class to verify the dependency injection.
