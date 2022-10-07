import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Libra(){
    const [mes, setMes] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [resposta, setResposta] = useState('');

    function resp(){
        const respost = verificarSigno(mes, nascimento);
        setResposta(respost);
    }

    function verificarSigno(mes, nascimento){
        let msg = "";
        if(mes == 'Setembro' && nascimento >=23 && nascimento <=30 || mes == 'Outubro' && nascimento >=1 && nascimento <=22){
            msg="Seu signo é de Libra!" 
        }
        else{
            msg = "Você não é do signo de libra"
        }
        
        return msg;
    }
    return(
        <main>
            <section>
                <div>
                    <h1>Verifique se você é do signo de libra</h1>
                </div>
            </section>

            <section>
                <div>
                    <label>
                        Mês:
                        <input type='text' value={mes} onChange={e => setMes(e.target.value)}/>
                    </label>

                    <label>
                        Dia de nascimento:
                        <input type='number' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                    </label>
                    
                    <button onClick={resp}>Verificar Signo</button>

                    <span>{resposta}</span>
                </div>
            </section>

            <div>
                <Link to='/'><button>Voltar</button></Link>
            </div>
        </main>
    )
}