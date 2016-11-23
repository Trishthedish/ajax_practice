// Setting up AJAX request (create a new one for each request)
// XMLHTTPRequest now known as AJAX


//creating a variable where a new AJX method is being created.
 var request = new XMLHTTPRequest();

 // Create a callback function, with event handler

 //taking variable object created above. calling onreadystatechange method.
 // which is storing a new fucntion
/*Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.

 request.onreadystatechange = function () { */

   // if function request method ready state is == to 4
   // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

  //  The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

  if (request.readyState === 4) {
    // and if is ok
    if (response.status === 200) {
      /// begin parsing in response.
      var pets = JSON.parse(response.responseText);

      // new pets variable storing stirng
      var petsHTML = '';
      for (var i=0; i<pets.length; i+= 1){
        petsHTML += '<h3>' + pets[i].name + '</h3>';
      }
      document.getElementByID('pets').innerHTML = petsHTML;
    } else if (response.status == 404) {
        // display message for user if file not found
    } else if (response.status == 500) {
        // display message for user if Server had a problem
    }
  }
};
// Prepare the request with the HTTP METHOD (GET and POST most common) and
response.open('GET', 'https://petdibs.herokuapp.com/pets');

// Create a function to send the request, in response to an event (button onClick)
function getPets(){
  request.send();
};

var loadItem = document.getElementById("load");
loadItem.onclick = getPets();
