const {Router, response} = require('express')
const router = Router()
const Usuario = require('../modelo/esquemaUsuario')
const Ordenes = require('../modelo/esquemaOrdenes')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


router.post('/registrarusuario', async (req, res)=>{
	const { nombres, usuario, password, correo } = req.body;

	const encryptedPassword = await bcrypt.hash(password, 10);
	try {
	  const buscarUsuario = await Usuario.findOne({ usuario });
  
	  if (buscarUsuario) {
		return res.json({ error: "Usuario Existe" });
	  }
	  await  Usuario.create({
		nombres,
		usuario,
		password: encryptedPassword,
		correo
	  });
	  res.send({ status: "ok" });
	} catch (error) {
	  res.send({ status: "error" });
	}
		});


	  router.post("/login", async (req, res) => {
		const {usuario, password } = req.body;
	  
		const user = await Usuario.findOne({ usuario });
		if (!user) {
		  return res.json({ error: "Usuario no encontrado " });
		}
		if (await bcrypt.compare(password, user.password)) {
		  const token = jwt.sign({ usuario: user.usuario }, JWT_SECRET);
	  
		  if (res.status(201)) {
			return res.json({ status: "ok", data: token });
		  } else {
			return res.json({ error: "error" });
		  }
		}
		res.json({ status: "error", error: "InvAlid Password" });
	  });

	  


  router.post('/registrarorden', (req, res)=>{
  const registrarOrden = new Ordenes(req.body);
	  registrarOrden
		  .save()
		  .then((registrarOrden) => {
			  res.send(registrarOrden);
		  })
		  .catch(function (err) {
			  res.status(422).send("Error al crear la recogida");
		  });
		})


	  router.get('/lista/:usuario', (req, res) => {
		const {usuario} = req.params;
		Ordenes.find({usuario},function (err, Ordenes) {
		res.json(Ordenes)});
	});
 
	router.get('/obtenerdatos/:id', (req,res)=>{
		const {id} = req.params;
	    Ordenes.findById(id,function (err, Ordenes) {
		res.json(Ordenes)});
	})

	router.put('/actualizar/:id/:usuario',(req,res)=>{
		const {id} = req.params;
		
		Ordenes.findByIdAndUpdate(id, req.body)
		.then(function () {
			res.json(Ordenes);
		})
		.catch(function (err) {
			res.status(422).send("Error al actualizar");
		});
	})

	router.put('/cancelar/:id/:usuario',(req,res)=>{
		const {id} = req.params;
		Ordenes.findByIdAndUpdate(id, req.body)
		.then(function () {
			res.json(Ordenes);
		})
		.catch(function (err) {
			res.status(422).send("Error al actualizar");
		});
	})


	router.post("/recuperar", async (req, res) => {
		const {usuario, correo } = req.body;

		const datos = await Usuario.findOne({ correo });

		if (!datos) {
			return res.json({ error: "User Not found" });
		  }

	    if(datos.usuario == usuario){
			if (res.status(201)) {
				return res.json({ status: "ok", datos});
			  } else {
				return res.json({ error: "error" });
			  }
		}
		res.json({ status: "error", error: "InvAlid Password" });

		
	  });


	router.get('/listado/:id/', (req, res) => {
		const {id} = req.params;
	    Usuario.findById(id,function (err, Usuario) {
		res.json(Usuario)});
	});

	router.put('/actualizarclave/:id/', async(req,res)=>{
		
		const {id} = req.params;
		const {password} = req.body;
		const encriptar = await bcrypt.hash(password, 10);
		Usuario.findByIdAndUpdate(id, {password:encriptar})
		.then(function () {
			res.json(Usuario);
		})
		.catch(function (err) {
			res.status(422).send("Error al actualizar");
		});
	})

module.exports = router