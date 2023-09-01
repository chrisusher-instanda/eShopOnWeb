package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LandingPage {

    //initialize the driver instance and object of the class

    public LandingPage() {
        /*initElements method will create connection in between the current
        driver session (instance) and the object of the current class.
         */
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[@class='esh-identity-name esh-identity-name--upper']")
    public WebElement loginButton;

    public void clickTheLoginButton() {
        loginButton.click();
    }
}
