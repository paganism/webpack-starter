import axios from 'axios';
var FormData = require('form-data');

var form = document.getElementById("formElem");

form.addEventListener('submit', function(ev) {

  var checkpassword = false;

  var oData = new FormData(form);

  var fusername = oData.get('username').trim();
  var fpassword = oData.get('password').trim();

  if (fusername !='' && fusername != undefined ){
    if (fpassword !='' && fpassword != undefined ){
        checkpassword = true;
    }
        else alert('Укажите пароль');
  }
  else alert('Укажите корректный логин');

if (checkpassword != true) return false;

  oData.set('username', fusername);
  oData.set('password', fpassword);

    axios({
        method: 'post',
        url: '/api-oauth/login/',
        withCredentials: true, 
        data: oData
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          window.location = '/index';
        };
      })
      .catch(function (error) {
        console.log(error);
      });
      ;

  ev.preventDefault();
}, false);
