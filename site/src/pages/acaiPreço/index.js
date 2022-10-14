
import React from 'react';
import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Acai(){
    const [pequeno, setPequeno] = useState('');
    const [medio, setMedio] = useState('');
    const [grande, setGrande] = useState('');
    const [desconto, setDesconto] = useState('');
    const [resposta, setResposta] = useState('');
    
    const navigate = useNavigate();
    function voltar(){
        navigate('/')
    }

    function respost(){
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
        <main className='bloco-fundo-acai'>
            <section className='bloco-titulo-acai'>
                <h1>Dinheiro</h1>
                <h2>não traz</h2>
                <h3>felicidade</h3>
                <h4>Mas compra</h4>
                <h5>açai</h5>
                <h6>(Que é quase a mesma coisa)</h6>
            </section>

            <section className='bloco-final'>
                <div className='titulo-bloco-final'>
                    <h1>Calcule a quantidade de açai</h1>
                </div>

                <div className='inputs'>
                    <input type='number' placeholder='Pote Pequeno' value={pequeno} onChange={e => setPequeno(e.target.value)}/>
                    <input type='number' placeholder='Pote Médio' value={medio} onChange={e => setMedio(e.target.value)}/>
                    <input type='number' placeholder='Pote Grande' value={grande} onChange={e => setGrande(e.target.value)}/>
                    <input type='number' placeholder='Pote Desconto' value={desconto} onChange={e => setDesconto(e.target.value)}/>

                </div>
                <div className='Final'>
                    <label>
                        Resultado: R$ <span>{resposta}</span> reais.
                    </label>

                    <div className='botoes'>
                        <button onClick={respost}>Preço a pagar</button>
                        <button onClick={voltar}>Voltar</button>

                    </div>
                </div>
            </section>
        </main>
    )
}
