import axios from "axios";
import {useState} from "react";

export default function index(){
    const[numeros,useNumeros]=useState([]);
    const[numero,useNumero]=useState(0);
    const[resposta,useResposta]=useState('');
    
    function adicionar() {
        useNumeros([...numeros,numero]);
        useNumero(0);
    }

    async function verificarMaior(){
        const resp=await axion.post('',numeros);
        setResposta(resp.data.maior);
    }

    return(
        <main>
            <h1> Maior Numero </h1>

            <div>
                Numero: <input type="text" />
                <button> Adicionar Numero</button>
            </div>
            <div>
                {numeros.map(item=>
                    <div> {item} </div>
                    )}
            </div>
            <div>
                <button onClick={verificarMaior}> </button>
                O maior Numero é :
            </div>
        </main>
    )
} 