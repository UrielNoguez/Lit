import { expect, fixture } from "@open-wc/testing";
import { html,PropertyValues } from "lit";
import { formMensagePswd } from "./form-msg-pswd.ts";

describe("Set de pruebas unitarias ejercicio 2, form-limit-pswd",()=>{
    it("should be true",()=>{
        expect(true).eqls(true);
    })
    it("should be instance",async()=>{
            let element:formMensagePswd
            element=await fixture(html`<form-msg-pswd></form-msg-pswd>`)
            expect(element).to.be.instanceOf(formMensagePswd)
        })
    
    it("should has msg",async()=>{
        let element:formMensagePswd
        element=await fixture(html`<form-msg-pswd></form-msg-pswd>`)
        element.isError=false
        const changedProperties = new Map<PropertyKey, unknown>([['isError', false]]);
        element.updated(changedProperties as PropertyValues<formMensagePswd>);
        
        let msg="La contraseña no puede estar vacia";
        expect(element.msg).eqls(msg);
    })
    it("should hasn't msg",async()=>{
        let element:formMensagePswd
        element=await fixture(html`<form-msg-pswd></form-msg-pswd>`)
        element.isError=true
        const changedProperties = new Map<PropertyKey, unknown>([['isError', true]]);
        element.updated(changedProperties as PropertyValues<formMensagePswd>);
        
        let msg="";
        expect(element.msg).eqls(msg);
    })
    it("should contain HTML in false", async () => {
        let element:formMensagePswd
        let d=false;
        element=await fixture(html`<form-msg-pswd .isError=${d}></form-msg-pswd>`)
        
        expect(element).shadowDom.equal("<span class=\"error\">La contraseña no puede estar vacia</span>");
      });
      it("should not contain HTML in true", async () => {
        let element:formMensagePswd
        let d=true;
        element=await fixture(html`<form-msg-pswd .isError=${d}></form-msg-pswd>`)
        
        expect(element).shadowDom.equal("<span class=\"error\"></span>");
      });
})