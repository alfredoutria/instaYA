import { Link, useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import axios from 'axios';
import imagenMenu from '../../static/img/menu.png';

const IniciarSesion = ()=> {

const navigate = useNavigate();

const [login, setLogin] = useState({usuario:'',password:''})
const [estilo, setEstilo] = useState();
const [Estado, setEstado] = useState();
const [mensaje,setMensaje] = useState({display:'none'});
const [mensajeE,setMensajeE] = useState({display:'none'});

const recolectandoDatos = (evento) =>{
 
  setLogin({
    ...login,[evento.target.name]:evento.target.value
  })
}
  
const enviarDatos = async (evento)=>{
  evento.preventDefault();
  
 if(login.usuario === '' || login.password === ''){

  setMensaje({display:'inline'});

 }else{

  axios.post("https://web-instaya.netlify.app/api/login", login)
  .then((data) => {
    if (data.data.status== "ok") {
      window.localStorage.setItem("token", data.data);
      navigate(`/listado/${login.usuario}`)
    }else{
      setMensajeE({display:'inline'});
    }  

    });
  }
}
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

  return (
    <div className="App">
   <header>
    <div className="menu"><img src={imagenMenu} width="65px;" onClick={Menu}/></div>
    
    <nav id="barra_menu">
      <div className="titulo">instaYA</div>
      <div className="div_ul" style={estilo}>
        <ul className='ul'>
            <li className='li'><Link className={'routerLink'} to={'/'}>INICIO</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/registrar_usuario'}>REGISTRESE</Link></li>
            <li className='li'><Link className={'routerLink'} to={'/nosotros'}>NOSOTROS</Link></li>
        </ul>
      </div>
     </nav>
 
</header>
      <div className='contenido'>
        <form className="row g-3" onSubmit={enviarDatos} >
         <label className="label_titulo">Iniciar Sesión</label>
         <div className="mensaje" style={mensaje} >Debe llenar todos los campos</div>
         <div className="mensaje" style={mensajeE} >Datos incorrectos</div>
       <div className="form-group">
          <input type="text" className="form-control" name='usuario'  placeholder="Usuario" value={login.usuario} onChange={recolectandoDatos}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name='password'  placeholder="Contraseña" value={login.password} onChange={recolectandoDatos} />
        </div><br/>
        <div className="form-group" id="botones">
          <input type="submit" className="btn btn-primary" id='iniciarSesion' value={'Iniciar Sesión'}/>
        </div><br/>
        <div className="form-group" id="div_registrarse">
          <label className="label_registrase"><Link className={'a_registrarse'} to={'/registrar_usuario'}>Registrarse</Link></label><br/>
          <label className="label_registrase"><Link className={'a_registrarse'} to={'/recuperar'}>¿Has olvidado la contraseña?</Link></label>
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

export default IniciarSesion
