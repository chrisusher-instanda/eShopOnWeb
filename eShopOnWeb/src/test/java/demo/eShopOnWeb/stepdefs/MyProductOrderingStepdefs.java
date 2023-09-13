package demo.eShopOnWeb.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.deps.com.thoughtworks.xstream.mapper.Mapper;
import demo.eShopOnWeb.pages.BasketDetailsPage;
import demo.eShopOnWeb.pages.CatalogPage;
import org.junit.Assert;

public class MyProductOrderingStepdefs {
//    @Given("I am logged in to EshopOnWeb")
//    public void iAmLoggedInToEshopOnWeb() {
//    }
//
//    @When("^I add products to my shopping cart$")
//    public void iAddProductsToMyShoppingCart() {
//
//    }
//
//    @Then("^I should see the updated cart with the added items$")
//    public void iShouldSeeTheUpdatedCartWithTheAddedItems() {
//    }
//
//    @Given("^I have items in my shopping cart$")
//    public void iHaveItemsInMyShoppingCart() {
//    }
//
//    @When("^I change the quantity of items$")
//    public void iChangeTheQuantityOfItems() {
//    }
//
//    @And("^I click the \"([^\"]*)\" button$")
//    public void iClickTheButton(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }

//    @Then("^the cart should reflect the updated quantities$")
//    public void theCartShouldReflectTheUpdatedQuantities() {
//    }
//
//    @When("^I proceed to checkout$")
//    public void iProceedToCheckout() {
//    }
//
//    @And("^I enter valid shipping and payment information$")
//    public void iEnterValidShippingAndPaymentInformation() {
//    }
//
//    @And("^I confirm the purchase$")
//    public void iConfirmThePurchase() {
//    }
//
//    @Then("^I should receive an order confirmation$")
//    public void iShouldReceiveAnOrderConfirmation() {
//    }
//
//    @And("the purchased items should be removed from my cart")
//    public void thePurchasedItemsShouldBeRemovedFromMyCart() {
//    }

    @Then("I should see the updated Basket with the added items")
    public void iShouldSeeTheUpdatedBasketWithTheAddedItems() {
        new CatalogPage().clickOnBasketToViewDetails();
    }

    @Then("Basket should reflect the added Item")
    public void basketShouldReflectTheAddedItem() {
        new CatalogPage().clickOnBasketToViewDetails();
    }

    @Then("I verify \"([^\"]*)\" added to Basket On BasketDetails page")
    public void iVerifyAddedToBasketOnBasketDetailsPage(String product) {
        Assert.assertEquals(product, new BasketDetailsPage().veRiFyBasketProductName(product));
    }

    @Then("I verify \"([^\"]*)\" for \"([^\"]*)\" added to Basket On BasketDetails page")
    public void iVerifyForAddedToBasketOnBasketDetailsPage(String qty, String product) {
        Assert.assertEquals(product, new BasketDetailsPage().veRiFyBasketProductName(product));
        Assert.assertEquals(qty, new BasketDetailsPage().veRiFyBasketProductQuantity(product));
    }

    @When("I change the quantity value \"([^\"]*)\" for \"([^\"]*)\" to Basket On BasketDetails page")
    public void iChangeTheQuantityValueForToBasketOnBasketDetailsPage(String qty, String product) {
        new BasketDetailsPage().updateBasketProductQuantity(qty, product);
    }

    @And("I click the Update button On BasketDetails page")
    public void iClickTheUpdateButtonOnBasketDetailsPage() {
        new BasketDetailsPage().cliCKOnUpdateButton();
    }

    @And("I select \"([^\"]*)\" from select dropdown option On Catalog page")
    public void iSelectFromSelectDropdownOptionOnCatalogPage(String brandName) {
        new CatalogPage().selectBrand(brandName);
    }

    @And("I add \"([^\"]*)\" to basket On Catalog page")
    public void iAddToBasketOnCatalogPage(String product) {
        new CatalogPage().addProductToBasket(product);
    }

    @And("I select product \"([^\"]*)\" from select dropdown option On Catalog page")
    public void iSelectProductFromSelectDropdownOptionOnCatalogPage(String productType) {
        new CatalogPage().selectType(productType);
    }

    @Then("I validate Empty Basket \"([^\"]*)\" On BasketDetails page")
    public void iValidateEmptyBasketOnBasketDetailsPage(String message) {
        Assert.assertEquals(message, new BasketDetailsPage().emptyBasket());
    }

    @And("I click CheckOut button On BasketDetails page")
    public void iClickTheCheckOutButtonOnBasketDetailsPage() {
        new BasketDetailsPage().cliCKOnCheckButton();
    }

    @And("I click PayNow button On BasketDetails page")
    public void iClickPayNowButtonOnBasketDetailsPage() {
        new BasketDetailsPage().cliCKOnPayNowButton();
    }

    @Then("I validate Payment Success \"([^\"]*)\" On BasketDetails page")
    public void iValidatePaymentSuccessOnBasketDetailsPage(String message) {
        Assert.assertEquals(message, new BasketDetailsPage().successPayment());
    }

    @Then("I verify Price \"([^\"]*)\" for \"([^\"]*)\" added to Basket On BasketDetails page")
    public void iVerifyPriceForAddedToBasketOnBasketDetailsPage(String price, String product) {
        Assert.assertEquals(product, new BasketDetailsPage().veRiFyBasketProductName(product));
        Assert.assertEquals(price, new BasketDetailsPage().veRiFyBasketProductPrice(product));
    }
}
