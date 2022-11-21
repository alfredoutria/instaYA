import {BrowserRouter, Route, Routes,NavLink, Router  } from 'react-router-dom';
import Principal from './componentes/index';
import Registrar_usuario from './componentes/registrar_usuario';
import Registrar_orden from './componentes/registrar_orden';
import Listado from './componentes/listado';
import Actualizar from './componentes/actualizar';
import Cancelar from './componentes/cancelar';
import Nosotros from './componentes/nosotros';


const App = () =>{

   return(
     <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/registrar_orden' element={<Registrar_orden/>} />
            <Route exact path='/registrar_usuario' element={<Registrar_usuario/>} />
            <Route exact path='/listado' element={<Listado/>} />
            <Route exact path='/actualizar' element={<Actualizar/>} />
            <Route exact path='/cancelar' element={<Cancelar/>} />
            <Route exact path='/nosotros' element={<Nosotros/>}/>
        </Routes>
     </BrowserRouter>
     </div>
   );

}

export default App;