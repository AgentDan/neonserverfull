const express = require("express")
const path = require("path");
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require("cors")

const PORT = process.env.PORT || 5000
connectDB()

app.use(cors())
app.use(express.json({extended: true}))
app.use('/api/', require('./routes/main'))
app.use('/api/model', require('./routes/mainnew'))
app.use('/api/auth', require('./routes/auth'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/dist')));
    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'client', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))