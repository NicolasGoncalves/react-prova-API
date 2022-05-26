import axios from "axios";
import {useState} from "react";

export default function Index(){
    const [texto,useTexto]=useState('');
    const [caractere,useCaractere]=useState('');
    const [resposta,useResposta]=useState(0);

    async function calcularFrequencia(){
        const resp=await axios.get(` ${texto} ${caractere}`);
        useResposta(resp.data.freq);
    }

    return(
        <main>
            <h1> Frequencia </h1>

            <div>
                Texto: <input type="text" value={texto} onChange={e=> useTexto(e.target.value)} />
            </div>
            <div>
                Caractere <input type="text" value={caractere} onChange={e=> useCaractere(e.target.value)}/>
            </div>
            <div>
                <button onClick={calcularFrequencia}> Calcular frequencia</button>
            </div>
            <div>
                Frequencia: {resposta}
            </div>
        </main>
    )
} 