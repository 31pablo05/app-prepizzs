// /routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const User = require('../models/user');

// Ruta para mostrar el formulario de pedidos
router.get('/orders/new', (req, res) => {
    res.render('orderForm');
});

// Ruta para crear un nuevo pedido
router.post('/orders', async (req, res) => {
    try {
        const { userId, date, quantity, price } = req.body;
        const newOrder = new Order({ 
            user: userId, 
            date: new Date(date), 
            quantity, 
            price 
        });
        await newOrder.save();
        res.redirect('/orders');
    } catch (err) {
        res.status(400).send('Error al crear el pedido');
    }
});

// Ruta para listar todos los pedidos (opcional)
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find().populate('user');
        res.render('orderList', { orders });
    } catch (err) {
        res.status(400).send('Error al obtener los pedidos');
    }
});

module.exports = router;
