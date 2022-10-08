import './index.scss'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Gramas() {
    const [grama, setGrama] = useState(0);
    const [resposta, setResposta] = useState('');

    const navigate = useNavigate();
    function voltar(){
        navigate('/')
    }

    function calculoPeso(gramas){
        let valor = 3.50;
        if(gramas <=0){
            return "Peso inválido"
        }
        if (gramas >= 1000) {
            valor = 3    
        }
        return "O total a pagar é R$ " + valor * (gramas / 100) ;
    }

    function calculoFinal(){
        const resp = calculoPeso(grama);
        setResposta(resp);
    }


    return (
        <main className="cont-gramas">
            <section>
                <div className="div-titulo">
                    <h1>Calculo de Gramas</h1>
                </div>
            </section>

            <section className='div-calculo'>
                <label>
                    Calcular Peso:
                    <input type='Number' value={grama} onChange={e => setGrama(e.target.value)} />
                </label>
                <div className='div-botaoc'>
                <button className='botao-calc' onClick={calculoFinal}>Calcular</button>
                </div>
                <span>{resposta}</span>
            </section>

            <div>
                <button className='botao' onClick={voltar}>Voltar</button>
            </div>
        </main>
    )
}