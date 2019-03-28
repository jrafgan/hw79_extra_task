const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require("nanoid");
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const createRouter = connection => {
    const router = express.Router();

    router.get('/', (req, res) => {
        connection.query('SELECT * FROM `products`', (error, results) => {
            if (error) {
                res.status(500).send({error: 'Database error'});
            }
            res.send(results);
        });

    });

    router.get('/:id', (req, res) => {
        connection.query('SELECT * FROM `products` WHERE `id` = ?', req.params.id, (error, results) => {
            if (error) {
                res.status(500).send({error: 'Database error'});
            }
            if (results[0]) {
                res.send(results[0]);
            } else {
                res.status(404).send({error: 'Product not found'})
            }
        });
    });

    router.post('/', upload.single('image'), (req, res) => {
        console.log('posting started');
        const product = req.body;
        product.id = nanoid();

        if (req.file) {
            product.image = req.file.filename;
            console.log('image added');
        }

        connection.query('INSERT INTO `products` (`title`, `price`, `description`, `image`) VALUES (?, ?, ?, ?)', [product.title, product.price, product.description, product.image], (error, results) => {
            if (error) {
                console.log('error found', error);
                res.status(500).send({error: 'Database error'});

            } else {
                res.send({message: 'OK'});
            }

        });
    });
    return router;
};


module.exports = createRouter;
