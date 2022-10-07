import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Acai from './pages/provaI';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path="/acai" element={<Acai/>}/>
            </Routes>
        </BrowserRouter>
    )
}