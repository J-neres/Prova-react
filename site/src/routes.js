import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Acai from './pages/acaiPreço';
import Libra from './pages/signoLibra';
import Gramas from './pages/gramas';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/acai' element={<Acai/>}/>
                <Route path='/libras' element={<Libra/>} />
                <Route path='/gramas' element={<Gramas/>} />
            </Routes>
        </BrowserRouter>
    )
}