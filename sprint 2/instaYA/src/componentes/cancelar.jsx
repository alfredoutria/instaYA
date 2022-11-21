import '../index.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const cancelar = () =>{


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
    <div class="menu"><img src="static/img/menu.png" width="65px;" onClick={Menu}/></div>
    
    <nav id="barra_menu">
      <div className="titulo">instaYA</div>
      <div className="div_ul" style={estilo}>
        <ul className='ul'>
        <li className='li'><Link className={'routerLink'} to={'/'}>INICIO</Link></li>
        <li className='li'><Link className={'routerLink'} to={'/registrar_usuario'}>REGISTRESE</Link></li>
        <li className='li'><Link className={'routerLink'} to={'/listado'}>LISTADO</Link></li>
        <li className='li'><Link className={'routerLink'} to={'/nosotros'}>NOSOTROS</Link></li>
        </ul>
      </div>
     </nav>
</header>
 
<div className="contenido_registrar_orden"> 

<form className="row g-3">
  <label className="label_titulo">Cancelación de Ordenes(Recogida)</label>
  <div className="col-md-5">
    <label className="form-label">Dia de recolección</label>
    <input type="date" className="form-control" id="inputDia" disabled/>
  </div>
  <div className="col-md-5">
    <label  className="form-label">Hora de recolección</label>
    <input type="time" className="form-control" id="inputHora" disabled/>
  </div>
  <div className="col-md-10">
  <label  className="form-label">Estado</label>
  <input type="text" className="form-control" id="inputEstado" disabled value={'Guardado'}/>
</div>
  <div className="row_medidas">
  <div className="col-3">
    <label for="inputAncho" className="form-label">Ancho(cm)</label>
    <input type="number" className="form-control" id="inputAncho" disabled/>
  </div>
  <div className="col-3">
    <label for="inputAlto" className="form-label">Alto(cm)</label>
    <input type="number" className="form-control" id="inputAlto" disabled/>
  </div>
  <div className="col-3">
    <label for="inputLargo" className="form-label">Largo(cm)</label>
    <input type="number" className="form-control" id="inputLargo" disabled/>
  </div>
  </div>
  <div className="col-md-10">
    <label for="inputPeso" className="form-label">Peso(kg)</label>
    <input type="number" className="form-control" id="inputPeso" disabled/>
  </div>
  <div className="col-md-10">
    <label for="inputDireccion" className="form-label">Dirección de Recogida</label>
    <input type="text" className="form-control" id="inputDireccion_d" disabled/>
  </div>
  <div className="col-md-10">
    <label for="inputDireccion" className="form-label">Ciudad de Recogida</label>
    <input type="text" className="form-control" id="inputDireccion_d" disabled/>
  </div>
  <div className="col-md-10">
    <label for="inputTelefono" className="form-label">Cedula/Nit Destinatario</label>
    <input type="text" className="form-control" id="inputTelefono_d" disabled />
  </div>
  <div className="col-md-10">
    <label for="inputCiudad" className="form-label">Dirección Entrega</label>
    <input type="text" className="form-control" id="inputCiudad_d" disabled/>
  </div>
  <div className="col-md-10">
    <label for="inputCiudad" className="form-label">Ciudad Entrega</label>
    <input type="text" className="form-control" id="inputCiudad_d" disabled/>
  </div><br/>
  <div className="col-md-10" id="botones">
    <button type="submit" className="btn btn-primary" >Cancelación de Orden</button>
  </div>
    

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

export default cancelar;