import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { MyElement } from "./my-element";
import { fetchImagen } from "./npm.ts"
import sinon from "sinon";

describe("Set de pruebas unitarias para el ejercicio 3",()=>{

    it("should be true",()=>{
        expect(true).eqls(true)
    })

    it("should be instance of MyElement",async()=>{
        let element:MyElement
        element=await fixture(html`<my-element></my-element>`)
        expect(element).instanceOf(MyElement)
    })

    it("should return imagen",async ()=>{
        let fetchStub=sinon.stub(globalThis,"fetch");
        let abortController = new AbortController();

    const mockResponse = {
        numero_de_imagen: 1,
        nombre: "assets/images/paisaje1.jpg",
        alt: "Imagen 1",
        descripcion: "Descripción de la imagen 1"
    };
    fetchStub.resolves(
      new Response(JSON.stringify(mockResponse))
    );
    const result = await fetchImagen(
      "1",
      abortController.signal
    );
    expect(result).to.deep.equal(mockResponse);
    
    fetchStub.restore();
    })

    it("should throw a error",async ()=>{
        let fetchStub=sinon.stub(globalThis,"fetch");
        let abortController = new AbortController();

        const errorMessage = "Imagen no encontrada";
        fetchStub.resolves(new Response(errorMessage));
    
        try {
          await fetchImagen("0", abortController.signal);
        } catch (error: any) {
          expect(error.message).to.equal(errorMessage);
        }
    
        fetchStub.restore();
    })

    it("should contain HTML", async () => {
        let element:MyElement
        element=await fixture(html`<my-element></my-element>`)
        expect(element).shadowDom.equal("<label>Coloca un index de imagen:<input></label><span>Cargando informacion</span></span>")
      });

})