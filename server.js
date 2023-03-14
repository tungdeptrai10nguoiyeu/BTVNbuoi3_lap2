var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(8080);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/caculator", function (req, res) {});

app.post("/kq", function (req, res) {
  var a = req.body.a;
  var b = req.body.b;
  var result = parseInt(a) + parseInt(b);
  var result1 = parseInt(a) - parseInt(b);
  var result2 = parseInt(a) * parseInt(b);
  var result3 = parseInt(a) / parseInt(b);
  res.send(
    "Tổng : \n" + result +"\n" + "\nHiệu : \n" + result1 + "\n" + "\nTích : \n" + result2 + "\n" + "\nThương : \n" + result3
  );
  return res.end();
});
