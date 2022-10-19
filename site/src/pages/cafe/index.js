import React from "react"
import { useState } from "react"

export default function Cafe(){
    const [estudantes, setEstudantes] = useState(0);
    const [litros, setLitros] = useState(0);
    const [mili, setMili] = useState(0);
    const [resp, setResp] = useState(0);

    function calculo(e, l, m){
        let qntBebida = (e * m) / 1000;

       while (qntBebida > l) {
        l = l+l;
       }
       return l;
    }

    function respost () {
        let r = calculo(estudantes, litros, mili);
        setResp(r);
    }

    return(
        <main>
            <section>
                <h1>Cafe</h1>
            </section>

            <section>
                <div>
                    <label>N estudantes</label>
                    <input type='number' value={estudantes} onChange={e =>setEstudantes(Number(e.target.value))}/>

                    <label>L litros de café</label>
                    <input type='number' value={litros} onChange={e => setLitros(Number(e.target.value))}/>

                    <label>D mililitros</label>
                    <input type='number' value={mili} onChange={e => setMili(Number(e.target.value))}/>

                    <button onClick={respost} >Calcular</button>
                </div>
                <div>
                    <span>{resp}</span>
                </div>
            </section>
        </main>
    )
}