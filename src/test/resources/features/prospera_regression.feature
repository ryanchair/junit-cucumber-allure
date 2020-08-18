Feature: Regression Testing Prospera
  Testing yang dilakukan untuk memastikan bahwa fitur utama tidak mengalami masalah

  Scenario: New Sentra Creation
    Given I am a BO-FD on Prospera
    When I enter username as "ryan chair"
    And I enter password as "P@ssw0rd"
    Then I will see prospera main page
    And I will create new sentra with name "sentra satu"
    Then The new sentra has succeed to create

  Scenario: New Group Creation
    Given I am a BO-FD on Prospera
    When I enter username as "ryan chair"
    And I enter password as "P@ssw0rd"
    Then I will see prospera main page
    And I will create new group with name "group satu"
    Then The new group has succeed to create
