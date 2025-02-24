import { LitElement, PropertyValues, css, html } from 'lit'
import { customElement, property, query} from 'lit/decorators.js'
import { isSameDate } from './date-utils';

@customElement('date-display')
export class DateDisplay extends LitElement {

    @property({
        hasChanged:(value?:Date,oldvalue?:Date)=>{
            
            return isSameDate(value,oldvalue);
        }   })
    date?:Date;
    
    @query("#datefield")
    datefield!:HTMLSpanElement;

    frames = [
        { backgroundColor: "#fff" },
        { backgroundColor: "#324fff" },
        { backgroundColor: "#fff" },
      ];

    render() {
        return html`
       
        
        <span id="datefield" >${this.date?.toLocaleDateString()}</span>
       
        `;
    }

    updated(changedes:PropertyValues<this>){
        if(changedes.has('date')){
            console.log(this.date)
        }

    }

}