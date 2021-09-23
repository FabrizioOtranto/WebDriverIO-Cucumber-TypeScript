Feature: chai page

@Register
  Scenario Outline: test chai form

    Given I am on practice page "http://www.practiceselenium.com/practice-form.html"
    Then I validate page header "Practice Form"
    When I enter firstname <fname> and lastname <lname>
    And I select gender <gender> years <years> favorte chai <favchai> and reason <reason>
    And I select continent <continent> and comands <command>
    And I click on submit button
    Then I validate page header "We're passionate about tea."

    Examples:
      | fname | lname   | gender | years | favchai | reason | continent   | command |
      | Fabrizio | Otranto | Male | 6 | Red Tea | Harmless Addiction  | South America | Wait Commands |  
