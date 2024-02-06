# SpaceBeyond | Account | Log-IN and Log-Out

**GX-XX** //URL not exist

## Description
### Sign In and Sign Out on the Web Platform

As a web user, I desire the ability to sign in and sign out on the web platform. This functionality is essential for securely accessing my account and managing my experience on the platform effectively.

✅**ACCEPTANCE CRITERIA**
### Feature: Sign In and Sign Out
**<span style="color: purple;">Background:</span>**

Given I am a web user with valid credentials  
And I access the sign-in page

**<span style="color: green;">Scenario 1 (Happy Path): Sign In with Valid Credentials</span>**

When I enter my correct username and password  
Then I should successfully authenticate on the web platform  
And I am granted secure access to my account.

**<span style="color: green;">Scenario 2: Validation for "Name" Field Empty</span>**

When the user attempts to sign in with the "Name" field empty  
Then the system displays an error message indicating that the "Name" field is "Required"  
And Sign-in should not proceed until the required field is completed.

**<span style="color: green;">Scenario 3: Validation for "Password" Field Empty</span>**

When the user attempts to sign in with the "Password" field empty  
Then the system displays an error message indicating that the "Password" field is "Required"  
And Sign-in should not proceed until the required field is completed.

**<span style="color: red;">Scenario 4: Sign In with Invalid Credentials</span>**

When the user attempts to sign in by entering invalid data in the username or password field  
Then the system should display an error message indicating that invalid credentials have been used  
And Sign-in should not proceed until valid data is entered.

**<span style="color: green;">Scenario 5 (Happy Path): Sign In and Sign Out Successfully</span>**

When I enter my correct username and password  
Then I should successfully authenticate on the web platform  
And I am granted secure access to my account.

When I sign out  
Then I should securely sign out  
And return to the home screen  
And the option to sign in again should be available.
