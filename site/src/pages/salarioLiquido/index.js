import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SalarioLiq (){
    const navigate = useNavigate(0);
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState();
    const [resposta, setResposta] = useState(0);

    function voltar(){
        navigate('/')
    }

    function salar (s, b, d) {
        let bonus = s * b / 100;
        let bruto = bonus + s; 
        let total =  bruto - d; 

        return total;
    }

    function respost(){
        const resp = salar(salario, bonus, desconto);
        setResposta(resp);
    }

    return (
        <section className='cont-salario'>
            <div className='div-titulo'>
                <h1>Salário líquido</h1>
            </div>
            
            <div className='div-calculo'>
                <div className=' '>
                        Informe seu salário:
                        <input type='Number' value={salario} onChange={e => setSalario(Number(e.target.value))}/>

                </div>

                <div>        
                        Bônus:
                        <input type='Number' value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
                </div>

                <div>

                        Desconto:
                        <input type='Number' value={desconto} onChange={e => setDesconto(Number(e.target.value))}/>

                    <div className='div-botao'> 
                        {resposta}
                        <button onClick={respost}> Calcular </button> 
                    </div>
                    <div>
                    <button  onClick={voltar}>Voltar</button>
                </div>
                </div>

                
            </div>
        </section>
    )
}