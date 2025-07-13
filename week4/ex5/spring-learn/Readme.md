output
browser:
<img width="1919" height="1031" alt="Screenshot 2025-07-13 133620" src="https://github.com/user-attachments/assets/25e724e7-0d86-47df-9dbe-97ec51b05c97" />
<img width="1919" height="1023" alt="Screenshot 2025-07-13 133636" src="https://github.com/user-attachments/assets/d76fcf2f-8a73-455d-98db-93189c611695" />
<img width="1919" height="1026" alt="Screenshot 2025-07-13 133629" src="https://github.com/user-attachments/assets/e3b71ce3-a93c-40ff-8bf3-6c12341ae05e" />

postman:
<img width="1919" height="985" alt="Screenshot 2025-07-13 133709" src="https://github.com/user-attachments/assets/313e3bca-4993-47ea-a798-fe1658b0a2b1" />
<img width="1919" height="1015" alt="Screenshot 2025-07-13 133727" src="https://github.com/user-attachments/assets/d924d460-7ca5-486a-aca4-928fbbab3c29" />
<img width="1910" height="1004" alt="Screenshot 2025-07-13 133733" src="https://github.com/user-attachments/assets/47fb91af-c6e5-4e64-9a4d-960328d9d9a2" />


REST - Get country based on country code 

Write a REST service that returns a specific country based on country code. The country code should be case insensitive.

Controller: com.cognizant.spring-learn.controller.CountryController
Method Annotation: @GetMapping("/countries/{code}")
Method Name: getCountry(String code)
Method Implemetation: Invoke countryService.getCountry(code) 
Service Method: com.cognizant.spring-learn.service.CountryService.getCountry(String code)

Service Method Implementation:
•	Get the country code using @PathVariable
•	Get country list from country.xml
•	Iterate through the country list
•	Make a case insensitive matching of country code and return the country.
•	Lambda expression can also be used instead of iterating the country list
Sample Request: http://localhost:8083/country/in

Sample Response:
{
  "code": "IN",
  "name": "India"
}
 
