//fetch api code1

const kawuraform = document.getElementsByClassName('form');
kawuraform.addEventListener('submit', function(e){
   e.preventDefault();

   const formData = new FormData(this);

   fetch('https://kawuraweb.herokuapp.com',{
      method: 'post',
      body: formData
   
      }).then(function(response){
         return response.text();
      }).then(function(text){
         console.log(text);
      }).catch(function(error){
         console.error(error);
      })
})


//fetch api code2
const kawuraForm = document.getElementById('myForm');
kawuraForm.addEventListener('submit', function(e) {
   e.preventDefault();

   const isValidElement = element => {
      return element.name && element.value;
   };

   const formToJSON = elements => [].reduce.call(elements, (data, element) => {
      if (isValidElement(element)) {
      data[element.name] = element.value;
   }
   return data;
   }, {});
   const formdata = formToJSON(form.elements);
   const formData = JSON.stringify(formdata);
   console.log(formData);

   const url ='https://kawuraweb.herokuapp.com/signin';
   fetch(url,{
      method: 'post',
      body: formData
   }).then(function(response){
      return response.text();
   }).then(function(text){
      console.log(text);
   }).catch(function(error){
      console.log("error");
   })
  
});


//Real gee on converting form input to json

/* the function below preveny default submission of form data and run our custom script
* @param {Event}, @param{HTMLFormControlsCollection}
* @return {void}, @return{object}
*/
//function that checks for validity
const isValidElement = element => {
   return element.name && element.value;
 };


const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    // Make sure the element has the required properties.
   if (isValidElement(element)) {
      data[element.name] = element.value;
   }
   return data;
 }, {});

 const handleFormSubmit = event => {
   // Stop the form from submitting since we’re handling that with AJAX.
   event.preventDefault();
   // Call our function to get the form data.
   const data = formToJSON(form.elements);
   // Demo only: print the form data onscreen as a formatted JSON object.
   const dataContainer = document.getElementsByClassName('result-display')[0];
   // Use `JSON.stringify()` to make the output valid, human-readable JSON.
   dataContainer.textContent = JSON.stringify(data, null, "  ");
   // ...this is where we’d actually do something with the form data...
 };

 const form = document.getElementsByClassName('form')[0];
 form.addEventListener('submit', handleFormSubmit);



