import { expect, fixture } from "@open-wc/testing";
import { EjLit } from "./ej-lit";
import { html } from "lit";

describe("Set de pruebas unitarias del ejercicio 1",()=>{
    it("should be true", () => {
        expect(true).eqls(true);
      });
    
    it("shoul be instance",async ()=>{
      let element:EjLit;
      element=await fixture(html`<ej-lit></ej-lit>`)
      expect(element).to.be.instanceOf(EjLit)
    })
    
    it("should incrase",async ()=>{
      let element:EjLit;
      element=await fixture(html`<ej-lit></ej-lit>`)
      let valor=1;
      element.eventPlus();
      expect(element.value).equals(valor);
    })
    it("should decrease",async ()=>{
      let element:EjLit;
      element=await fixture(html`<ej-lit></ej-lit>`)
      let valor=-1;
      element.eventMinus();
      expect(element.value).equals(valor);
    })

    it("if NaN should be 0",async()=>{
      let par:any="abc";
      let element:EjLit;
      element=await fixture(html`<ej-lit value=${par}></ej-lit>`)
      const valor=0;
      expect(element.value).equals(valor);
    })

    it("should contain HTML", async () => {
      let element: EjLit;
      element = await fixture(html`<ej-lit></ej-lit>`);
      expect(element).shadowDom.equal("<button>-</button>\n<input type=\"number\" disabled>\n<button>+</button>");
    });

})