@donwload
Feature: Validate download funcionality

    Scenario Outline: Test File download
        Given I open the browser and load the url <PageURL>
        When I click on first file
        Then I validate donwloaded file extension

        Examples:
            |PageURL                                      |
            | https://the-internet.herokuapp.com/download |