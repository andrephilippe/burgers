var express = require('express');
var router = express.Router();

// Burgers Controller

router.get('/findAll', (req, res) => {
    res.send([
        {
            id: 0,
            name: 'DO SEU JEITO',
            ingredients: [
                { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'Pão de cima', bottom: -20, price: 0 },
                { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'Pão de baixo', bottom: -25, price: 0 }
            ]
        },
        {
            id: 1,
            name: 'X-BACON',
            ingredients: [
                { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'Pão de cima', bottom: -20, price: 0 },
                { id: 6, img: 'https://i.imgur.com/sDiZhon.png', name: 'Bacon', bottom: -30, price: 2.00 },
                { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
                { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 },
                { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'Pão de baixo', bottom: -25, price: 0 }
            ]
        },
        {
            id: 1,
            name: 'X-BURGER',
            ingredients: [
                { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'Pão de cima', bottom: -20, price: 0 },
                { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
                { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 },
                { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'Pão de baixo', bottom: -25, price: 0 }
            ]
        },
        {
            id: 1,
            name: 'X-EGG',
            ingredients: [
                { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'Pão de cima', bottom: -20, price: 0 },
                { id: 4, img: 'https://i.imgur.com/dF1q2PG.png', name: 'Ovo', bottom: -20, price: 0.80 },
                { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
                { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 },
                { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'Pão de baixo', bottom: -25, price: 0 }
            ]
        },
        {
            id: 1,
            name: 'X-EGG BACON',
            ingredients: [
                { id: 1, img: 'https://i.imgur.com/BHv8ACd.png', name: 'Pão de cima', bottom: -20, price: 0 },
                { id: 4, img: 'https://i.imgur.com/dF1q2PG.png', name: 'Ovo', bottom: -20, price: 0.80 },
                { id: 6, img: 'https://i.imgur.com/sDiZhon.png', name: 'Bacon', bottom: -30, price: 2.00 },
                { id: 5, img: 'https://i.imgur.com/sRW1kf9.png', name: 'Queijo', bottom: -28, price: 1.50 },
                { id: 3, img: 'https://i.imgur.com/GbHnGm6.png', name: 'Hambúrguer', bottom: -20, price: 3.00 },
                { id: 7, img: 'https://i.imgur.com/BC6OXB4.png', name: 'Pão de baixo', bottom: -25, price: 0 }
            ]
        }
    ]);
});

module.exports = router;