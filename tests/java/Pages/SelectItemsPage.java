package Pages;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.Driver;

public class SelectItemsPage {

    public SelectItemsPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    //WebElements
    @FindBy(id = "CatalogModel_BrandFilterApplied")
    public WebElement BrandDropdown;
    @FindBy(id = "CatalogModel_TypesFilterApplied")
    public WebElement TypeDropdown;
    @FindBy(xpath = "//input[@type='image']")
    public WebElement sendButton;
    @FindBy(xpath = " //*[contains(text(), '[ Checkout ]')]")
    public WebElement checkoutButton;
    @FindBy(xpath = "//input[@type='submit']")
    public WebElement payNowButton;
    @FindBy(xpath = "//*[contains(text(),'Thanks for your Order!')]")
    public WebElement verificationMessage;


    //Methods

    public void clickBrandButton() {
        BrandDropdown.click();
    }

    public void clickTypeButton() {
        TypeDropdown.click();
    }

    public void clickSendButton() {
        sendButton.click();
    }

    public void selectBrand(String brand) {
        Select selectBrand = new Select(BrandDropdown);
        selectBrand.selectByVisibleText(brand);
    }

    public void selectType(String type) {
        Select selectType = new Select(TypeDropdown);
        selectType.selectByVisibleText(type);
    }

    public void selectProduct(String product) {
        WebElement selectedProduct = Driver.getDriver().findElement(By.xpath("//span[contains(text(), '" + product + "')]/../../input[@class='esh-catalog-button']"));
        selectedProduct.click();
    }

    public static void scrollToElement(WebElement element) {
        ((JavascriptExecutor) Driver.getDriver()).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public static WebElement waitForClickablility(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void clickCheckout() {
        scrollToElement(checkoutButton);
        waitForClickablility(checkoutButton, 2000);
        checkoutButton.sendKeys(Keys.RETURN);
    }

    public void clickPayNowButton() {
        scrollToElement(payNowButton);
        payNowButton.sendKeys(Keys.RETURN);
    }

    public void verifyTheMessage(String message) {
        Assert.assertEquals(message, verificationMessage.getText());
    }
}


