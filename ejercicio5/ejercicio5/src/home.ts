import { LitElement, css, html,PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { AppHeader } from './app-header'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'


@customElement('home-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <app-header></app-header>

      <cards-element></cards-element>
      
      <app-footer></app-footer>
    `;
  }
  updated(changedes:PropertyValues<this>){
    console.log(localStorage);
    if(localStorage.getItem("usuario") == null){
        window.location.href = 'index.html';
    }
    

}
}
