import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { formLimit } from "./form-limit";

describe("Set de pruebas unitarias ejercicio 2, form-limit",()=>{
    it("should be true", () => {
        expect(true).eqls(true);
      });

    it("should be instance",async()=>{
        let element:formLimit
        element=await fixture(html`<form-limit></form-limit>`)
        expect(element).to.be.instanceOf(formLimit)
    })

    it('should set isUserName to false for an invalid email', async () => {
        let element:formLimit
        element=await fixture(html`<form-limit></form-limit>`)
        const inputElement = document.createElement('input');
        inputElement.value = 'invalid-email';
        const event = new Event('input', { bubbles: true, cancelable: true });
        Object.defineProperty(event, 'target', { value: inputElement });


        element._isValidEmail(event);

        expect(element.isUserName).equals(false);
    });

    it('should set isUserName to true for a valid email', async () => {
        let element:formLimit
        element=await fixture(html`<form-limit></form-limit>`)
        const inputElement = document.createElement('input');
        inputElement.value = 'abc@abc.abc';
        const event = new Event('input', { bubbles: true, cancelable: true });
        Object.defineProperty(event, 'target', { value: inputElement });


        element._isValidEmail(event);

        expect(element.isUserName).equals(true);
    });

    it('should set isPassword to false for an empity password', async () => {
        let element:formLimit
        element=await fixture(html`<form-limit></form-limit>`)
        const inputElement = document.createElement('input');
        inputElement.value = '';
        const event = new Event('input', { bubbles: true, cancelable: true });
        Object.defineProperty(event, 'target', { value: inputElement });


        element._isValidPswd(event);

        expect(element.isPassword).equals(false);
    });

    it('should set isPassword to true for a valid password', async () => {
        let element:formLimit
        element=await fixture(html`<form-limit></form-limit>`)
        const inputElement = document.createElement('input');
        inputElement.value = 'aaaa';
        const event = new Event('input', { bubbles: true, cancelable: true });
        Object.defineProperty(event, 'target', { value: inputElement });


        element._isValidPswd(event);

        expect(element.isPassword).equals(true);
    });
})