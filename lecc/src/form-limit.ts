import { LitElement,html,css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { verifyEmail } from "./limit-utils";
import "./form-msg.ts"
import "./form-msg-pswd.ts"

@customElement("form-limit")
class formLimit extends LitElement{

    static styles=css`div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 300px;
        
    }
    `

    @property()
    userName?:string
    @property()
    password?:string
    @property()
    isUserName?:boolean
    @property()
    isPassword?:boolean

    
    render (){
        return html`
        <div>
        <p>Correo Electronico</p>
        <p><input type="text" @input=${this._isValidEmail}><form-msg .isError=${this.isUserName}></form-msg></p>
        <p>Contraseña</p>
        <p><input type="text" @input=${this._isValidPswd}><form-msg-pswd .isError=${this.isPassword}></form-msg-pswd></p>
        <br>
        <button ?disabled=${!(this.isUserName && this.isPassword)}>Log in</button>
        </div>
        `
    }

    _isValidEmail(e:Event){
        const email=(e.target as HTMLInputElement).value
        
        if(email){
            this.isUserName=verifyEmail(email);
            console.log("usuario",this.isUserName,this.isPassword)
        }
    }
    _isValidPswd(e:Event){
        const pswd=(e.target as HTMLInputElement).value
        if(pswd){
            if(pswd.length>=1){
                this.isPassword=true
            }
        }
        console.log(this.isPassword)
    }

}