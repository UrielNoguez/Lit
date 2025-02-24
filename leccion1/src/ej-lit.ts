import { css,html,LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ej-lit")
export class EjLit extends LitElement{
    @property()
    value=0
    eventPlus() {
        this.value+=1;
      }
    eventMinus(){
        this.value-=1;
    }
    static styles = css`button{
        height:40px;
        width:20px;
        border-color:black;
        border:5px;
        background-color:magenta;
    }
    input{
        height:40px;
        width:200px;
        border:5px;
        
    }
    `
  render(){
    return html`
    
    <button @click="${this.eventMinus}">-</button>
        <input type="number" .valueAsNumber=${this.value} ?disabled=${true}>
        <button @click="${this.eventPlus}">+</button>
    `;
  }

};