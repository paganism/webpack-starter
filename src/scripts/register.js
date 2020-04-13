import axios from 'axios';
let FormData = require('form-data');

let form = document.getElementById("regForm");

form.addEventListener('submit', function(ev) {

  let checkpassword = false;

  let oData = new FormData(form);

  let fusername = oData.get('username').trim();
  let fpassword = oData.get('password').trim();
  let fpassword2 = oData.get('password2').trim();
  let femail = oData.get('email').trim();

  if (!!fusername){
    if (!!fpassword !=='' && fpassword === fpassword2){
        checkpassword = true;
    }
        else alert('Укажите пароль');
  }
  else alert('Укажите корректный логин');

if (!checkpassword) return false;

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
        if (response.status === 201) {
          window.location = '/index';
        };
      })
      .catch(function (error) {
      });
      ;

  ev.preventDefault();
}, false);
