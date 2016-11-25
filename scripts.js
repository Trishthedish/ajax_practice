// script.js
// Which URL do we want to 'get'?

$(document).ready(function(){


  // var url = "https://petdibs.herokuapp.com/pets";
// which url do we want to get?
  var url = 'https://petdibs.herokuapp.com/pets';
  var successCallback = function (response) {
    console.log(response);
    console.log("success!");

      for(var i = 0; i < response.length; i++ ) {

        $('#pets').append("<h3><a href=" + url + "/" + response[i].id + ">" + response[i].name + "</a><h4>");
      }

  };

  $('#load').on('click', function() {
    $.get(url, successCallback);
  });

//////////////////////////////

// clicl on a pet, show more information on that pet.
//click event, that will make an ajax get request for the specific pet, then show pet, by ID

//

//if successful, then have a pop-up with pets info.
$("#pets").on('click','a', function(event){
  event.preventDefault();

  $('#profile').show();
  var petUrl = $(this).attr('href');

  // console.log('pet url', petUrl);
  $.get(url, successCallback);
  // console.log("I work");


// response could also be changed to be pets. all subsequent calls will be changed to pet as wwell.
// you can also pass a url doesn't exist and see that it doesnt work
  $.get(petUrl, function(response){
    // console.log("this is-->",response.name);  // returns name each time clicked on by user.

    $('#name').text(response.name);

    $('#breed').text(response.breed);

    $('#age').text(response.age);




  }).always(function(){
    $("#message").text("something happened.");
    console.log('you are done');
  }).fail(function(){
    alert("failed.");
  });

});



 // url;

// make a new pet
// var data = {
//   name: "BobCat_TRISH5",
//   age: 50,
//   breed: "cat"
// };

var callback = function(){
  console.log("Success!!!!!!!!");
};

// testing that pushing submit will do something.
$('form').submit('click', function(e){
  // By default, the form will attempt to do it's own local POST so we want to prevent that default behavior

  e.preventDefault();
  var url = $(this).attr("action"); //retrieve action
  var formData = $(this).serialize();


  $.post(url, formData, function(response){
    $('#message').html('<p> Pet added! </p>');

    // What do we get in the response?
    console.log(response);
  });
});



}); //ending of document.ready()

// function(event){
//   event.preventDefault();


















// Setting up AJAX request (create a new one for each request)
 // var request = new XMLHTTPRequest();

//  // Create a callback function, with event handler
//  request.onreadystatechange = function () {
//   if (request.readyState === 4) {
//     if (response.status === 200) {
//       var pets = JSON.parse(response.responseText);
//       var petsHTML = '';
//       for (var i=0; i< pets.length; i+= 1){
//         petsHTML += '<h3>' + pets[i].name + '</h3>';
//       }
//       document.getElementByID('pets').innerHTML = petsHTML;
//     } else if (response.status == 404) {
//         // display message for user if file not found
//     } else if (response.status == 500) {
//         // display message for user if Server had a problem
//     }
//   }
// };
// // Prepare the request with the HTTP METHOD (GET and POST most common) and
// request.open('GET', 'https://petdibs.herokuapp.com/pets');
//
// // Create a function to send the request, in response to an event (button onClick)
// function getPets(){
//   request.send();
// }
//
// var loadItem = document.getElementById("load");
// loadItem.onclick = getPets();
