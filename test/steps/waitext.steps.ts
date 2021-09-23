import {Given, When, Then} from "@wdio/cucumber-framework"
import waitexPage from "../../src/pages/waitex.page"


Given(/^I am on dynamic loading (.+) page$/, async (appURL) =>{
    await browser.maximizeWindow()
    await browser.url(appURL)
})

When(/^I clikc on start button$/, async () =>{
    const startBtn = await $("#start button")
    await  waitexPage.startBtn.click()
})

Then(/^I validate loading icon$/, async () =>{

    await waitexPage.loadBar.waitForDisplayed({reverse:true, timeout:10000,timeoutMsg: "It was displayed after 10 seconds"})

    await browser.waitUntil( async() => await waitexPage.msg.getText() ==="Hello World!", {
        timeout: 10000,
        timeoutMsg: "Message was not displayed in 10 seconds"
    })
    await expect(waitexPage.msg).toBeDisplayed()

})