const res = require("express/lib/response");
const axios = require('axios')
const uniSchema = require("../models/uniSchema")
const mongoose = require('mongoose')


// criei o primeiro método que armazenada a função que envia a resposta para a rota
const home = (request, response) => {
    response.status(200).send({
        "messsage": "OK"
    })
}

// criei um método que varre a api e armazenar no Mongo

const getReqbyCountry = async (req, res) => {
    try {
        const country = await (req.params.country)

        const apiResponse = await axios.get("http://universities.hipolabs.com/search?country=" + country)

        //últilizando o FOR para acessar todos os indices da API

        for (var i = 0; i < apiResponse.data.length; i++) {

            const newUni = new uniSchema({
                _id: new mongoose.Types.ObjectId(),
                alpha_two_code: apiResponse.data[i].alpha_two_code,
                domains: [
                    apiResponse.data[i].domains
                ],
                country: apiResponse.data[i].country,
                web_pages: [
                    apiResponse.data[i].web_pages
                ],
                name: apiResponse.data[i].name
            })

        //salvando no mongo

            const savedUni = await newUni.save()
        }

        res.status(200).json({
            message: `Um total de ${apiResponse.data.length} Universidades foram adicionadas com sucesso!`,
        })


    } catch (err) {
        console.log(err)
        response.status(500).send('Algo está errado')
    }
}


// criei o primeiro método para consultar os dados api que está salvo no mongodb

const getAll = async (req, res) => {
    try {
        const universities = await uniSchema.find()
        res.status(200).json(universities)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

// consultar uma universidade pelo ID

const getbyID = async (req, res) => {
    try {
        const findUni = await uniSchema.findById(req.params.id)
        res.status(200).json(findUni)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

// método para criar novas universidade e adicionar ao mongo


const createUni = async (req, res) => {
    try {
        const newUni = new uniSchema(req.body)

        const savedUni = await newUni.save()

        res.status(200).json({
            message: "universidade adicionado com sucesso!",
            savedUni
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// método para atualizar as existentes universidade e adicionar ao mongo

const updateUniById = async (req, res) => {
    try {
        const findUni = await uniSchema.findById(req.params.id)

        if (findUni) {
            findUni.name = req.body.name || findUni.name
            findUni.web_pages = req.body.web_pages || findUni.web_pages
            findUni.domains = req.body.domains || findUni.domains
        }

        const savedUni = await findUni.save()

        res.status(200).json({
            message: "Universidade atualizada com sucesso!",
            savedUni
        })

    } catch (error) {
        console.error(error)
    }
}

// método para deletas as universidade do mongo

const deleteUniById = async (req, res) => {
    try {
        const uniFound = await uniSchema.findById(req.params.id)

        await uniFound.delete()

        res.status(200).json({
            mensagem: `Universidade '${uniFound.name}' deletada com sucesso!`
        })

    } catch (err) {
        res.status(400).json({
            mensagem: err.message
        })
    }
}


module.exports = {
    home,
    getReqbyCountry,
    getAll,
    createUni,
    updateUniById,
    deleteUniById,
    getbyID
}