import '../index.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const registrar = () =>{
 
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
      <div className="div_ul" style={estilo} >
        <ul className='ul'>
            <li className='li'><Link className={'routerLink'} to={'/'}>INICIO</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/registrar_usuario'}>REGISTRESE</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/nosotros'}>NOSOTROS</Link></li>
        </ul>
      </div>
     </nav>
</header>
 
<div className="contenido"> 

<form className="row g-3">
   <label className="label_titulo">Registrar Usuario</label>
    <div className="form-group">
      <input type="text" className="form-control" id="inputNombres" required placeholder="Nombres"/>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="inputUsuario" required placeholder="Usuario"/>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="inputPassword" required placeholder="Contraseña"/>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="inputcorreo" placeholder="Correo"/>
    </div><br/>
    <div className="form-group" id="botones">
      <button type="button" className="btn btn-primary" id="boton_iniciar_sesion"><Link className={'a_actualizar'} to={'/listado'}>Registrar</Link></button>
    </div><br/>
    

  </form>

 
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

export default registrar;