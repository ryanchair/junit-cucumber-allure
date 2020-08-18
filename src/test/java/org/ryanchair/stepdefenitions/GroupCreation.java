package org.ryanchair.stepdefenitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


public class GroupCreation {
    @And("I will create new group with name {string}")
    public void i_will_create_new_group(String group){
        System.out.println("I will create group "+group);
    }
    @Then("The new group has succeed to create")
    public void new_group_has_succeed_to_create(){
        System.out.println("new group has succeed to create");
    }
}
