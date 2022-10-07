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
                    <Link to='/libras'><button>Libras</button></Link>
                    <Link to='/gramas'><button>Gramas</button></Link>
                </div>
            </section>
        </main>
    )
}