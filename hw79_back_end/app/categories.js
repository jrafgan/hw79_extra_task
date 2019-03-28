const express = require('express');
const db = require('../fileDb');
const nanoid = require("nanoid");

const createRouter = connection => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send(db.getItems('categories'));
    });

    router.post('/', (req, res) => {
        const category=req.body;
        category.id = nanoid();

        db.addItem('categories', category);
        res.send({message: 'OK'});
    });
    return router;
};

module.exports = createRouter;