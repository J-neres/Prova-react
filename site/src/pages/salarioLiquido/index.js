import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SalarioLiq (){
    const navigate = useNavigate();
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resposta, setResposta] = useState(0);

    function voltar(){
        navigate('/')
    }

    function salar (s, b, d) {
        let desconto = s * b / 100;
        let salbr = s - desconto  ;

        return salbr;
    }

    function respost(){
        const resp = salar(salario, bonus, desconto);
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

                <div> 
                    <button onClick={respost}> Calcular </button> 
                
                    {resposta}
                </div>
            </div>

            <div>
                <button onClick={voltar}>Voltar</button>
            </div>
        </section>
    )
}