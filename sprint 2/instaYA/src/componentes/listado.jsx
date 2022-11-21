import '../index.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const listado = () =>{

  const [estilo, setEstilo] = useState();
  const [Estado, setEstado] = useState();

  const Menu = ()=>{
  
    const cambiarEstilos = {transform: 'translate(100%)', transition:'ease-in .7s'}
    setEstilo(cambiarEstilos);
    setEstado('true');

    if(Estado == 'true'){
    const cambiarEstilos = {transform: 'translate(-100%)', transition:'ease-in .7s'}
    setEstilo(cambiarEstilos);
       setEstado('false');
    }
  }

  return(
    <div>
 <header>
    <div className="menu"><img src="static/img/menu.png" width="65px;" onClick={Menu}/></div>
    
    <nav id="barra_menu">
      <div className="titulo">instaYA</div>
      <div className="div_ul"  style={estilo}>
        <ul className='ul'>
        <li className='li'><Link className={'routerLink'} to={'/'}>INICIO</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/registrar_usuario'}>REGISTRESE</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/listado'}>LISTADO</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/nosotros'}>NOSOTROS</Link></li>
        </ul>
      </div>
     </nav>
</header>
 
<div className="contenido"> 
<label className="label_titulo">Listado de Ordenes</label><br/>
      <button type="button" className="btn btn-warning"><Link className={'a_registrarse'} to={'/registrar_orden'}>Crear Orden</Link></button>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#Servicio</th>
          <th scope="col">Fecha</th>
          <th scope="col">ciudad Entrega</th>
          <th scope="col" >Dirección Entrega</th>
          <th scope="col">Estado</th>
          <th scope="col">Actualizar</th>
          <th scope="col">Cancelar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>20-11-2022</td>
          <td>Cartagena</td>
          <td>Calle 15 lote 2</td>
          <td>Guardado</td>
          <td><button type="button" className="btn btn-primary"><Link className={'a_actualizar'} to={'/actualizar'}>Actualizar</Link></button></td>
          <td><button type="button" className="btn btn-primary"><Link className={'a_actualizar'} to={'/cancelar'}>Cancelar</Link></button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>20-11-2022</td>
          <td>Cartagena</td>
          <td>Calle 15 lote 2</td>
          <td>Guardado</td>
          <td><button type="button" className="btn btn-primary"><Link className={'a_actualizar'} to={'/actualizar'}>Actualizar</Link></button></td>
          <td><button type="button" className="btn btn-primary"><Link className={'a_actualizar'} to={'/cancelar'}>Cancelar</Link></button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>20-11-2022</td>
          <td>Cartagena</td>
          <td>Calle 15 lote 2</td>
          <td>Guardado</td>
          <td><button type="button" className="btn btn-primary"><Link className={'a_actualizar'} to={'/actualizar'}>Actualizar</Link></button></td>
          <td><button type="button" className="btn btn-primary"><Link className={'a_actualizar'} to={'/cancelar'}>Cancelar</Link></button></td>
        </tr>
      </tbody>
    </table>

     
    </div>



<footer>
      <p className="contenido_piePagina">Contenido del sitio 2022© <br/>
        Derechos Reservados instaYA® <br/>
        Desarrollado por Min Tic Grupo 4 Ciclo 4<br/>
        Para pqr puedes contactarnos al correo <br/>
        solicitarpqr@instaya.com.co
      </p> 
    </footer>
    </div>
  )
}

export default listado;