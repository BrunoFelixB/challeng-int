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

const getReq = async (req, res) => {

    try {

        const universities = await uniSchema.find()

        if (universities.length > 1) {
            res.status(400).json({
                message: `já existem itens no banco de dados`,
            })
        } else {

            // "argentina", "brasil", "chile", "colombia", "paraguai", "peru", "suriname", "uruguay"

            const apiArg = await axios.get("http://universities.hipolabs.com/search?country=argentina")
            const apiBra = await axios.get("http://universities.hipolabs.com/search?country=brazil")
            const apiChi = await axios.get("http://universities.hipolabs.com/search?country=chile")
            const apiCol = await axios.get("http://universities.hipolabs.com/search?country=colombia")
            const apiPar = await axios.get("http://universities.hipolabs.com/search?country=paraguay")
            const apiUru = await axios.get("http://universities.hipolabs.com/search?country=uruguay")
            const apiPer = await axios.get("http://universities.hipolabs.com/search?country=peru")
            const apiSur = await axios.get("http://universities.hipolabs.com/search?country=suriname")

            //ultilizando o FOR para acessar todos os indices da API

            for (var i = 0; i < apiArg.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiArg.data[i].alpha_two_code,
                    domains: [
                        apiArg.data[i].domains
                    ],
                    country: apiArg.data[i].country,
                    web_pages: [
                        apiArg.data[i].web_pages
                    ],
                    name: apiArg.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiBra.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiBra.data[i].alpha_two_code,
                    domains: [
                        apiBra.data[i].domains
                    ],
                    country: apiBra.data[i].country,
                    web_pages: [
                        apiBra.data[i].web_pages
                    ],
                    name: apiBra.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiChi.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiChi.data[i].alpha_two_code,
                    domains: [
                        apiChi.data[i].domains
                    ],
                    country: apiChi.data[i].country,
                    web_pages: [
                        apiChi.data[i].web_pages
                    ],
                    name: apiChi.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiCol.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiCol.data[i].alpha_two_code,
                    domains: [
                        apiCol.data[i].domains
                    ],
                    country: apiCol.data[i].country,
                    web_pages: [
                        apiCol.data[i].web_pages
                    ],
                    name: apiCol.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiPar.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiPar.data[i].alpha_two_code,
                    domains: [
                        apiPar.data[i].domains
                    ],
                    country: apiPar.data[i].country,
                    web_pages: [
                        apiPar.data[i].web_pages
                    ],
                    name: apiPar.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiUru.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiUru.data[i].alpha_two_code,
                    domains: [
                        apiUru.data[i].domains
                    ],
                    country: apiUru.data[i].country,
                    web_pages: [
                        apiUru.data[i].web_pages
                    ],
                    name: apiUru.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiPer.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiPer.data[i].alpha_two_code,
                    domains: [
                        apiPer.data[i].domains
                    ],
                    country: apiPer.data[i].country,
                    web_pages: [
                        apiPer.data[i].web_pages
                    ],
                    name: apiPer.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            for (var i = 0; i < apiSur.data.length; i++) {

                const newUni = new uniSchema({
                    alpha_two_code: apiSur.data[i].alpha_two_code,
                    domains: [
                        apiSur.data[i].domains
                    ],
                    country: apiSur.data[i].country,
                    web_pages: [
                        apiSur.data[i].web_pages
                    ],
                    name: apiSur.data[i].name
                })

                //salvando no mongo

                const savedUni = await newUni.save()

            }

            res.status(200).json({
                message: `Todas as Universidades foram adicionadas com sucesso!`,
            })
        }
        
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

        const uniFound = await (req.body.name)

        const uni = await uniSchema.findOne({
            name: uniFound
        })

        if (uni) {

            res.status(400).json({
                message: `universidade ${uniFound} já existe!`,
            })

        } else {

            const newUni = new uniSchema(req.body)

            const savedUni = await newUni.save()

            res.status(200).json({
                message: "universidade adicionado com sucesso!",
                savedUni
            })

        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// método para atualizar as universidades existentes 

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

// método para deletas as universidade do banco de dados

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
    getReq,
    getAll,
    createUni,
    updateUniById,
    deleteUniById,
    getbyID
}
