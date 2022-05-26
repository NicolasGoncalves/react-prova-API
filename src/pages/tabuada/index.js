import axios from "axios";
import {useState} from "react";

export default function Index(){
    const[numero,useNumero]=useState();
    const[resposta,useResposta]=useState();
    async function tabuada() {
        const resp=await axios.get('http://localhost:5000/tabuada' + numero)
        useResposta(resp.data.tabuada);
    }

    <main>
        <h1> tabuada</h1>
        <div> 
            Numero: <input type="text" value={numero} onChange={e=>useNumero(e.target.value)} />
        </div>
        <div>
            <button onClick={tabuada}> Calcular</button>
        </div>
        <div>
            {numero.map
            (item=><div>{item}</div>)
            }

        </div>
    </main>
}