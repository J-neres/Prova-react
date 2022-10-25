import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Session(){
    const [qtdAlunos, setQtdAlunos] = useState();
    const [resposta , setResposta] = useState([]);
    const [repost, setRepost] = useState();
    const [max, setMax] = useState();
    const [min, setMin] = useState();

    const navigate = useNavigate();
    function voltar(){
        navigate('/')
    }

    function adicionar(){
        let alunos = [];
        for(let i = 0; i < qtdAlunos; i++){
            alunos = [...alunos, i]
        }
        setResposta(alunos);
    }

    function media(arr){
        let media = 0;
        for( let i; i < arr.lengh; i++) media = media + i;{

        }
        return media / arr.lengh; 
    }


    function respost () {
        const resp = media(arr); 
        setRepost(resp);
    }

    return(
        <main>
            <section>
                <h1>Exercicio React</h1>

                <div>
                    <label>Qtd alunos:</label>
                    <input type='number' value={qtdAlunos} onChange={e => setQtdAlunos(e.target.value)}/>
                    <button onClick={adicionar}>OK</button>
                </div>

                {resposta.map((item, i) =>
                    <div>
                        <label>aluno:{i + 1}</label>
                        <input type='number' onChange={e => (e.target.value)}/>
                    </div>
                )}

                <button onClick={respost}>Calcular</button>
                <span>{repost}</span>

                <div>
                    <label>Media:</label>
                </div>

                <div>
                    <label>Maior Nota:</label>
                </div>

                <div>
                    <label>Menor Nota:</label>
                </div>

            </section>
            <button onClick={voltar}>voltar</button>
        </main>
    )
}