import React from "react";
import { useNavigate } from "react-router-dom";
import './index.scss';

export default function Home(){

    const navigate = useNavigate();
    function acai(){
        navigate('/acai')
    }
    function libras(){
        navigate('/libras')
    }
    function gramas(){
        navigate('/gramas')
    }
    function salario(){
        navigate('/salarioLiquido')
    }
    function febre(){
        navigate('/temperatura')
    }
    function abastecimento(){
        navigate('/abastecimento')
    }
    function ganhos(){
        navigate('/ganhos')
    }
    function cinema(){
        navigate('/cinema')
    }
    function repeticao(){
        navigate('/repeticao')
    }
    function contar(){
        navigate('/contar')
    }
    function retangulo(){
        navigate('/retangulo')
    }
    function session(){
        navigate('/session')
    }

    return(
        <main>
            <section className='Bloco-fundo-Home'>
                <div className='bloco-titulos'>
                    <h1>Bem-Vindo a home</h1>
                    <h2>Selecione o exercício que deseja visitar</h2>
                </div>

                <div >          
                    <div className='botoes'>        
                        <button onClick={acai}>Açai</button>
                        <button onClick={libras}>Libras</button>
                        <button onClick={gramas}>Gramas</button>
                    </div>
                    <div className="botoes">
                        <button onClick={salario}>Salario</button>
                        <button onClick={febre}>Temperatura</button>
                        <button onClick={abastecimento}>Paradas</button>
                    </div>
                    <div className="botoes">
                        <button onClick={ganhos}>ganhos</button>
                        <button onClick={cinema}>cinema</button>
                        <button onClick={repeticao}>repetição</button>
                    </div>
                    <div className="botoes">
                        <button onClick={contar}>contar</button>
                        <button onClick={retangulo}>retangulo</button>
                        <button onClick={session}>session</button>
                    </div>
                </div> 

            </section>
        </main>
    )
}