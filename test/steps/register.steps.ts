import { Given, Then, When } from '@wdio/cucumber-framework';
import registerPage from "../../src/pages/register.page"

Given("I am on practice page {string}",async (url) => {
  
  await browser.url(url)
  await browser.maximizeWindow()

  });

  Then(/^I validate page header \"([^\"]*)\"$/,async (header:string) => {
    registerPage.validateheader(header)
  });

  When(/^I enter firstname (.+) and lastname (.+)$/,async (fname:string, lname:string ) => {
    await registerPage.setFirstname(fname)
    await registerPage.setLastname(lname)

  });

  When(/^I select gender (.+) years (.+) favorte chai (.+) and reason (.+)$/, async  (gender:string, years:string, favchai:string, reason:string ) => {

    await registerPage.selectGender(gender)
    await registerPage.selectExperience(years)
    await registerPage.selectFavChai(favchai)
    await registerPage.selectReason(reason)
  });

  When(/^I select continent (.+) and comands (.+)$/,async  (continent:string, command:string )=>  {
    await registerPage.selectContinent(continent)
    await registerPage.selectCommand(command)
    
  });

  When(/^I click on submit button$/, async () => {
    await registerPage.clickSubmit()
  });



