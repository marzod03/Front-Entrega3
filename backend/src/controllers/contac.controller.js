
const getAllContact = async(req, res) => {

	try {
		// código para acceder a la BD
		res.status(200).send({ 
			status: "ok", 
			message: "creado correctamente message",
			data:[
				{"id":1, "nombre": "Jose", "numero": 6271822},
				{"id":2,"nombre": "JOSE", "numero": 9992278922} 
			]  
		})

	} catch (error) {
		res.status(500).send({ 
			status: "hay un problema", 
			message: error
		})
	}

}

const createContact = async(req, res) => {

	try {
		// Codigo para acceder a la bd
		const { nombre, numero } = req.body
		console.log(nombre, numero)
	
		res.status(201).send({
			status: "correcto",
			message: "Creado correctamente"
		})
	} catch (error) {
		res.status(503).send({ 
			status: "hay un problema", 
			message: error
		})
	}

}

const getContact = async(req, res) => {

	try {
		const { id } = req.params

		console.log(id)

		res.status(200).send({
			status: "ok todo correcto",
			message: "obtenido correctamente",
			data: {
				"nombre": "JOSE",
				"numero": 9992278922
			}
		})
	} catch (error) {
		res.status(500).send({ 
			status: "hay un problema", 
			message: error
		})
	}
}

const searchContact = async(req, res) => {

	try {
		// Codigo para acceder a la BD
		console.log(JSON.stringify(req.query))
		res.status(200).send({
			status: "obtenido correctamente",
			message: "si se encontró algo",
			data: [
				{"id":1, "nombre": "Jose", "numero": 6271822},
				{"id":2,"nombre": "JOSE", "numero": 9992278922} 
			]
		})
	} catch (error) {
		res.status(500).send({ 
			status: "hay un problema", 
			message: error
		})
	}

}


module.exports = {
	getAllContact,
    getContact,
	createContact,
	searchContact
}