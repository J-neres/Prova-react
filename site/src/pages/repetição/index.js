import './index.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Intervalo(){
    const [entrada, setEntrada] = useState('');
    const [limite, setLimite] = useState('');
    const [resposta, setResposta] = useState([]);
    const navigate = useNavigate();
    function voltar(){
        navigate('/')
    }

    function repeticao(e, l){
        let a = [];
        for(let i = e; i <= l; i++) {
            a =[...a,i];
        }
        return a;
    }   

    function resp(){
        const respost = repeticao(entrada, limite);
        setResposta(respost);
    }

    return(
        <main>
            <section>
                <h1>Repetição</h1>

                <div>
                    <label>
                        Informe o início:
                        <input type='Number' value={entrada} onChange={e => setEntrada(e.target.value)} />
                    </label>

                    <label>
                        Informe o limite:
                        <input type='Number' value={limite} onChange={e => setLimite(e.target.value)}/>
                    </label>

                    <button onClick={resp}>Start</button>
                    <div>
                        <span>{resposta}</span>
                    </div>

                </div>

                <div>
                    <button onClick={voltar}>Voltar</button>
                </div>
            </section>

        </main>
    )
}