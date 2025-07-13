output:
<img width="1591" height="575" alt="image" src="https://github.com/user-attachments/assets/4b436264-9fd7-451e-a0cc-0a4d132f79b8" />

postman output:
<img width="1802" height="967" alt="image" src="https://github.com/user-attachments/assets/3fb513b0-8009-4da6-95bf-b660d29b9e92" />


browser output:
<img width="1894" height="948" alt="image" src="https://github.com/user-attachments/assets/53c1a68d-649b-4800-9194-c417041a4c67" />



Hello World RESTful Web Service 

Write a REST service in the spring learn application created earlier, that returns the text "Hello World!!" using Spring Web Framework. Refer details below:

Method: GET
URL: /hello
Controller: com.cognizant.spring-learn.controller.HelloController
Method Signature: public String sayHello()
Method Implementation: return hard coded string "Hello World!!"
Sample Request: http://localhost:8083/hello
Sample Response: Hello World!! 

IMPORTANT NOTE: Don't forget to include start and end log in the sayHello() method.

Try the URL http://localhost:8083/hello in both chrome browser and postman.

SME to explain the following aspects:
•	In network tab of developer tools show the HTTP header details received
•	In postman click on "Headers" tab to view the HTTP header details received
 
