package org.ryanchair.stepdefenitions;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginUser {
    @Given("I am a BO-FD on Prospera")
    public void i_am_bofd_prospera(){
        System.out.println("I am a BOFD on Prospera");
    }
    @When("I enter username as {string}")
    public void i_enter_bofd_user(String user){
        System.out.println("I enter username as "+user);
    }
    @And("I enter password as {string}")
    public void i_enter_bofd_password(String pass){
        System.out.println("I enter password as "+pass);
    }
    @Then("I will see prospera main page")
    public void i_will_see_prospera_main_page(){
        System.out.println("I will see Prospera main page");
    }
}
