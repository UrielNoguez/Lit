import { expect, fixture } from "@open-wc/testing";
import { html,PropertyValues } from "lit";
import { formMensage } from "./form-msg";

describe("Set de pruebas unitarias ejercicio 2, form-limit",()=>{
    it("should be true",()=>{
        expect(true).eqls(true);
    })
    it("should be instance",async()=>{
            let element:formMensage
            element=await fixture(html`<form-msg></form-msg>`)
            expect(element).to.be.instanceOf(formMensage)
        })
    
    it("should has msg",async()=>{
        let element:formMensage
        element=await fixture(html`<form-msg></form-msg>`)
        element.isError=false
        const changedProperties = new Map<PropertyKey, unknown>([['isError', false]]);
        element.updated(changedProperties as PropertyValues<formMensage>);
        
        let msg="Correo electonico mal escrito";
        expect(element.msg).eqls(msg);
    })
    it("should hasn't msg",async()=>{
        let element:formMensage
        element=await fixture(html`<form-msg></form-msg>`)
        element.isError=true
        const changedProperties = new Map<PropertyKey, unknown>([['isError', true]]);
        element.updated(changedProperties as PropertyValues<formMensage>);
        
        let msg="";
        expect(element.msg).eqls(msg);
    })
    it("should contain HTML in false", async () => {
        let element:formMensage
        let d=false;
        element=await fixture(html`<form-msg .isError=${d}></form-msg>`)
        
        expect(element).shadowDom.equal("<span class=\"error\">Correo electonico mal escrito</span>");
      });
      it("should not contain HTML in true", async () => {
        let element:formMensage
        let d=true;
        element=await fixture(html`<form-msg .isError=${d}></form-msg>`)
        
        expect(element).shadowDom.equal("<span class=\"error\"></span>");
      });
})