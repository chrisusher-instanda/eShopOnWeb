package StepDefinitions;

import io.cucumber.java.*;
import utilities.Driver;

public class Hooks {

    @After
    public static void tearDownScenario(){
        Driver.closeDriver();
    }
}
