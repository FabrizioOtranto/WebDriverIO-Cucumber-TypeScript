import { click, selectDropdown, selectVisibletext, setText } from "../utils/utils";
import Page from "./page";

class chaiRegister extends Page{

   private get header() { return $("//h1")}
   private get firstname() {return $("[name=firstname]")}
   private get lastname() {return $("[name=lastname]")}
   private get gender_radio() {return $$("[name=sex]")}
   private get experience_radio()  {return $$("[name=exp]")}
   private get favchai_checkbox() { return $$("input[name*=Tea]")}
   private get whychai_checkbox()  {return $$("[name=tool]")}
   private get continent_dropdown()   { return $("#continents")}
   private get selCommand_multiselect()  { return $("#selenium_commands")}
   private get submit_btn() {return $("#submit")}

    async validateheader(header){
        expect(await this.header).toHaveTextContaining(header)
    }

    async setFirstname(firstname:string){
        await setText(this.firstname, firstname)
    }

    async setLastname(lastname:string){
       await setText(this.lastname,lastname)
    }

    async selectGender(gender:string){
        await selectDropdown(this.gender_radio, gender)
    }

    async selectExperience(years:string){
        await selectDropdown( this.experience_radio, years)
    }

    async selectFavChai(chai:string){
        await selectDropdown(this.favchai_checkbox, chai)
    }

    async selectReason(reason:string){
        await selectDropdown(this.whychai_checkbox, reason)
    }

    async selectContinent(continent:string){
        await selectVisibletext(this.continent_dropdown, continent)
    }

    async selectCommand(command:string){
        await selectVisibletext(this.selCommand_multiselect, command)
    }

    async clickSubmit(){
        await click(this.submit_btn)
    }   
}

export default new chaiRegister()