import { When } from '@wdio/cucumber-framework';
import fs from 'fs'
import path from "path"
import { Extension } from 'typescript';
import { DONWLOAD_FOLDER_PATH } from '../../src/constants/pathconst';
import { deleteDirectory } from '../../src/utils/fileutils';


When(/^I click on first file$/, async () => {
    const fileElement = await $("//a[contains(@href, 'download')]")
    await fileElement.click()
    await browser.pause(6000)
});


When(/^I validate donwloaded file extension$/, async () => {
    const extensions = [".jpg", ".txt",".pdf", ".png",".json",".jpeg"]
    const files = fs.readdirSync(DONWLOAD_FOLDER_PATH)
    
    files.forEach(file =>{
        expect(extensions).toContain(path.extname(file))
    })
    deleteDirectory(DONWLOAD_FOLDER_PATH)
});






