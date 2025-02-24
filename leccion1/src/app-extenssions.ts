import { LitElement,html } from "lit";
import { customElement, property } from "lit/decorators.js";
/**
 * El nombre de mi componente debe constar de dos o mas elemntos
 * <Elemento1>-<Elemento2>
 * con el fin de evitar colisiones en html
 */
@customElement("app-extenssions")
export class Extessions extends LitElement{
    @property()
    bodyText="Text in child expression";
    @property()
    label="cerrar";
    @property({type:Boolean})
    editing:boolean=true;
    @property({type:Number})
    value:number=7;
    condition=true

    @property()
    animals=["pato","ganso"]

    eventClick() {
        alert("Click")
      }
    render(){
        return html`
            <div>Child expression ${this.bodyText}</div>
            <button aria-label=${this.label}>X</button>
            <div>
                Boolean expression
                <input type="text" ?disabled=${this.editing}> 
            </div>
            <div>
                Propiedad numerica
                <input type="number" .valueAsNumber=${this.value}>
            </div>
            <div>
                Event
                <button @click="${this.eventClick}">Click me!</button>
            </div>
            <div>
                ${
                    this.condition ? html`<p>La condicion es verdadera</p>`
                    : html`<p>La condicion es falsa</p>`
                }
            </div>
            <div>
                <p>Render un arreglo</p>
                <ul>
                    ${this.animals.map((animal) =>{
                        return html`<li>${animal}</li>`
                    })}
                </ul>
            </div>
        `
    }

}