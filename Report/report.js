$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/NHSCostsTracker.feature");
formatter.feature({
  "name": "A preson from Wales",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A person navigate to the url \"https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The person should be navigated to Start Page",
  "keyword": "Then "
});
formatter.step({
  "name": "The person click on Start button",
  "keyword": "When "
});
formatter.step({
  "name": "The person select \"\u003cCOUNTRY\u003e\" on where-you-live page and click next",
  "keyword": "Then "
});
formatter.step({
  "name": "The person enter \"\u003cDOB\u003e\" and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cLIVEWITHPARTNER\u003e\" on live with partner page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cCLAIM_BENEFIT\u003e\" on claim-benefits-tax-credits page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cUNIVERSAL_CREDITS\u003e\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select \"\u003cUNIVERSAL_BENEFITS\u003e\" on benefits page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cTAX_TYPE\u003e\" on tax-credit-type page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cTAX_CREDIT_INCOME\u003e\" on tax-credit-income page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cEMPLOYMENT_ALLOWANCE\u003e\" on employment-support-allowance-type page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cJOBSEEKER_ALLOWANCE\u003e\" on jobseekers-allowance-type page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cUNIVERSAL_CREDIT_CLAIM\u003e\" on universal-credit-claim page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cUNIVERSAL_TAKE_HOME_PAY\u003e\" on universal-credit-take-home-pay page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cPREGNANT_OR_GIVE_BIRTH\u003e\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cWAR_PENSIONER\u003e\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cDIABETES\u003e\" on diabetes page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cGLAUCOMA\u003e\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cCARE_HOME\u003e\" on care-home page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cLOCAL_COUNSIL_ASSESSED\u003e\" on local-council-assessed and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person select option \"\u003cSAVINGS\u003e\" on savings page and click next",
  "keyword": "And "
});
formatter.step({
  "name": "The person get help with NHS costs",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "COUNTRY",
        "DOB",
        "LIVEWITHPARTNER",
        "CLAIM_BENEFIT",
        "UNIVERSAL_CREDITS",
        "UNIVERSAL_BENEFITS",
        "TAX_TYPE",
        "TAX_CREDIT_INCOME",
        "EMPLOYMENT_ALLOWANCE",
        "JOBSEEKER_ALLOWANCE",
        "UNIVERSAL_CREDIT_CLAIM",
        "UNIVERSAL_TAKE_HOME_PAY",
        "PREGNANT_OR_GIVE_BIRTH",
        "WAR_PENSIONER",
        "DIABETES",
        "GLAUCOMA",
        "CARE_HOME",
        "LOCAL_COUNSIL_ASSESSED",
        "SAVINGS"
      ]
    },
    {
      "cells": [
        "WALES",
        "10-09-1980",
        "YES",
        "YES",
        "NO",
        "YES,NO,NO,YES,NO,NO",
        "",
        "",
        "INCOME ESA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "WALES",
        "10-09-1980",
        "YES",
        "NO",
        "NOT_YET",
        "YES,NO,NO,YES,NO,NO",
        "",
        "",
        "INCOME ESA",
        "",
        "",
        "",
        "YES",
        "YES",
        "YES",
        "NO",
        "YES",
        "YES",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url \"https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.a_person_navigate_to_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should be navigated to Start Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_person_should_be_navigated_to_Start_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person click on Start button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.the_person_click_on_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"WALES\" on where-you-live page and click next",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_on_where_you_live_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person enter \"10-09-1980\" and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_enter_day_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on live with partner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_live_with_partner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on claim-benefits-tax-credits page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_claim_benefits_tax_credits_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"YES,NO,NO,YES,NO,NO\" on benefits page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.selectBenefits(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on tax-credit-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.selectTaxCreditType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on tax-credit-income page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_tax_credit_income_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"INCOME ESA\" on employment-support-allowance-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_employment_support_allowance_type_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on jobseekers-allowance-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_jobseekers_allowance_type_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on universal-credit-claim page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_claim_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on universal-credit-take-home-pay page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_take_home_pay_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_pregnant_or_given_birth_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_war_pensioner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on diabetes page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_diabetes_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_glaucoma_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on care-home page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_care_home_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on local-council-assessed and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_local_council_assessed_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on savings page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_savings_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person get help with NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_person_get_help_with_NHS_costs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url \"https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.a_person_navigate_to_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person should be navigated to Start Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_person_should_be_navigated_to_Start_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person click on Start button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.the_person_click_on_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"WALES\" on where-you-live page and click next",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_on_where_you_live_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person enter \"10-09-1980\" and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_enter_day_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on live with partner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_live_with_partner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on claim-benefits-tax-credits page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_claim_benefits_tax_credits_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NOT_YET\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"not-yet\"]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-AR0DR0N\u0027, ip: \u0027192.168.32.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\UMAJIT\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63965}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7a21cddff682010ef6688b29c06f0af3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"not-yet\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:482)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat pageObjects.TrackerPage.applyJavaScriptExecutor(TrackerPage.java:119)\r\n\tat pageObjects.TrackerPage.selectUnversialCreditsNotyetAppliedRadioBtn(TrackerPage.java:154)\r\n\tat stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(stepDefinitions.java:80)\r\n\tat ✽.The person select option \"NOT_YET\" on paid-universal-credit page and click next(file:///C:/Users/UMAJIT/Desktop/Testing/uma%20testing/NHSBSA_Project/src/test/Features/NHSCostsTracker.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The person select \"YES,NO,NO,YES,NO,NO\" on benefits page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.selectBenefits(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"\" on tax-credit-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.selectTaxCreditType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"\" on tax-credit-income page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_tax_credit_income_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"INCOME ESA\" on employment-support-allowance-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_employment_support_allowance_type_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"\" on jobseekers-allowance-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_jobseekers_allowance_type_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"\" on universal-credit-claim page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_claim_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"\" on universal-credit-take-home-pay page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_take_home_pay_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"YES\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_pregnant_or_given_birth_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"YES\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_war_pensioner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"YES\" on diabetes page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_diabetes_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"NO\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_glaucoma_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"YES\" on care-home page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_care_home_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"YES\" on local-council-assessed and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_local_council_assessed_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person select option \"\" on savings page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_savings_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The person get help with NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_person_get_help_with_NHS_costs()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});