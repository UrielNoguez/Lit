import { LitElement, css, html,PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'



@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <app-header></app-header>

      <form-limit></form-limit>

      <app-footer></app-footer>
    `;
  }
  updated(changedes:PropertyValues<this>){
    
    console.log(localStorage)
                  if(localStorage.getItem("usuario") == null){
                      
                  }
                  else{
                    
                      window.location.href = 'home.html';
                  }
          
              }
}
