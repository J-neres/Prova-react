import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Abastecimento(){

    const [capacidade, setCapacidade] = useState('');
    const [consumo, setConsumo] = useState('');
    const [distancia, setDistancia] = useState('');
    const [resposta, setResposta] = useState('');
    const navigate = useNavigate();

    function voltar(){
        navigate('/')
    }

    function calcularParadas(capac, consumo, dist){

        let gasto = dist / (capac * consumo);
        let paradas = Math.ceil(gasto);
        return paradas;
    }

    function repost(){
        const resp = calcularParadas(capacidade, consumo, distancia);
        setResposta(resp);
    }

    return(
        <main>
            <section className='cont-abastecimento'>
                <div>
                    <h1>Paradas para Abastecimento</h1>
                </div>
                <div className='div-calculo'>
                    <label>
                        Capacidade:
                        <input type='number' value={capacidade} onChange={e => setCapacidade(e.target.value)}/>
                    </label>

                    <label>
                        Consumo:
                        <input type='number' value={consumo} onChange={e => setConsumo(e.target.value)}/>
                    </label>

                    <label>
                        Distância:
                        <input type='number' value={distancia} onChange={e => setDistancia(e.target.value)}/>
                    </label> 

                    <div className='div-resp'>
                        {resposta}
                    </div>

                    <div className='div-botao'>
                        <button onClick={repost}>Calcular paradas</button>
                    </div>
                </div>

                <div>
                    <button onClick={voltar}>Voltar Home</button>
                </div>
            </section>
            
        </main>
    )
}