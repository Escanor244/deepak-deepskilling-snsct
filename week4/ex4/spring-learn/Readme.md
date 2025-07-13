output:
<img width="1694" height="986" alt="image" src="https://github.com/user-attachments/assets/86baaf7d-05f4-4fc3-86c6-2f1619563078" />


browser:
<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/e72ef21c-1a42-45ce-92d1-678b0e39f5d4" />

postman:
<img width="1819" height="962" alt="image" src="https://github.com/user-attachments/assets/5d69b5d4-3271-41d5-b2e2-d921f22b66b0" />


REST - Country Web Service 

Write a REST service that returns India country details in the earlier created spring learn application.

URL: /country
Controller: com.cognizant.spring-learn.controller.CountryController
Method Annotation: @RequestMapping
Method Name: getCountryIndia()
Method Implementation: Load India bean from spring xml configuration and return
Sample Request: http://localhost:8083/country
Sample Response:
{
  "code": "IN",
  "name": "India"
}

SME to explain the following aspects:
•	What happens in the controller method?
•	How the bean is converted into JSON reponse?
•	In network tab of developer tools show the HTTP header details received
•	In postman click on "Headers" tab to view the HTTP header details received
