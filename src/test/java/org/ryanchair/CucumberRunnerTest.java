package org.ryanchair;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features"},
        plugin = { "pretty", "html:target/cucumber-html-reports", "io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm","json:target/cucumber-html-reports/cucumber.json"},
        glue = {"org/ryanchair/stepdefenitions"}
)
public class CucumberRunnerTest {

}
