# Automation testing with Cypress

# 1. [Test SauseDemo](https://github.com/Veaceslav85/QA-Testing/tree/QA_Cypress/cypress/e2e/TesteSaucedemo)
##   TestCase #1
###  Access home page. [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/AccesHomePage.cy.js)
#### Description:
     Open home page.
#### Steps to reproduce:
     Go to https://www.saucedemo.com/
#### Expected result:
     User should be able to access https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
#### Status:
     Done

##   TestCase #2
###  Login Without User and Password [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_Without_User_and_Password.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly without introducing a username and password.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Verify if exist a Login Button and click it.
     4. Verify if it display message 'Epic sadface: Username is required'	
#### Expected result:
     User can not login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
#### Status:
     Done

##   TestCase #3
###  Login Without Password [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_Without_Password.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly without introducing a password.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Check if input 'Username' are existing and click on it.
     4. Check if input value is 'standard_user'.	
     5. Verify if exist a Login Button and click it.
     6. Verify if it display message 'Epic sadface: Password is required'.	
#### Expected result:
     User can not login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
     input value 'standard_user'

#### Status:
     Done

##   TestCase #4
###  Login Without User Name [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_Without_User_Name.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly without introducing a  Username.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Check if input 'Password' are existing and click on it.
     4. Check if input value is 'secret_sauce'.	
     5. Verify if exist a Login Button and click it.
     6. Verify if it display message 'Epic sadface: Username is required'	
#### Expected result:
     User can not login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
     input value 'secret_sauce'

#### Status:
     Done

##   TestCase #5
###  Login With Invalid User Name [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_With_Invalid_User_Name.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly with introducing a  Invalid username.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Check if input 'Username' are existing and click on it.
     4. Check if input value is 'invalid_user'.
     5. Check if input 'Password' are existing and click on it.
     6. Check if input value is 'secret_sauce'.	
     7. Verify if exist a Login Button and click it.
     8. Verify if it display message 'Epic sadface: Username and password do not match any user in this service'.	
#### Expected result:
     User can not login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
     input user value 'invalid_user'
     input password value 'secret_sauce'
#### Status:
     Done
     
##   TestCase #6
###  Login With Invalid Password [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_With_Invalid_Password.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly with introducing a  Invalid password.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Check if input 'Username' are existing and click on it.
     4. Check if input value is 'standard_user'.
     5. Check if input 'Password' are existing and click on it.
     6. Check if input value is 'invalid_password'.	
     7. Verify if exist a Login Button and click it.
     8. Verify if it display message 'Epic sadface: Username and password do not match any user in this service'.	
#### Expected result:
     User can not login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
     input user value 'standard_user'
     input password value 'invalid_password'
#### Status:
     Done
     
##   TestCase #7
###  Login With Locked User Name[code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_With_Loked_User_Name.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly with introducing a locked username.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Check if input 'Username' are existing and click on it.
     4. Check if input value is 'locked_out_user'.
     5. Check if input 'Password' are existing and click on it.
     6. Check if input value is 'secret_sauce'.	
     7. Verify if exist a Login Button and click it.
     8. Verify if it display message 'Epic sadface: Sorry, this user has been locked out'.	
#### Expected result:
     User can not login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
     input user value 'locked_out_user'
     input password value 'secret_sauce'
#### Status:
     Done
     
##   TestCase #8
###  Login With Valide User Name and Password [code](https://github.com/Veaceslav85/QA-Testing/blob/QA_Cypress/cypress/e2e/TesteSaucedemo/Login_With_Valide_User_Name_and_Password.cy.js)
#### Description:
     Open the home page and check if the login form is present and working properly with introducing a valide username and valide password.
#### Steps to reproduce:
     1. Go to https://www.saucedemo.com/
     2. Verify if exist login form.
     3. Check if input 'Username' are existing and click on it.
     4. Check if input value is 'standard_user'.
     5. Check if input 'Password' are existing and click on it.
     6. Check if input value is 'secret_sauce'.	
     7. Verify if exist a Login Button and click it.
     8. Verify if it display text 'Products'.
#### Expected result:
     User can login to https://www.saucedemo.com/ 
#### Test Data: 
     https://www.saucedemo.com/
     input user value 'standard_user'
     input password value 'secret_sauce'
#### Status:
     Done

2.   [Test LinkedIn](https://github.com/Veaceslav85/QA-Testing/tree/QA_Cypress/cypress/e2e/TesteLinkedIn)
3.   [Test 999]
