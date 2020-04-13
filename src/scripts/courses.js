import axios from 'axios';


function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2)
  return parts.pop().split(";").shift();
}


function getCourses() {
    let acsess_token = getCookie('token');

    let AuthStr = 'Bearer '.concat(acsess_token); 

    axios({
        method: 'get',
        url: '/api-oauth/courses/',
        withCredentials: true, 
        headers: { 'Authorization': AuthStr},
      })
      .then(function (response) {

        let results = response.data.results;
        let parent = document.querySelector('#course-title');

        for (let i = 0; i < response.data.results.length; i++) {
          let div = document.createElement('div');
          div.innerHTML = '<h3>' + results[i].title + '</h3>';
          parent.appendChild(div);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      ;
};

getCourses();
