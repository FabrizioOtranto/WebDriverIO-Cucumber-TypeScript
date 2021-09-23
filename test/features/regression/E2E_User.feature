@Regression
Feature: Test End to End User

    @GETCall
    Scenario Outline: Validate End to End Get Single User
        Given I am on page <pageURL>
        When I perform <endPoint> user search
        And I make GET <endPoint> api call
        Then I validate the search result

        Examples:
            | pageURL                   | endPoint     |
            | https://resttesttest.com/ | /api/users/2 |

    @POSTCall
    Scenario Outline: Validate End to End Create User
        Given I am on page <pageURL>
        When I perform create use search for api<endPoint>
        And I make POST <endPoint> api call
        Then I validate the create user search result

        Examples:
            | pageURL                   | endPoint |
            | https://resttesttest.com/ | /api/users |