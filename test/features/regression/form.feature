 @forms
Feature: Test practice form

    @form
    Scenario: Validate form data with JSON file
        Given I am on form page "https://demoqa.com/automation-practice-form"
        When I enter all mandate fields

    Scenario Outline: Validate form data with JSON file
        Given I am on form page "https://demoqa.com/automation-practice-form"
        When I enter all mandate fields from <file>

    Examples:
        | file |
        | formdata2.json |
        | formdata3.json |