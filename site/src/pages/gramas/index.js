import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Gramas() {
    const [grama, setGrama] = useState(0);
    const [resposta, setResposta] = useState('');

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
        <main>
            <section>
                <div>
                    <h1>Calculo de Gramas</h1>
                </div>
            </section>

            <section>
                <label>
                    Calculo Peso:
                    <input type='Number' value={grama} onChange={e => setGrama(e.target.value)} />
                </label>

                <button onClick={calculoFinal}>Calcular Peso</button>
                <span>{resposta}</span>
            </section>

            <div>
                <Link to='/'><button>Voltar</button></Link>
            </div>
        </main>
    )
}