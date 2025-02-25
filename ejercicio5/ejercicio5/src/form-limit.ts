import { LitElement,html,css, CSSResultGroup,PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { verifyEmail } from "./limit-utils";
import "./form-msg.ts"
import "./form-msg-pswd.ts"

@customElement("form-limit")
export class formLimit extends LitElement{

    static styles=css`div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 300px;
        
    }
    `

    @state()
    userName?:string
    @state()
    password?:string
    @state()
    isUserName?:boolean
    @state()
    isPassword?:boolean

    
    render (){
        return html`
        <div>
        <p>Correo Electronico</p>
        <p><input type="text" @input=${this._isValidEmail}><form-msg .isError=${this.isUserName}></form-msg></p>
        <p>Contraseña</p>
        <p><input type="text" @input=${this._isValidPswd}><form-msg-pswd .isError=${this.isPassword}></form-msg-pswd></p>
        <br>
        <button ?disabled=${!(this.isUserName && this.isPassword)} @click=${this._navigateToPage}>Log in</button>
        </div>
        `
    }

    _navigateToPage() {
        localStorage.setItem("usuario","contras");
        window.location.href = 'home.html';
      }
    
    _isValidEmail(e:Event){
        const email=(e.target as HTMLInputElement).value
        
        if(email){
            this.isUserName=verifyEmail(email);
            console.log("usuario",this.isUserName,this.isPassword)
        }
        else{
            this.isUserName=false
        }
    }
    _isValidPswd(e:Event){
        const pswd=(e.target as HTMLInputElement).value
        if(pswd){
            if(pswd.length>=1){
                this.isPassword=true
            }
        }
        else{
            this.isPassword=false
        }
        console.log(this.isPassword)
    }

    

}