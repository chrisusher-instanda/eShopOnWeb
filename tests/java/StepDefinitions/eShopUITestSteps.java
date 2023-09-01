package StepDefinitions;

import Pages.LandingPage;
import Pages.LoginPage;
import Pages.SelectItemsPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import utilities.ConfigurationReader;
import utilities.Driver;


public class eShopUITestSteps {
    LandingPage landingPage = new LandingPage();
    LoginPage loginPage = new LoginPage();
    SelectItemsPage selectItemsPage = new SelectItemsPage();


    @Given("I am on eShop landing page")
    public void i_am_on_e_shop_landing_page(){
        Driver.getDriver().get(ConfigurationReader.getProperty("env"));
    }

    @And("I click on login button")
    public void iClickOnLoginButton(){
        landingPage.clickTheLoginButton();
    }

    @When("I enter email and password")
    public void iEnterEmailAndPassword(){
        loginPage.enterEmailAddress();
        loginPage.enterPassword();
    }

    @And("I click on the login button")
    public void iClickOnTheLoginButton(){
        loginPage.clickLoginButton();
    }

    @Then("I am on eShop main page")
    public void iAmOnEShopMainPage() {
        Assert.assertEquals(Driver.getDriver().getTitle(), "Catalog - Microsoft.eShopOnWeb");
    }

    @Given("I select brand {string} and type {string}")
    public void iSelectBrandAndType(String brand, String type) {
        selectItemsPage.selectBrand(brand);
        selectItemsPage.selectType(type);
    }

    @And("I click on search button")
    public void iClickOnSearchButton() {
        selectItemsPage.clickSendButton();
    }

    @When("I select {string} product")
    public void ISelect(String product) {
        selectItemsPage.selectProduct(product);
    }

    @And("I click on checkout button")
    public void iClickOnCheckoutButton() {
        selectItemsPage.clickCheckout();
    }

    @And("I click the pay now button")
    public void iClickThePayNowButton() {
        selectItemsPage.clickPayNowButton();
    }

    @Then("I should see the {string} message")
    public void iShouldSeeTheMessage(String message) {
        selectItemsPage.verifyTheMessage(message);
    }

}
