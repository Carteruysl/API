const fs = require('fs');
const express = require('express');//npm install express
const app = express();
const dateFormat = require('moment');  //npm install moment
const config = require('./config');//config
const date = dateFormat(new Date()).format('YYYY-MM-DD');
console.log(date);
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/api/:number', (req, res, params) => {
  const value = req.params.number;//api上的參數
  console.log(typeof value);
  if (typeof value == 'string') {
    let result = {
      id1: {
        Title: "台灣比菲多",
        Name: "養樂多",
        Creat_usr: "Ekko",
        Creat: date
      },
      id2: {
        Title: "迷克夏",
        Name: "青檸香茶",
        Creat_usr: "Anna",
        Creat: date
      },
    }
    console.log(result);
  // 在終端機(console)列出結果
  res.send(result);
  }
});

//port:3000
app.listen(config.apiPort, () => {
  console.log('Listening on port 3000...');
});
//偵測連線，並傳入一個callback function
