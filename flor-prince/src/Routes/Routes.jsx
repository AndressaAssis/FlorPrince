import { Routes, Route} from 'react-router-dom'
import React from 'react';

import { ContatoPage } from '../Pages/Contato/ContatoPage';
import { InicialPage } from '../Pages/Inicial/InicialPage';
import { Fundacao } from '../Pages/Fundacao/Fundacao';
import { ComoAjudar } from '../Pages/ComoAjudar/ComoAjudar';
import { Adocao } from '../Pages/Adocao/Adocao';
import { Denuncie } from '../Pages/Denuncie/Denuncie';
import { Blog } from '../Pages/Blog/Blog';
import { Clinica } from '../Pages/Clinica/Clinica';
import { TrabalheConosco } from '../Pages/TrabalheConosco';

export function Rotas() {

    return(
        <Routes>
            <Route path="/contato" element={<ContatoPage/>} />
            <Route path="/home" element={<InicialPage />} />
            <Route path="/fundacao" element={<Fundacao />} />
            <Route path="/como-ajudar" element={<ComoAjudar />} />
            <Route path="/adocao" element={<Adocao />} />
            <Route path="/denuncie" element={<Denuncie />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/clinica" element={<Clinica />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        </Routes>
    );
}
