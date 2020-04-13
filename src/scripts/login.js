import axios from 'axios';

let FormData = require('form-data');

let form = document.getElementById("formElem");

form.addEventListener('submit', function(ev, req) {

  let checkpassword = false;

  let oData = new FormData(form);

  let fusername = oData.get('username').trim();
  let fpassword = oData.get('password').trim();

  if (!!fusername){
    if (!!fpassword){
        checkpassword = true;
    }
        else alert('Укажите пароль');
  }
  else alert('Укажите корректный логин');

if (!checkpassword) return false;

  oData.set('username', fusername);
  oData.set('password', fpassword);

    axios({
        method: 'post',
        url: '/api-oauth/login/',
        withCredentials: true, 
        data: oData
      })
      .then(function (response) {

        document.cookie = 'token=' + response.data.token;

        if (response.status === 200) {
          window.location = '/index';
        };
      })
      .catch(function (error) {
      });
      ;

  ev.preventDefault();
}, false);
