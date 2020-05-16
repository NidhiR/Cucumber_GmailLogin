package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepDefinition {

	WebDriver driver;
	
	@Given("^user is on gmail page$")
	public void user_is_on_google_page()
	{
		System.setProperty("webdriver.chrome.driver","/usr/bin/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.gmail.com");
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	}
	
	//@Then("^user clicks on gmail button$")
	//public void user_clicks_on_gmail_button()
	//{
	//	driver.findElement(By.linkText("Gmail")).click();
	//}
	
	
	//Data Driven Testing
	//Regular Expression:-
	// 1:-\\”(.*)\\”
	
	/*@Then("^user enter \\”(.*)\\”$")
	public void user_enter_username(String username)
	{
		driver.findElement(By.id("identifierId")).sendKeys(username);
		//driver.findElement(By.id("identifierNext")).click();
		WebDriverWait wait=new WebDriverWait(driver, 20);  
		
	}
	
	@Then("^user click on next button$")
	public void user_click_on_next_button()
	{
		driver.findElement(By.id("identifierNext")).click();
	}
	
	@Then("^user enter \\”(.*)\\”$")
	public void user_enter_password(String password)
	{
		//driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		WebDriverWait wait=new WebDriverWait(driver, 20);  
		WebElement element = wait.until(
	            ExpectedConditions.visibilityOfElementLocated(By.id("password")));
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	}*/
	
	//New Code
	@Then("^user enter \"(.*?)\" and \"(.*?)\"$")
	public void user_enter_username_password(String username,String password)
	{
		driver.findElement(By.id("identifierId")).sendKeys(username);
		//WebDriverWait wait=new WebDriverWait(driver, 20); 
		driver.findElement(By.id("identifierNext")).click();
		WebDriverWait wait=new WebDriverWait(driver, 20);  
		WebElement element = wait.until(
	            ExpectedConditions.visibilityOfElementLocated(By.id("password")));
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	}
	
	@And("^user again click on next button$")
	public void user_again_click_on_next_button()
	{
		driver.findElement(By.id("passwordNext")).click();
	}
}
