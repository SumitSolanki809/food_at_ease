const express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/api/foodData', (req, res) => {
    res.send({
        itemsForBreakFast: [
            {
                itemName: 'Poha',
                description: 'rice poha minsed with kanda and peanuts and served with chutney and curd.',
                costPerItem: '50'
            },
            {
                itemName: 'Bread',
                description: '4 bread slices of the fresh bread, along with butter applied on it.',
                costPerItem: '30'
            },
            {
                itemName: 'Chips',
                description: 'Fresh fried potato chips with whitesauce and ketchup.',
                costPerItem: '40'
            }
        ],
        itemsForLunch: [
            {
                itemName: 'Rice',
                description: 'white rice, freshly cooked along with papad.',
                costPerItem: '50'
            },
            {
                itemName: 'Dal',
                description: 'Dal Tadka, with proper mixture of tomato, lettuce and coriander. ',
                costPerItem: '30'
            },
            {
                itemName: 'Curry',
                description: 'Poptato curry for the day, or any other special',
                costPerItem: '40'
            }
        ]
    })
})

app.get('/api/balance', (req, res) => {
    res.send({
        walletBalance: 500
    })
})

app.post('/api/authentication', (req, res) => {
    console.log(req.body)
    res.send({
        isUserAlreadyRegistered: false
    })
})