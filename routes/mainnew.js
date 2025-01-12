const {Router, request, response} = require("express")
const router = Router()
const Model = require('../models/Model')
const multer = require("multer")
const fs = require("fs")

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storageConfig})

router.post("/hello", (req, res)=> {
    const a = req.body
    console.log(a)
    res.json(req.body)
})

router.post("/addmain", upload.single("myfile"), (req, res) => {
    const newMain = new Main({
        owner: req.body.userId,
        paramA: req.body.paramA,
        paramB: req.body.paramB,
        paramC: req.body.paramC,
        paramD: req.body.paramD,
        title: req.body.title,
        author: req.body.author,
        designer: req.body.designer,
        description: req.body.description,
        img: req.file.originalname
    })
    newMain
        .save()
        .then(main => res.json(newMain))
        .catch(err => res.status(400).json(`Error my: ${err}`))
})

router.post("/modelmain", upload.single("myfile"), (req, res)=>{
    const a = req.body
    const newModel = new Model({
        name: req.body.name,
        projects: req.body.projects
    })
        newModel
            .save()
            .then(model => res.json(newModel))
            .catch(err => res.status(400).json(`MyError : ${err}`))
})

module.exports = router