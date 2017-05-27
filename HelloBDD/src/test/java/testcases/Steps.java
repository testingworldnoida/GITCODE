package testcases;


import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.en.*;

public class Steps {
	

ChromeDriver driver;
@Given("^User is on login page$")
public void User_is_on_login_page() throws Throwable {
    
	System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("https://wwww.facebook.com");
}

@When("^User enters username$")
public void User_enters_username() throws Throwable {
     driver.findElementById("email").sendKeys("Hello");   
}

@When("^User enters password$")
public void User_enters_password() throws Throwable {
	driver.findElementById("pass").sendKeys("Hello");  
}

@When("^User click on signin button$")
public void User_click_on_signin_button() throws Throwable {
 
}

@Then("^User logged in successfully$")
public void User_logged_in_successfully() throws Throwable {
  
}

@When("^User enters username \"([^\"]*)\"$")
public void User_enters_username(String arg1) throws Throwable {
	driver.findElementById("email").sendKeys(arg1);  
}

@When("^User enters password  \"([^\"]*)\"$")
public void User_enters_password(String arg1) throws Throwable {
    // Express the Regexp above with the code you wish you had
	driver.findElementById("email").sendKeys(arg1);  
}

@Then("^User should not logged in successfully$")
public void User_should_not_logged_in_successfully() throws Throwable {
   
}



}
