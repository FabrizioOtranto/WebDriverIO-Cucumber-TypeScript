import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../src/pages/login.page';
import SecurePage from '../../src/pages/secure.page';
var {After, Before} = require('@cucumber/cucumber');

const {Eyes, Target} = require('@applitools/eyes-webdriverio');

const pages = {login: LoginPage}

let eyes;
let configuration;
let runner;
eyes = new Eyes(runner);


Before(async function (scenario) {
    configuration = await  eyes.getConfiguration();
    await configuration.setAppName(scenario.pickle.name);
    await configuration.setTestName(scenario.pickle.name);
    await eyes.setConfiguration(configuration);
    await eyes.open(browser)
  });

After(async function(){
    await eyes.close()
})


Given(/^I am on the (\w+) page$/, async (page) => {
   await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    await eyes.check("Login valid credentials", Target.window().fully());
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
      
});

