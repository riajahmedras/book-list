/**
 * DOM Selector
 * Event Listener
 * Basic Validation
 * Creating Elements
 * Append
 */

 // DOM Selection
 const title = document.querySelector('#title');
 const author = document.querySelector('#author');
 const year = document.querySelector('#year');
 const btn = document.querySelector('.btn');
 const bookList = document.querySelector('#book-list');

 // Event Listener
 btn.addEventListener('click', function(e){
   e.preventDefault();

   if (title.value == "" && author.value == "" &&  year.value == "") 
   {
      alert("Put text in the vacant!");
   } else {
      const newRow = document.createElement('tr');

      // create new title
      const newTitle = document.createElement('th');
      newTitle.innerHTML = title.value;
      newRow.appendChild(newTitle);

      // create new author
      const newAuthor = document.createElement('th');
      newAuthor.innerHTML = author.value;
      newRow.appendChild(newAuthor);

      // Create new year
      const newYear = document.createElement('th');
      newYear.innerHTML = year.value;
      newRow.appendChild(newYear);


      bookList.appendChild(newRow);
   }

   console.log(newTitle);
 })