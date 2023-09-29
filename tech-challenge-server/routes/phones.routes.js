const router = require("express").Router();
const allPhones = require("../data/phone.json")

// console.log(allPhones)

// GET /api/phones => Esta ruta me dara un lista con todos los telefonos
router.get("/", (req,res,next)=>{
    res.json(allPhones)
})
//GET /api/phones/:phoneid => Esta ruta me dara los detalles de una telefono en concreto
router.get("/:phoneId", (req,res,next)=>{
    try {
        console.log(req.params.phoneId,"req.params.phoneId");
        const idPhone = req.params.phoneId
        const thisPhone = allPhones.find((eachPhone)=>{
            // console.log(eachPhone);
            return eachPhone.id === Number(idPhone)
        })
        console.log("informacion de mi movil desde backend" , thisPhone);
        res.json(thisPhone)
    } catch (error) {
        next(error)
    }
})
module.exports = router;