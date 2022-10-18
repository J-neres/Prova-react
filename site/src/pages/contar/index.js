import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.js';

export default function Contar() {
    const [limite, setLimite] = useState();
    const [resposta, setResposta] = useState([]);
    const navigate = useNavigate();
    function voltar(){
        navigate('/')
    }

    function repeticao(l) {
        let a = [];
        for(let i = 0; i <= l; i++) {
            a = [...a, '*'];
        }
        return a;
    }

    function respost () {
        const resp = repeticao(limite);
        console.log("Salve repaziada"); 
        setResposta(resp);
    }

    return (
        <main>
            <section>
                <div>
                    <h1>Contar</h1>

                    
                    <label>
                        <input type='number' value={limite} onChange={e => setLimite(e.target.value)} />
                    </label>
                    <span> {resposta} </span>
                    <button onClick={respost}>Start</button>
                    
                </div>
                <button onClick={voltar}>Voltar</button>
            </section>
        </main>
    )
}