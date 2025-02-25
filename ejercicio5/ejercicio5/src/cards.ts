import { initialState, Task } from "@lit/task";
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { fetchImagen } from "./npm";
import { map } from "lit/directives/map.js";


@customElement('cards-element')
export class CardsElements extends LitElement {
  static styles = css`
  :host {
    display: block;
    min-width: 300px;
    border-radius: 5px;
    border: solid 1px #aaa;
    padding: 20px;
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  #logo {
    height: 38px;
    width: auto;
  }
  .initial {
    font-style: italic;
  }
  .error {
    color: red;
  }
  .carta{
    display:flex;
    flex-direction:column;
    align-items:center;
    border-style:inset;
  }
`;

@state()
private _noImagen = "1";

private _npmInfoTask = new Task(this, {
  task: async ([noImagen], { signal }) => {
    if (noImagen === undefined || noImagen === "") {
      return initialState;
    }
    return await fetchImagen(noImagen, signal);
  },
  args: () => [this._noImagen],
});

render() {
  return html`
    <label>
      Coloca un index de imagen:
      <input .value=${this._noImagen} @change=${this._onChange} />
    </label>
    
    ${this._npmInfoTask.render({
      initial: () => html`<span> Ingresa un index de una imagen </span>`,
      pending: () => html`<span>Cargando informacion</span>`,
      complete: (pkg:any) => html`
      <div class="carta">
        <h3>Imagen</h3><br>
        <img src="./src/${pkg.nombre}" alt="${pkg.alt}" width="150" height="150" ><br>
        <p>"${pkg.descripcion}"</p><br>
        </div>
      `
      ,
      error: (e) => html`<span class="error">
        Error: ${(e as Error).message}
      </span>`,
    })
    }
  `;
}

_onChange(e: Event) {
  this._noImagen = (e.target as HTMLInputElement).value;
}

}

