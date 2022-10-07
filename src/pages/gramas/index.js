import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Gramas(){
    const [grama, setGrama] = useState(0);
    const [resposta, setResposta] = useState('');

    function calcularGramas(gramas){
        let msg = "";
        if(gramas){

        }
    }
    return(
        <main>
            <section>
                <div>
                    <h1>Calculo de Gramas</h1>
                </div>
            </section>
            <section>
                <label>
                    Calculo Peso:
                    <input type='Number' />
                </label>

                <button>Calcular Peso</button>
                <span></span>
            </section>
            <div>
                <Link to='/'><button>Voltar</button></Link>
            </div>
        </main>
    )
}