import React from 'react';
import { useState } from 'react';

export default function Acai(){
    const [pequeno, setPequeno] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resposta, setResposta] = useState('');
    
    function respost    (){
        const resp = calculo(pequeno, medio, grande, desconto);
        setResposta(resp);
    }

    function calculo(qtdp, qtdm, qtdg, desconto){
        let x = qtdp * 13.50;
        let y = qtdm * 15.00;
        let z = qtdg * 17.50;

        let calculo = x + y + z;
        let desc = desconto * calculo / 100;
        let total = calculo - desc;
        return total;

    }
    
    
    return(
        <main>
            <section>
                <h1>Info B Açai</h1>
            </section>

            <section>
                <div>
                    <h1>Calcule o valor a pagar na sua compra de açai</h1>
                </div>

                <div>
                    <label>
                        Pote Pequeno:
                        <input type='text' value={pequeno} onChange={e => setPequeno(e.target.value)}/>
                    </label>

                    <label>
                        Pote Médio:
                        <input type='text' value={medio} onChange={e => setMedio(e.target.value)}/>
                    </label>

                    <label>
                        Pote Grande:
                        <input type='text' value={grande} onChange={e => setGrande(e.target.value)}/>
                    </label>

                    <label>
                        Desconto:
                        <input type='text' value={desconto} onChange={e => setDesconto(e.target.value)}/>
                    </label>

                    <button onClick={respost}>Preço a pagar</button>
                    
                    <span>{resposta}</span>
                </div>
            </section>
        </main>
    )
}