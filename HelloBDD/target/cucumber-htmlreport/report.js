$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('testcases\Login.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Login Functionality",
  "description": "",
  "id": "testing-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with Valid Credentials",
  "description": "",
  "id": "testing-login-functionality;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_is_on_login_page()"
});
formatter.result({
  "duration": 11177981058,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_enters_username()"
});
formatter.result({
  "duration": 459363461,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_enters_password()"
});
formatter.result({
  "duration": 322622014,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_click_on_signin_button()"
});
formatter.result({
  "duration": 46853,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_logged_in_successfully()"
});
formatter.result({
  "duration": 45515,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login with InValid Credentials",
  "description": "",
  "id": "testing-login-functionality;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters username \"hello\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters password  \"abcd\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should not logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_is_on_login_page()"
});
formatter.result({
  "duration": 7917644381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello",
      "offset": 22
    }
  ],
  "location": "Steps.User_enters_username(String)"
});
formatter.result({
  "duration": 459894467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 23
    }
  ],
  "location": "Steps.User_enters_password(String)"
});
formatter.result({
  "duration": 154191051,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_click_on_signin_button()"
});
formatter.result({
  "duration": 46854,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_should_not_logged_in_successfully()"
});
formatter.result({
  "duration": 57563,
  "status": "passed"
});
});