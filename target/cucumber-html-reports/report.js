$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/prospera_regression.feature");
formatter.feature({
  "name": "Regression Testing Prospera",
  "description": "  Testing yang dilakukan untuk memastikan bahwa fitur utama tidak mengalami masalah",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "New Sentra Creation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a BO-FD on Prospera",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginUser.i_am_bofd_prospera()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"ryan chair\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginUser.i_enter_bofd_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"P@ssw0rd\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginUser.i_enter_bofd_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see prospera main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUser.i_will_see_prospera_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will create new sentra with name \"sentra satu\"",
  "keyword": "And "
});
formatter.match({
  "location": "SentraCreation.i_will_create_new_sentra(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The new sentra has succeed to create",
  "keyword": "Then "
});
formatter.match({
  "location": "SentraCreation.new_sentra_has_succeed_to_create()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New Group Creation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a BO-FD on Prospera",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginUser.i_am_bofd_prospera()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"ryan chair\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginUser.i_enter_bofd_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"P@ssw0rd\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginUser.i_enter_bofd_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see prospera main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUser.i_will_see_prospera_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will create new group with name \"group satu\"",
  "keyword": "And "
});
formatter.match({
  "location": "GroupCreation.i_will_create_new_group(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The new group has succeed to create",
  "keyword": "Then "
});
formatter.match({
  "location": "GroupCreation.new_group_has_succeed_to_create()"
});
formatter.result({
  "status": "passed"
});
});