Feature: Testing Login Functionality

 Scenario: Login with Valid Credentials
 Given User is on login page
 When User enters username
 And  User enters password
 And  User click on signin button
 Then User logged in successfully
 

 Scenario: Login with InValid Credentials
 Given User is on login page
 When User enters username "hello"
 And  User enters password  "abcd"
 And  User click on signin button
 Then User should not logged in successfully
  