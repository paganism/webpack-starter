import axios from 'axios';


function getCourses() {
    var acsess_token = 'your access token';
    var AuthStr = 'Bearer '.concat(acsess_token); 

    axios({
        method: 'get',
        url: '/api-oauth/courses/',
        withCredentials: true, 
        headers: { 'Authorization': AuthStr},
      })
      .then(function (response) {

        var results = response.data.results;
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
