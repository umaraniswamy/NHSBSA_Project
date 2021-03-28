$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/NHSCostsTracker.feature");
formatter.feature({
  "name": "A preson from Wales",
  "description": "         Inorder to know what help he/she can get with NHS costs\n         So that he/she get the treatment needed",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
        "YES",
        "NO",
        "YES,YES,NO,NO,NO,NO",
        "CHILD TAX",
        "YES",
        "",
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
        "YES",
        "NO",
        "NO,NO,NO,NO,NO,NO",
        "",
        "",
        "",
        "",
        "",
        "",
        "NO",
        "NO",
        "YES",
        "NO",
        "YES",
        "YES",
        ""
      ]
    },
    {
      "cells": [
        "WALES",
        "10-09-1980",
        "YES",
        "YES",
        "YES",
        "",
        "",
        "",
        "",
        "",
        "YES",
        "YES",
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
        "YES",
        "YES",
        "",
        "",
        "",
        "",
        "",
        "YES",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "",
        "YES"
      ]
    },
    {
      "cells": [
        "WALES",
        "10-09-1980",
        "NO",
        "NO",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "YES",
        "YES",
        "YES",
        "NO",
        "NO",
        "",
        "YES"
      ]
    },
    {
      "cells": [
        "WALES",
        "10-09-1980",
        "NO",
        "NO",
        "",
        "",
        "",
        "",
        "",
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
    },
    {
      "cells": [
        "WALES",
        "10-09-1980",
        "YES",
        "YES",
        "NOT_YET",
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
    }
  ]
});
formatter.scenario({
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select \"YES,YES,NO,NO,NO,NO\" on benefits page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.selectBenefits(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"CHILD TAX\" on tax-credit-type page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.selectTaxCreditType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on tax-credit-income page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_tax_credit_income_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"\" on employment-support-allowance-type page and click next",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select \"NO,NO,NO,NO,NO,NO\" on benefits page and click next",
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
  "name": "The person select option \"\" on employment-support-allowance-type page and click next",
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
  "name": "The person select option \"NO\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_pregnant_or_given_birth_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_war_pensioner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on diabetes page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_diabetes_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_glaucoma_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on care-home page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_care_home_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on local-council-assessed and click next",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select option \"YES\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"\" on benefits page and click next",
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
  "name": "The person select option \"\" on employment-support-allowance-type page and click next",
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
  "name": "The person select option \"YES\" on universal-credit-claim page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_claim_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on universal-credit-take-home-pay page and click next",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select option \"YES\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"\" on benefits page and click next",
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
  "name": "The person select option \"\" on employment-support-allowance-type page and click next",
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
  "name": "The person select option \"YES\" on universal-credit-claim page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_claim_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on universal-credit-take-home-pay page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_universal_credit_take_home_pay_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_pregnant_or_given_birth_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_war_pensioner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on diabetes page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_diabetes_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_glaucoma_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on care-home page and click next",
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
  "name": "The person select option \"YES\" on savings page and click next",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select option \"NO\" on live with partner page and click next",
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
  "name": "The person select option \"\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"\" on benefits page and click next",
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
  "name": "The person select option \"\" on employment-support-allowance-type page and click next",
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
  "name": "The person select option \"YES\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_pregnant_or_given_birth_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_war_pensioner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on diabetes page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_diabetes_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_glaucoma_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on care-home page and click next",
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
  "name": "The person select option \"YES\" on savings page and click next",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select option \"NO\" on live with partner page and click next",
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
  "name": "The person select option \"\" on paid-universal-credit page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_paid_universal_credit_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select \"\" on benefits page and click next",
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
  "name": "The person select option \"\" on employment-support-allowance-type page and click next",
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
  "name": "The person select option \"YES\" on pregnant-or-given-birth page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_pregnant_or_given_birth_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on war-pensioner page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_war_pensioner_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on diabetes page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_diabetes_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"NO\" on glaucoma page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_glaucoma_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on care-home page and click next",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.the_person_select_option_on_care_home_page_and_click_next(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The person select option \"YES\" on local-council-assessed and click next",
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
  "name": "Enter circumstances into the Checker tool and get Treatment Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A person navigate to the url on browser \"chrome\"",
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
  "name": "The person select option \"NOT_YET\" on paid-universal-credit page and click next",
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
});