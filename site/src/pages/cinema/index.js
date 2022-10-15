import React from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Temperatura(){

    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [dia, setDia] = useState(false);
    const [nacional, setNacional] = useState(false);
    const [resposta, setResposta] = useState(0);

    const navigate = useNavigate();

    function voltar(){
        navigate('/')
    }

    function calculo() {
        let valor = 0;
        
        if  (nacional === true) {
            valor = (inteiras * 5) + (meias * 5);
        }   
        else if (dia === true) {
            valor = (inteiras * 14.25) + (meias * 14.25);
        }
        else {
            valor = (inteiras * 28.50) + (meias * 14.25);
        }

        setResposta(valor)
    }

    return(
        <main>
            <section className="cont-cinema">
                <div className="div-titulo">
                    <h1>Cinema</h1>
                </div>
                <div className="div-calculo">
                    <h3>Ingressos</h3>
                    <label>
                        Inteiras: 
                        <input type='number' value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
                    </label>

                    <label>
                        Meias: 
                        <input type='number' value={meias} onChange={e => setMeias(Number(e.target.value))} />
                    </label>

                    <div>
                        <label>
                            Quarta-Feira: 
                            <input type='checkbox' value={dia} onChange={e => setDia(e.target.checked)} />
                        </label>
                        &nbsp; &nbsp;
                        <label>
                            Filme nacional: 
                            <input type='checkbox' value={nacional} onChange={e => setNacional(e.target.checked)} />
                        </label>
                        <div> <span>{resposta}</span> </div>
                    </div>
                    <div className="div-botao">
                        <button className="botao" onClick={calculo}>Calcular</button>
                    </div>
                </div>
                <button onClick={voltar}>Voltar</button>
            </section>
        </main>
    )
}