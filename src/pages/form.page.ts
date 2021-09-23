import { click, selectDropdown, setText } from "../utils/utils"
import waitexPage from "./waitex.page"

class FormPage {

    get firstname() { return $("#firstName")}
    get lastname() { return $("#lastName")}
    get gender() {return $("input[id='gender-radio-1']")}
    get mail() { return $("#userEmail")}
    get mobile() { return $("#userNumber")}
    get subject() { return $("#subjectsInput")}
    get address() { return $("#currentAddress")}
    get submitBtn() {return $("#submit") }

    async setFirstname(firstname:string){
        await setText(this.firstname,firstname)
    }

    async setLastname(lastname:string){
        await setText(this.lastname,lastname)
    }
    
    async selectGender(){
        await click(this.gender)
    }

    async setEmail(mail:string){
        await setText(this.mail,mail)
    }

    async setMobileNumber(mobileNumber:string){
        await setText(this.mobile,mobileNumber)
    }

    async setSubject(subject:string){
        await setText(this.subject,subject)
    }

    async setAddress(address:string){
        await setText(this.address,address)
    }

    async clickSubmit(){
        await this.submitBtn.waitForClickable({timeout:10000, timeoutMsg: "not clickable"})
        await click(this.submitBtn)
    }

}

export default new FormPage()