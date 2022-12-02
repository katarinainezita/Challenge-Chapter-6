const express = require("express")
const app = express()
const port = 3000
const { User_Game, User_Game_Biodata, User_Game_History} = require("./models")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.set("view engine", "ejs")

app.get("/register", (req, res) => {
    res.render("registerPage")
})

app.post("/register", async(req, res) => {
    try {
        let { username, password, role} = req.body
        let inputUser = {
        username,
        password,
        role
    }
    let result = await User_Game.create(inputUser)
    // console.log(result, "==> RESULT")
    if(result){
        res.redirect("/login")
    }

    } catch (error) {
        console.log(error, "==> ERR")
    }
    })

app.get("/login", (req, res) => {
    res.render("loginPage")
})

app.post("/login", async(req, res) => {
    try {
        log(req.body)
        // let  result = await find
    } catch (error) {
        
    }
})

app.listen(port, () => {
    console.log("SERVER NYALA DI PORT " + port);
})