package Selenium_proj;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class UpadteProduct {
	
	
	/*
	 * Scenario: Update Product Quantity and Continue Shopping
	 * 
	 * Steps:
	 * 
	 * Open the website and navigate to the login page. Log in as an admin user.
	 * Select a brand and a product category. Add a product to the basket. Update
	 * the quantity of the product to 2. Click the "Update" button to apply the
	 * quantity change. Proceed to checkout. Click on "Pay Now" to complete the
	 * order. Verify the order confirmation message. Click on "Continue Shopping" to
	 * return to shopping.
	 */

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		WebDriver driver = new ChromeDriver();
		 
        // Step 1: Log In
        driver.get("http://localhost:5106");
        driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 driver.findElement(By.xpath("//a[contains(text(),'Login')]")).click();
		// wait = new WebDriverWait(driver, Duration.ofSeconds(100));
		
        WebElement usernameField = driver.findElement(By.id("Input_Email"));
       
        WebElement passwordField = driver.findElement(By.id("Input_Password"));
        WebElement loginButton = driver.findElement(By.xpath("//button[text()='Log in']"));
        usernameField.sendKeys("admin@microsoft.com");
        passwordField.sendKeys("Pass@word1");
        loginButton.submit();
        Thread.sleep(1000);

        // Step 2: Select Brand and Product
        WebElement brandDropdown = driver.findElement(By.id("CatalogModel_BrandFilterApplied"));
        WebElement productDropdown = driver.findElement(By.id("CatalogModel_TypesFilterApplied"));
        Select brandSelect = new Select(brandDropdown);
        brandSelect.selectByVisibleText(".NET");
        Select productSelect = new Select(productDropdown);
        productSelect.selectByVisibleText("T-Shirt");
        WebElement nextButton = driver.findElement(By.xpath("//input[@type='image']"));
        nextButton.click();
      
        // Step 3: Place the Order
        
        
        WebElement addToBasketButton = driver.findElement(By.xpath("//span[contains(text(),'NET Bot Black Sweatshirt')]//parent::div//parent::form//input[contains(@value,'ADD TO BASKET')]"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView();", addToBasketButton);
   	 Thread.sleep(1000);
   	addToBasketButton.click();  
   	WebElement quantityInput = driver.findElement(By.xpath("//input[@class='esh-basket-input']"));
    quantityInput.clear();
    quantityInput.sendKeys("2");

    WebElement updateButton = driver.findElement(By.xpath("//button[@name='updatebutton']"));
    updateButton.submit();
	WebDriverWait wait1 = new WebDriverWait(driver, Duration.ofSeconds(1000));
    WebElement checkoutButton = wait1.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@class='btn esh-basket-checkout']")));
    checkoutButton.submit();
    WebElement payNowButton = wait1.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[contains(@value,'Pay Now')]")));
    payNowButton.click();
   
  
        // Verify the "Thanks for your Order!" message
        WebElement orderConfirmationMessage = driver.findElement(By.xpath("//h1[contains(text(),'Thanks for your Order')]"));
        String expectedMessage = "Thanks for your Order!";
        String actualMessage = orderConfirmationMessage.getText();
      
       // Assert
        Assert.assertEquals(actualMessage, expectedMessage);
	WebDriverWait wait12 = new WebDriverWait(driver, Duration.ofSeconds(1000));
    WebElement continuebutton = wait12.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(),'Continue Shopping')]")));
    continuebutton.click();


	}

}
