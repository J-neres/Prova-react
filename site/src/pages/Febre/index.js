import React from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Temperatura(){

    const [temp, setTemp] = useState('');
    const [resposta, setResposta] = useState('');
    const navigate = useNavigate();

    function voltar(){
        navigate('/')
    }
    
    function repost(){
        const resp = febre(temp);
        setResposta(resp);
    }

    function febre(temperatura){

        if(temperatura >= 41){
            return "A situação para sua temperatura é Hipertemia!"
        }
        else if(temperatura >= 39.6 && temperatura < 41 ){
            return "A situação para sua temperatura é Febre Alta!"
        }
        else if(temperatura >= 37.6 && temperatura < 39.6){
            return "Você está com Febre!"
        }
        else if(temperatura >= 36 && temperatura < 37.6){
            return "Você está com a temperatura corporal normal!"
        }
        else if(temperatura < 36){
            return "A situação para sua temperatura é de Hipotermia!"
        }
        else{
            return "Informe sua temperatura"
        }
    }


    return(
        <main>
            <section className="Container-febre">
                <h1>Verifique sua temperatura!</h1>
                <div className="input-temperatura">
                    <label>Informe sua temperatura:</label>
                    <input type='number' value={temp} onChange={e => setTemp(e.target.value)} />

                </div>
                <div className="resposta">
                    <div>
                        <button onClick={repost}>Verificar temperatura</button>
                    </div>

                    <span>{resposta}</span>
                </div>

                <div className="espacamento-botao">
                    <button onClick={voltar}>Voltar</button>
                </div>

            </section>
        </main>
    )
}