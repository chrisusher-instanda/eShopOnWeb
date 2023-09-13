package demo.eShopOnWeb.pages;

import demo.eShopOnWeb.basepage.BasePage;
import demo.eShopOnWeb.utilities.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class BasketDetailsPage extends Utility {

    //------------**---Locators------**---//
    @FindBy(xpath = "//*[contains(text(),'Roslyn Red Sheet')]")
    WebElement _Product1;
    @FindBy(xpath = "//*[@class='esh-identity-name esh-identity-name--upper']")
    WebElement _Login;
    @FindBy(xpath = "//div[@class='row']/section[2]/button[@name='updatebutton']")
    WebElement _Update_QTY_Button;
    @FindBy(xpath = "//div[@class='row']/section[2]/a[@class='btn esh-basket-checkout']")
    WebElement _Checkout_Button;
    @FindBy(xpath = "//div[@class='row']/section[2]/input[@class='btn esh-basket-checkout']")
    WebElement _PayNow_Button;
    @FindBy(xpath = "//h3[contains(text(), 'Basket is empty.')]")
    WebElement _EmptyBasket_Message;
    @FindBy(xpath = "//h1[contains(text(),'Thanks for your Order!')]")
    WebElement _Payment_Message;

    //--**--Methods To perform Actions On WemElements--**--

    //----This Method Will verify Item Added to Basket
    public String veRiFyBasketProductName(String productName) {
        By ProductIntoBasket = By.xpath("//article[@class='esh-basket-items row']/div/section[contains(text(),'" + productName + "')]");
        WebElement prodElement = driver.findElement(ProductIntoBasket);
        System.out.println(ProductIntoBasket);
        //return getTextFromElement(ProductIntoBasket);
        return getTextFromElement(prodElement);
    }

    //----This Method Will verify Quantity for Item Added to Basket
    public String veRiFyBasketProductQuantity(String productName) {
        By QuantityIntoBasket = By.xpath("//article[@class='esh-basket-items row']/div/section[contains(text(),'" + productName + "')]/../section[4]/input[@type='number']");
        WebElement qtyElement = driver.findElement(QuantityIntoBasket);
        String attributeValue = qtyElement.getAttribute("value");
        return attributeValue;
    }

    //----This Method Will verify Quantity for Item Added to Basket
    public String veRiFyBasketProductPrice(String productName) {
        By Price = By.xpath("//article[@class='esh-basket-items row']/div/section[contains(text(),'" + productName + "')]/../section[3]");
        WebElement price = driver.findElement(Price);
        String priceValue = getTextFromElement(price);
        return priceValue;
    }

    //----This Method Will update Quantity for Item Added to Basket
    public void updateBasketProductQuantity(String qty, String productName) {
        By QuantityIntoBasket = By.xpath("//article[@class='esh-basket-items row']/div/section[contains(text(),'" + productName + "')]/../section[4]/input[@type='number']");
        WebElement qtyElement = driver.findElement(QuantityIntoBasket);
        qtyElement.clear();
        sendTextToElement(qtyElement, qty);
    }

    //----This Method Will Click on Update Button
    public void cliCKOnUpdateButton() {
        Reporter.log("click on Update Button" + _Update_QTY_Button + "<br>");
        scrollBottomToView(_Update_QTY_Button);
        clickElementWithJavaScript(driver, _Update_QTY_Button);
    }

    //----This Method Will Click on Checkout Button
    public void cliCKOnCheckButton() {
        Reporter.log("click on checkout Button" + _Update_QTY_Button + "<br>");
        scrollBottomToView(_Checkout_Button);
        clickElementWithJavaScript(driver, _Checkout_Button);
    }

    //----This Method Will Click on Update Button
    public void cliCKOnPayNowButton() {
        Reporter.log("click on payNow Button" + _PayNow_Button + "<br>");
        scrollBottomToView(_PayNow_Button);
        clickElementWithJavaScript(driver, _PayNow_Button);
    }

    //----This Method Will check basket is empty
    public String emptyBasket() {
        return getTextFromElement(_EmptyBasket_Message);
    }

    //----This Method Will check payment success message
    public String successPayment() {
        return getTextFromElement(_Payment_Message);
    }

}
