import { Given, Then } from '@wdio/cucumber-framework';



Given(/^I open the browser and load the url(.+)$/, async (homepageurl) => {
    await browser.url(homepageurl)
    await browser.maximizeWindow() 
});

Then(/^I should see a header with text (.+)$/, async (homePageHeader) => {
    const header = await $(".heading")
    expect(await header.getText()).toEqual(homePageHeader)
});
