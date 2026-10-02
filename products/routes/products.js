const router = require('express').Router()

const PRODUCTS = [
    { id: 1, name: "iPhone Max", price: 12999 },
    { id: 2, name: "Samsung Galaxy", price: 10999 },
    { id: 3, name: "Huawei P30", price: 10999 },
]

// get all products
router.get('/', (req, res) => {
    res.json(PRODUCTS)
})

// add new product
router.post('/', (req, res) => {
    const newPhone = req.body

    console.log(newPhone)

    if (!newPhone) {
        res.status(400).json({ status: 'error', message: 'No new phone to add' })
        return
    }

    PRODUCTS.push(newPhone)
    res.status(201).json({ status: "success", data: PRODUCTS[PRODUCTS.length - 1] })
    return
})

// delete product
router.delete('/:id/', (req, res) => {
    const id = req.params.id

    const result = PRODUCTS.filter(p => p.id != id)

    console.log(result)
    console.log(id)

    res.json({
        message: "Product successfully deleted",
        data: result
    })
})

module.exports = router