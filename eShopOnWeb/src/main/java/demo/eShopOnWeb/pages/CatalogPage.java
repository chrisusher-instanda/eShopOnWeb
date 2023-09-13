package demo.eShopOnWeb.pages;

import demo.eShopOnWeb.utilities.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Reporter;

import java.util.List;

public class CatalogPage extends Utility {

    //This class contains webElements And Methods for ProductsCatalog Page

    //------------**---Locators------**---//
    @FindBy(xpath = "//*[@alt='eShop On Web']")
    WebElement _TitleCatalogPage;
    @FindBy(xpath = "//*[@class='esh-identity-name esh-identity-name--upper']")
    WebElement _Login;
    @FindBy(xpath = "//*[contains(text(),'demouser@microsoft.com')]")
    WebElement _LogInSuccess;
    @FindBy(xpath = "//a[@class='esh-basketstatus']")
    WebElement _Basket;
    @FindBy(id = "CatalogModel_BrandFilterApplied")
    WebElement _SelectBrandName;
    @FindBy(id = "CatalogModel_TypesFilterApplied")
    WebElement _SelectProductType;
    @FindBy(xpath = "//input[@class='esh-catalog-send']")
    WebElement _SearchButton;

    //--**--Methods To perform Actions On WemElements--**--

    //----This Will check title is visible on CatalogPage---
    public void pageTitle_EShopOnWeb_Visible() {
        verifyThatElementIsDisplayed(_TitleCatalogPage);
        Reporter.log("get text from" + _TitleCatalogPage.toString() + "<br>");
    }

    //----This Method Will Click on Log in Button
    public void cliCKOnLogin() {
        Reporter.log("click on Login Link" + _Login + "<br>");
        mouseHoverToElementAndClick(_Login);
    }

    //----This Method Will Verify Successful Login
    public void veRiFySuccessFulLogIn() {
        verifyThatElementIsDisplayed(_LogInSuccess);
    }

    //This Method Will click on Basket
    public void clickOnBasketToViewDetails() {
        Reporter.log("click on Basket" + _Basket + "<br>");
        mouseHoverToElementAndClick(_Basket);
        if (getTextFromElement(_Basket) == null) {
            System.out.println(getTextFromElement(_Basket));
            System.out.println("Basket is null");
        }
    }

    //This will select Product Brand
    public void selectBrand(String brandName) {
        selectByVisibleTextFromDropDown(_SelectBrandName, brandName);
        clickOnElement(_SearchButton);
    }

    //This will select Product Type
    public void selectType(String productType) {
        selectByVisibleTextFromDropDown(_SelectProductType, productType);
        clickOnElement(_SearchButton);
    }

    //This method will Add Product To basket
    public void addProductToBasket(String brandName) {
        By AddToCartButton = By.xpath("//span[text()='" + brandName + "']/../../input[@type='submit']");
        WebElement productToBasket = driver.findElement(AddToCartButton);
        scrollBottomToView(productToBasket);
        clickElementWithJavaScript(driver, productToBasket);
    }
}
