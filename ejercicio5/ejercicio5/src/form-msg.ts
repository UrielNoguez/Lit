import { LitElement,html,PropertyValues,css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("form-msg")
export class formMensage extends LitElement{
    static styles = css`.error{
        color: blue;
        opacity:0.5;
      }`
    @property()
    isError?:boolean
    @property()
    msg=""

    

    render(){
        return html`
        <span class="error">${this.msg}</span>
        `
    }
    updated(changedes:PropertyValues<this>){
            if(changedes.has('isError')){
                if(!this.isError){
                    this.msg="Correo electonico mal escrito"
                }
                else{
                    this.msg=""
                }
            }
    
        }
}