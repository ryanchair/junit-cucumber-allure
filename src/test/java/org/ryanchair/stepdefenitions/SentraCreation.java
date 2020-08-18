package org.ryanchair.stepdefenitions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.qameta.allure.Feature;
import io.qameta.allure.Step;

public class SentraCreation {
    @And("I will create new sentra with name {string}")
    public void i_will_create_new_sentra(String sentra){
        System.out.println("I will create sentra "+sentra);
    }
    @Then("The new sentra has succeed to create")
    public void new_sentra_has_succeed_to_create(){
            System.out.println("new sentra has succeed to create");
    }
}