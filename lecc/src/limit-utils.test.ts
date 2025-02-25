import { expect } from "@open-wc/testing";

import { verifyEmail } from "./limit-utils.ts"
describe("Set de pruebas unitarias ejercicio 2, form-limit",()=>{
    it("should be true", () => {
        expect(true).eqls(true);
      });

    it("should be return true",async()=>{
        let email:string="abc@abc.abc"
        let valor:boolean=true;
        expect(verifyEmail(email)).equals(valor);
    })

    it("should return false",()=>{
        let email:string="abc@abc.a"
        let valor:boolean=false;
        expect(verifyEmail(email)).equals(valor);
    })
})