package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="/home/mayank/eclipse-workspace/GmailLogin/src/main/java/Features/login.features",//Path of feature file
		glue={"stepDefinitions"},//Path of step definition
		format= {"pretty","html:test-output"},//Path of feature file
		monochrome=true,//Display console output in readable format
		strict=true,//it will check if any step is not defined in step definition file
		dryRun = false //to check the mapping is proper between feature file and step definiton file
		)

public class TestRunner {

}
