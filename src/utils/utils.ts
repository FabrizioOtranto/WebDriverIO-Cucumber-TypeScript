import {ChainablePromiseElement} from "webdriverio"

export const selectDropdown = async(elements:Promise<WebdriverIO.ElementArray>, value:string) => {
        for(let i=0; i<(await elements).length; i++){
            const elem = await(elements[i]).getAttribute('value')
            if(elem === value){
              await (elements[i]).click()
              break
            }
          }
    }

export const setText = async(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string) => {
      await(element).setValue(text)
    }

export const selectVisibletext = async(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string) => {
  await (element).selectByVisibleText(text)
}

export const click = async(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
  await (element).click()
}