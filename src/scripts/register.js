const axios = require('axios');
var FormData = require('form-data');

var form = document.getElementById("regForm");

form.addEventListener('submit', function(ev) {

  var checkpassword = false;

  var oData = new FormData(form);

  var fusername = oData.get('username').trim();
  var fpassword = oData.get('password').trim();
  var fpassword2 = oData.get('password2').trim();
  var femail = oData.get('email').trim();

  if (fusername !='' && fusername != undefined ){
    if (fpassword !='' && fpassword != undefined && fpassword === fpassword2){
        checkpassword = true;
    }
        else alert('Укажите пароль');
  }
  else alert('Укажите корректный логин');

if (checkpassword != true) return false;

  oData.set('username', fusername);
  oData.set('password', fpassword);
  oData.set('password2', fpassword2);
  oData.set('email', femail);

    axios({
        method: 'post',
        url: '/api-oauth/users/',
        withCredentials: true, 
        data: oData
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 201) {
          window.location = '/index';
        };
      })
      .catch(function (error) {
        console.log(error);
      });
      ;

  ev.preventDefault();
}, false);
