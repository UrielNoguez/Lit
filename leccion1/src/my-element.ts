import { css,html,LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class myElement extends LitElement{

  static styles = css`p{
    color: blue;
    font-weight: bold;
  }`

  @property()
  name="alguien";

  render(){
    return html`<p>¡Hola, mundo, de parte de ${this.name}!</p>`;
  }

};