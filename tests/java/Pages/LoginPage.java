package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginPage {


    public LoginPage() {

        PageFactory.initElements(Driver.getDriver(), this);
    }

    //elements
    @FindBy(xpath = "//input[@id='Input_Email']")
    public WebElement emailAddress;

    @FindBy(xpath = "//input[@id='Input_Password']")
    public WebElement password;

    @FindBy(xpath = "//*[@class='btn btn-default']")
    public WebElement loginButton;


    //methods

    public void enterUsername(String name) {
        emailAddress.sendKeys(name);
    }

    public void enterPassword(String passWord) {
        password.sendKeys(passWord);
    }

    public void clickLoginButton() {
        loginButton.click();
    }

    public void enterEmailAddress() {
        emailAddress.sendKeys(ConfigurationReader.getProperty("email"));
    }

    public void enterPassword() {
        password.sendKeys(ConfigurationReader.getProperty("password"));
    }

}
