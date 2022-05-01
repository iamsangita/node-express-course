const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const mockUserData = [
    { name: "Mark" }, 
    { name: "Jill" }
];

app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.get('/users/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: "got user with id",
        user: req.params.id
    });
});


app.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUserame = "Example";
    const mockPassword = "Example";

    if (username === mockUserame && password === mockPassword ){
        res.json({
            success: true,
            message: "paswd and usrname atch!",
            token: "encrypted token gets here"
        })
    } else {
        res.json({
            success: false,
            message: "pwd and username dont match!"
        })
    }

})

app.listen(8000, function () { console.log("Server is running"); });