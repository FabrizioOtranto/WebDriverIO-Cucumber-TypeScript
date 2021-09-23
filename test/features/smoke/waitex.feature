@wait
Feature: Wait types demo

    Scenario Outline: Test Diferent wait types
        Given I am on dynamic loading <AppURL> page
        When I clikc on start button
        Then I validate loading icon

        Examples:
        | AppURL |
        | https://the-internet.herokuapp.com/dynamic_loading/1 |