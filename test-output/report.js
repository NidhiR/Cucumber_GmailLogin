$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/mayank/eclipse-workspace/GmailLogin/src/main/java/Features/login.features");
formatter.feature({
  "line": 1,
  "name": "Gmail Login Feature",
  "description": "",
  "id": "gmail-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# Without examples keywords:-"
    },
    {
      "line": 5,
      "value": "#Scenario: Gmail Login Test Scenario"
    },
    {
      "line": 7,
      "value": "#Given user is on gmail page"
    },
    {
      "line": 8,
      "value": "#Then user enter \"dhappy.123d.123@gmail.com\""
    },
    {
      "line": 9,
      "value": "#Then user click on next button"
    },
    {
      "line": 10,
      "value": "#Then user enter Donkey@123"
    },
    {
      "line": 11,
      "value": "#And user again click on next button"
    },
    {
      "line": 14,
      "value": "#With Examples Keyword:-we need to use scenario outline with examples"
    }
  ],
  "line": 16,
  "name": "Gmail Login Test Scenario",
  "description": "",
  "id": "gmail-login-feature;gmail-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on gmail page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user again click on next button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "gmail-login-feature;gmail-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "gmail-login-feature;gmail-login-test-scenario;;1"
    },
    {
      "cells": [
        "dhappy.123d.123@gmail.com",
        "Donkey@123"
      ],
      "line": 24,
      "id": "gmail-login-feature;gmail-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Gmail Login Test Scenario",
  "description": "",
  "id": "gmail-login-feature;gmail-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on gmail page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter \"dhappy.123d.123@gmail.com\" and \"Donkey@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user again click on next button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_google_page()"
});
formatter.result({
  "duration": 59435772270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhappy.123d.123@gmail.com",
      "offset": 12
    },
    {
      "val": "Donkey@123",
      "offset": 44
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_password(String,String)"
});
formatter.result({
  "duration": 26051555273,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinitions.LoginStepDefinition.user_enter_username_password(LoginStepDefinition.java:71)\n\tat ✽.Then user enter \"dhappy.123d.123@gmail.com\" and \"Donkey@123\"(/home/mayank/eclipse-workspace/GmailLogin/src/main/java/Features/login.features:19)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_again_click_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
});