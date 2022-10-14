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

    return(
        <main>
            <section className='Bloco-fundo-Home'>
                <div className='bloco-titulos'>
                    <h1>Bem-Vindo a home</h1>
                    <h2>Selecione o exercício que deseja visitar</h2>
                </div>

                <div className='botoes'>                  
                    <button onClick={acai}>Açai</button>
                    <button onClick={libras}>Libras</button>
                    <button onClick={gramas}>Gramas</button>
                </div>

                <div className="botoes-2">
                    <button onClick={salario}>Salario</button>
                    <button onClick={febre}>Temperatura</button>
                    <button onClick={abastecimento}>Paradas</button>
                </div> 

            </section>
        </main>
    )
}