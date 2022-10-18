import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Acai from './pages/acaiPreço';
import Libra from './pages/signoLibra';
import Gramas from './pages/gramas';
import SalarioLiquido from './pages/salarioLiquido'
import Temperatura from './pages/Febre';
import Abastecimento from './pages/Abastecimento';
import Ganhos from './pages/ganhos';
import Cinema from './pages/cinema';
import Intervalo from './pages/repetição';
import Contar from './pages/contar';
import Retangulo from './pages/retangulo';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/acai' element={<Acai/>}/>
                <Route path='/libras' element={<Libra/>} />
                <Route path='/gramas' element={<Gramas/>} />
                <Route path='/salarioLiquido' element={<SalarioLiquido />} />
                <Route path='/temperatura' element={<Temperatura />} />
                <Route path='/abastecimento' element={<Abastecimento />} />
                <Route path='/ganhos' element={<Ganhos />} />
                <Route path='/abastecimento' element={<Abastecimento />} />
                <Route path='/cinema' element={<Cinema />} />
                <Route path='/repeticao' element={<Intervalo />}/> 
                <Route path='/contar' element={<Contar />}/> 
                <Route path='/retangulo' element={<Retangulo />}/> 
            </Routes>
        </BrowserRouter>
    )
}