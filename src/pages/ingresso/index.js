import axios from "axios";
import {useState} from "react";

export default function Index(){
    const [qtdInteiras,setQtdInteiras]=useState(0);
    const [qtdMeias,setQtdMeias]=useState(0);
    const [dia,setDia]=useState('');
    const [nascionalidade,setNascionalidade]=useState('');
    const [resposta,setResposta]=useState(0);

    async function calcular(){
        const resp= axios.post('',{
            QtdInteiras: qtdInteiras,
            QtdMeias:qtdMeias,
            DiaDaSemana:dia,
            Nascionalidade:nascionalidade
        })

        setResposta(resp.data.total);
    }


    return(
        <main>
            <h1> Ingresso  </h1>

            <div>
                QTD.Inteiras: <input type="text" value={qtdInteiras} onChange={ e=>setQtdInteiras(Number(e.target.qdtInteiras))}/>
            </div>
            <div>
                QTD.Meias: <input type="text" value={qtdMeias} onChange={e=> setQtdMeias(Number(e.target.qdtMeias))} />
            </div>
            <div>
                Dia da semana: <input type="text" value={dia} onChange={e=> setDia(e.target.dia)}  />
            </div>
            <div>
                Nascionalidade: <input type="text" value={nascionalidade} onChange={e=> setNascionalidade(Number(e.target.nascionalidade))} />
            </div>
            <div>
                <button onClick={calcular}> calcular </button>
            </div>
            <div>
                Total: {resposta}
            </div>
        </main>
    )
} 