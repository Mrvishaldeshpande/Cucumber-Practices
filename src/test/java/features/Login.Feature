Feature:  Login feature
Scenario Outline: Login Test

Given user hit "www.google.com" and land on login page
When user enter "<username>" and "<password>" 
And user click on login button
Then user will land on loginhome page 
And validate below details
|EmployeeName|EmployeeID|
|Vishal|444184|
|Shraddha|518649|
|Animesh|100100|
|Jagadeesh|200200|
Examples:
|username|password|
|username1|password1|
|username2|password2|
|username3|password3|
|username4|password4|