import React from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Temperatura(){

    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState(0);


    const navigate = useNavigate();
    function voltar(){

        navigate('/')
    }

    function calculo (ganho, gasto) {
        let porc = (gasto * 100) / ganho;
        if(porc > 100){
            return "Orçamento comprometido! Hora de rever seus gastos!";
        }
        else if (porc >= 81 && porc <=100){
            return "Cuidado, seu orçamento pode ficar comprometido!";
        }
        else if (porc >= 51 && porc <=80){
            return "Atenção, melhor conter os gastos!"
        }
        else if (porc >= 21 && porc <=50){
            return "Muito bem, seus gastos não ultrapassam metade dos ganhos!"
        }
        else if (porc >= 0 && porc <=20){
            return "Parabéns, está gerenciando bem seu orçamento!"
        }
    }
    function repost() {
        let resp = calculo(ganhos, gastos);
        setResposta(resp)
    }
    return(
        <main>
            <section>
                <div>
                    <h1>Orçamento familiar</h1>
                </div>
                <div>
                    <label>
                        Ganhos:
                        <input type='number' value={ganhos} onChange={e => setGanhos(e.target.value)} />
                    </label>

                    <label>
                        Gastos:
                        <input type='number' value={gastos} onChange={e => setGastos(e.target.value)}/>
                        <button onClick={repost} >Calcular</button>
                    </label>
                    <div> <span>{resposta}</span> </div>
                </div>
            </section>
            <button onClick={voltar}>Voltar</button>
        </main>
    )
}