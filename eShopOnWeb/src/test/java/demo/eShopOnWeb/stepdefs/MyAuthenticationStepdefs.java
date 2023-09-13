package demo.eShopOnWeb.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.eShopOnWeb.pages.CatalogPage;
import demo.eShopOnWeb.pages.LoginPage;
import org.junit.Assert;

public class MyAuthenticationStepdefs {

    @Given("I am on the EshopOnWeb Catalog page")
    public void iAmOnTheEshopOnWebLoginPage() {
        new CatalogPage().pageTitle_EShopOnWeb_Visible();
    }

    @When("I enter valid login credentials")
    public void iEnterValidLoginCredentials() {
    }

    @Then("I should be successfully logged in")
    public void iShouldBeSuccessfullyLoggedIn() {
        new CatalogPage().veRiFySuccessFulLogIn();
    }

    @When("I enter invalid login credentials")
    public void iEnterInvalidLoginCredentials() {
    }

    @Then("I should see an error message")
    public void iShouldSeeAnErrorMessage() {
    }

    @And("I should not be logged in")
    public void iShouldNotBeLoggedIn() {
    }

    @When("I click the \"([^\"]*)\" link")
    public void iClickTheLink(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("I enter my email address for password recovery")
    public void iEnterMyEmailAddressForPasswordRecovery() {
    }

    @Then("I should receive an email with password reset instructions")
    public void iShouldReceiveAnEmailWithPasswordResetInstructions() {
    }

    @When("I click on LoginLink On Catalog page")
    public void iClickOnLoginLinkOnCatalogPage() {
        new CatalogPage().cliCKOnLogin();
    }

    @Then("I Redirected to Login Page")
    public void iRedirectedToLoginPage() {
        new LoginPage().pageTitle_LogIn_Visible();
    }

    @When("I enter Email \"([^\"]*)\" On Login page")
    public void iEnterEmailOnLoginPage(String eMail) {
        new LoginPage().eNteR_Email(eMail);
    }

    @And("I enter Password \"([^\"]*)\" On Login page")
    public void iEnterPasswordOnLoginPage(String pAssWord) {
        new LoginPage().eNteR_Password(pAssWord);
    }

    @And("I click the Login button On Login page")
    public void iClickTheLoginButton() {
        new LoginPage().cliCKOnLoginButton();
    }

    @Then("I validate invalidValue For Email \"([^\"]*)\" On Login page")
    public void iValidateEmailLoginPage(String emptyValueErrorMessage) {
        Assert.assertEquals(emptyValueErrorMessage, new LoginPage().verIFyEmptyValueEmailErrorMessage());

    }

    @Then("I validate invalidValue For Password \"([^\"]*)\" On Login page")
    public void iValidatePasswordLoginPage(String emptyValueErrorMessage) {
        Assert.assertEquals(emptyValueErrorMessage, new LoginPage().verIFyEmptyValuePasswordErrorMessage());
    }

    @Then("I validate invalidValue For InvalidEmail \"([^\"]*)\" On Login page")
    public void iValidateInvalidValueForInvalidEmailOnLoginPage(String inValidPassword) {
        Assert.assertEquals(inValidPassword, new LoginPage().verIFyInvalidValuePasswordErrorMessage());
    }
}
