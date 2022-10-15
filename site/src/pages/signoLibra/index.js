import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss';

export default function Libra(){
    const [mes, setMes] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [resposta, setResposta] = useState('');
    const navigate = useNavigate();
    function voltar(){
        navigate('/')
    }

    function resp(){
        const respost = verificarSigno(mes, nascimento);
        setResposta(respost);
    }

    function verificarSigno(mes, nascimento){
        
        if( mes === 'Setembro' || mes === 'setembro' && nascimento >=23 && nascimento <=30 || mes === 'Outubro' || mes === 'outubro' && nascimento >=1 && nascimento <=22 ){
            return"Seu signo é Libra!" 
        }
        else{
            return "Você não é do signo de libra!"
        }
    }

    return(
        <main>
            <section className="fundo-cabecalho">
                <div className="div-titulo">
                    <h1>Saiba se voce pertence ao signo de Libra</h1>
                </div>
            </section>

            <section className="fundo-page">
                <div className="texto-apresentação">
                    <h1>Descubra seu ascendente</h1>
                    <p>Seu ascendente é o signo que estava surgindo no horizonte no exato momento que você nasceu. Ele revela como você se mostra ao mundo. Quer descobrir o seu? Para calcular seu signo ascendente, basta inserir o dia e seu mês de nascimento nos campos do formulário.</p>
                </div>
                <div className="div-calculo">
                    <h1>Descubra seu ascendente</h1>

                    <label>Dia de nascimento</label>
                    <input type='number' value={nascimento} onChange={e => setNascimento(e.target.value)}/>

                    <label>Mês</label>
                    <input type='text' value={mes} onChange={e => setMes(e.target.value)}/>

                    <div className="div-botao">
                        <button onClick={resp}>Verificar Signo</button>
                    </div>

                    <span>{resposta}</span>
                </div>
            </section>

            <section className="bloco-final">
                <div className="imagem-Libra">                   
                    <h1>Sobre libra</h1>
                    <p>23/09 a 22/10</p>
                </div>

                <div className="informações">
                    <h1>Sobre Libra</h1>
                    <p>Quem nasce com o sol no signo Libra, em geral, se identifica com características como a cortesia, a delicadeza e a busca constante pelo equilíbrio. Librianas e librianos típicos adoram viver relacionamentos e tendem a ter um pouco de dificuldade para tomar decisões.</p>
                </div>
                
                <div className="botao-final">
                    <button onClick={voltar}>Voltar</button>
                </div>
            </section>

        </main>
    )
}