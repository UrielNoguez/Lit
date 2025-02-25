import { imagen } from "./imagen";
import data from "./imagenes.json"
export const fetchImagen = async (
  numero: string,
  signal: AbortSignal
) => {
  const imagenes:imagen[]=data;
  await new Promise((r) => setTimeout(r, 1000));
  var response:imagen={
    numero_de_imagen:0,
    nombre: "",
    alt:"",
    descripcion:""
  };
  
  var status:number=400;
  for(var ima of imagenes){
    if(ima.numero_de_imagen==Number(numero)){
      response=ima;
      status=200;
      console.log(ima);
    }
  }
  console.log(numero,imagenes)
  if (status == 200) {
    console.log("aa",JSON.stringify(response))
    return response;
  }
  throw new Error("Imagen no encontrada");
};
