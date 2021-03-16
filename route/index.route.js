const express = require('express');
const router = express.Router();
const model = require('../model/index.model');


router.get('/api/test/:id', function (req, res) {
    model.getTest(req, res, req.params.id);
    console.log('--Route-',req.params.id)
});

router.post('/api/async', function (req, res) {
    model.asyncTest(req, res, req.body);
});

module.exports = router;

