const {Guides} = require('../database/db');
const config = require('../middleware/multerConfig')
const path = require('path')
const fs = require('fs');

//POST
const crearGuia = async(req, res) => {
    try {
		
		const { cost, date_created, couriers } = req.body;

        const guide_pdf = path.join('pdfs', req.file.filename)
		
        const guide = await Guides.create({cost, guide_pdf, date_created, couriers});
	
		res.status(201).json(guide);
	} catch (error) {
        console.error("Error al crear guia: ", error);
        res.status(500).json({error: "Error al crear guia"});
	}
};

//GET
const getTodasGuias = async(req, res) => {
    try {
        const guides = await Guides.findAll();
        res.status(200).json(guides);
    } catch (error) {
        console.error("Error al obtener todas las guias");
        res.status(500).json({error: "Error al obtener todas las guias"})
    }
};

const getGuiaId = async (req, res) => {
    try {
      // Buscar la guía por ID
      const guide = await Guides.findByPk(req.params.id);
  
      // Verificar si la guía existe y si tiene un archivo PDF
      if (!guide || !guide.guide_pdf) {
        return res.status(404).json({ error: 'Guía no encontrada o archivo PDF no disponible' });
      }
  
      // Obtener los datos binarios del PDF
      const pdfData = guide.guide_pdf; // Aquí se encuentran los datos binarios del PDF
  
      // Crear el objeto de la guía con los datos excluyendo el PDF
      const guideData = {
        id: guide.id,
        cost: guide.cost,
        couriers: guide.couriers,
        date_created: guide.date_created,
        // Aquí puedes agregar más propiedades si es necesario
      };
  
      // Responder con el objeto JSON de la guía y el archivo PDF en base64
      res.status(200).json({
        guide: guideData, // Los datos de la guía (JSON)
        guide_pdf: pdfData.toString('base64'), // El PDF en formato Base64
      });
  
    } catch (error) {
      console.error("Error al obtener la guía", error);
      res.status(500).json({ error: "Error al obtener la guía" });
    }
  };

//UPDATE
const actualizarGuia = async(req,res) => {
    try {
        const {cost, couriers} = req.body

        let guide_pdf = null;
        if (req.file) {
            guide_pdf = path.join('pdfs', req.file.filename); 
        }
        await Guides.update(
            {cost, guide_pdf, couriers },
            {
            where: {id: req.params.id}
            }
        );
        res.status(200).json({message: "Guia actualizada"})
    } catch (error) {
        console.error("Error al actualizar guia")
        res.status(500).json({error: "Error al actualizar guia"})
    }
};

//DELETE
const borrarGuia = async(req,res) => {

    try{
        await Guides.destroy({
        where: {id: req.params.id},
    }       
    )
    } catch (error) {
        console.error("Error al borrar guia")
        res.status(500).json({error: "Error al borrar guia"})
    }   
};

    //Exportamos 
module.exports = {
    crearGuia,
    getTodasGuias,
    getGuiaId,
    actualizarGuia,
    borrarGuia,
}