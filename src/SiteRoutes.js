
import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Home from "./pages/home"
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'
import Dobro from './pages/dobro'
import Soma from './pages/soma'
import Tabuada from './pages/tabuada'


export default function SiteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/corPrimaria' element={<CorPrimaria/>} />
                <Route path='/frequencia' element={<Frequencia/>} />
                <Route path='/ingresso' element={<Ingresso/>} />
                <Route path='/maiorNumero' element={<MaiorNumero/>} />
                <Route path='/dobro' element={<Dobro/>} />
                <Route path='/soma' element={<Soma/>} />
                <Route path='/tabuada' element={<Tabuada/>} />
            </Routes>
        </BrowserRouter>
    )
}

