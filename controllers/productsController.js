module.exports = {
    getOne: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
       
        db.read_product(id).then( product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: `Oops! Something went wrong. Our Engineers have been informed!`})
            console.log(err)
        })
    },

    getAll: (req, res) => {
        let db = req.app.get('db')

        db.read_products().then( products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: `Oops! Something went wrong. Our Engineers have been informed!`})
            console.log(err)
        })
    },

    create: (req, res) => {
        let db = req.app.get('db')

        db.create_product(req.body).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: `Oops! Something went wrong. Our Engineers have been informed!`})
            console.log(err)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        let {desc} = req.query
        console.log(22222, desc, id)
        

        db.update_product({id, desc}).then( response => {
            console.log(11111, response)
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: `Oops! Something went wrong. Our Engineers have been informed!`})
            console.log(err)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params

        db.delete_product(id).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: `Oops! Something went wrong. Our Engineers have been informed!`})
            console.log(err)
        })
    }
}