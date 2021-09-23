import {Given, When, Then} from "@wdio/cucumber-framework"
import formPage from "../../src/pages/form.page"
import formData from "../resources/formdata.json"
import { ParseJSONFile } from "../../src/utils/fileutils"
import { RESOURCE_FOLDER_PATH } from "../../src/constants/pathconst"

Given("I am on form page {string}", async (pageurl:string) =>{
    await browser.maximizeWindow()
    await browser.url(pageurl) 
})

 
When(/^I enter all mandate fields$/, async () =>{
    await formPage.setFirstname(formData.firstname)
    await formPage.setLastname(formData.lastname)
    await formPage.setAddress(formData.Address)
    await formPage.setEmail(formData.email)
    await formPage.setMobileNumber(formData.phoneNumber)
    await formPage.setSubject(formData.subject)
    await formPage.clickSubmit()
})

When(/^I enter all mandate fields from (.+)$/, async (file:string) =>{
    let testData = ParseJSONFile(RESOURCE_FOLDER_PATH + file)

    await formPage.setFirstname(testData.firstname)
    await formPage.setLastname(testData.lastname)
    await formPage.setAddress(testData.Address)
    await formPage.setEmail(testData.email)
    await formPage.setMobileNumber(testData.phoneNumber)
    await formPage.setSubject(testData.subject)
    await formPage.clickSubmit()
})
