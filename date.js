


//1. npm i xmlhttprequest 
/* var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET', `http://localhost:3000/api/99`, true);

request.onload = function() {
    console.log(request.status);
  if (request.status >= 200 && request.status < 400) {
  
    // Success!

    console.log(request.responseText);
  }
};
request.send(); */


//2. npm i request
/* var request = require('request');
request('http://localhost:3000/api/99', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */




/* 3. $.ajax({
    url: 'http://localhost:3000/api/99',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      // 取得的遠端資料
    }
  }); */


//4.npm i node-fetch --save
/* 4.  const fetch = require("node-fetch");//npm i node-fetch --save
  fetch('http://localhost:3000/api/99', {})
  .then((response) => {
    // 這裡會得到一個 ReadableStream 的物件
    console.log(response);
    // 可以透過 blob(), json(), text() 轉成可用的資訊
    return response.json(); 
  }).then((jsonData) => {
    console.log(jsonData);
  }).catch((err) => {
    console.log('錯誤:', err);
}); */

//5.npm i axios
/* const axios = require('axios');
// Make a request for a user with a given ID
axios.get('http://localhost:3000/api/99')
  .then(function (response) {
    // handle success
    console.log('response',response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  }); */