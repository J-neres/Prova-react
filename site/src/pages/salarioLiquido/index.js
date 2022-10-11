import './index.scss';
import { useState } from 'react';

export default function SalarioLiq (){
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resposta, setResposta] = useState(0);

    

    function calculos (s, b, d) {
        let valorTotal = s * b + d;
        // let bonusSalario = s  * b / 100//
        // let salarioBruto = s + bonusSalario;
        // let valorTotal = salarioBruto - d;//

        return valorTotal;
        
    }

    function respost () {
        let resp = calculos (salario, bonus, desconto);
        setResposta(resp);
    }

    return (
        <section>
            <div>
                <h1>Salário líquido</h1>

                    Informe seu salário:
                    <input type='Number' value={salario} onChange={e => setSalario(e.target.value)}/>

            </div>

            <div>        
                    Bônus:
                    <input type='Number' value={bonus} onChange={e => setBonus(e.target.value)}/>
            </div>

            <div>

                    Desconto:
                    <input type='Number' value={desconto} onChange={e => setDesconto(e.target.value)}/>

                <div> <button onClick={respost}> Calcular </button> </div>
                {resposta}
            </div>
        </section>
    )
}