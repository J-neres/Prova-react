import React from "react";

import { Link } from "react-router-dom";

export default function Home(){
    return(
        <main>
            <section>
                <div>
                    <h1>Bem-Vindo a home</h1>
                    <h2>Selecione a prova que deseja visitar</h2>
                </div>

                <div>
                    <Link to='/acai'><button>Açai</button></Link>
                </div>
            </section>
        </main>
    )
}