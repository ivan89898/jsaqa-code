Feature: Book ticket
    Scenario: Should book tickets
        Given user is on cinema page
        When user click on date
        When user click on time
        When user click on place
        When user click on забронировать
        Then user is on payment page
    Scenario: The 3Ticket test
        Given user is on cinema page 2 тест
        When user click on date 2 тест
        When user click on time 2 тест
        When user click on place1 2 тест
        When user click on place2 2 тест
        When user click on place3 2 тест
        When user click on забронировать 2 тест
        Then user is on payment page 2 тест
    Scenario: The false ticket test
        Given user is on cinema page false test
        When user click on date false test
        When user click on time false test
        When user click on place1 false test
        When user click on place2 false test
        When user click again on place1 false test
        When user click again on place2 false test
        Then button "ЗАБРОНИРОВАТЬ" is invisible
        Then user is still on ticket page


