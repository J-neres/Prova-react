import React from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Retangulo(){
    const navigate = useNavigate();
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resposta, setResposta] = useState([]);
    
    function voltar(){
        navigate('/')
    }

    function ret(b, h){
        let a = [];
        
        for(let i = 0; b > i; i++){
            a = [...a, '*'];
        }
        return a;
        
    }

    function respost(){
        const resp = ret(base, altura);
        setResposta(resp) 
    }
    return(
        <main>
            <section>
                <h1>Retangulo</h1>
                <div>
                    <label>Base:</label>
                    <input type='text' value={base} onChange={e => setBase(e.target.value)}/>

                    <label>altura:</label>
                    <input type='text' value={altura} onChange={e => setAltura(e.target.value)}/>

                    <button onClick={respost}>Calcular</button>
                </div>

                <div>
                    <span>{resposta}</span>
                </div>
            </section>
            <button onClick={voltar}>Voltar</button>
        </main>
    )
}