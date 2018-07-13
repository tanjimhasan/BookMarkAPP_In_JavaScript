
//linstning Form Submitting Form
document.getElementById('myform').addEventListener('submit',saveBookmark);


//Save Bookmark Function
function saveBookmark(e){

//Get The Form Value after Sibmitting

var siteName = document.getElementById('siteName').value;
var siteUrl = document.getElementById('siteUrl').value;

var bookmark = {
	name:siteName,
	url:siteUrl
}

//console.log(bookmark);

/*
	Local Storage Test
	localStorage.setItem('test', 'Hello World');
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
*/

if (localStorage.getItem('bookmarks') == null) {
	//initialize array
	var bookmarks = [];

	//add to array
	bookmarks.push(bookmark);
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

} else{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	bookmarks.push(bookmark);
	//resel the Local Storage
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

}

	//Re-fetch Bookmark

	fetchBookmarks();

	// prevent From New Submitting or refreshing Page after Submitting
	e.preventDefault();
}

function fetchBookmarks(){
	//get Bookmarks form localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//get output id

	var bookmarkResult = document.getElementById('bookmarkResult');

	bookmarkResult.innerHTML = '';

	for (var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarkResult.innerHTML += '<div class="card card-body">'+
									'<h3>'+name+
									'<a class="btn btn-secondary" target="_blank" href="'+url+'">VIsit</a>'+
									'<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'+
									'</h3>'+
									'</div>';
	}
}

	//delete bookmark
function deleteBookmark(url){
	//get Bookmarks form localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	for (var i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url==url) {
			bookmarks.splice(i,1);
		}
	}
	//resel the Local Storage
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	//Re-fetch Bookmark

	fetchBookmarks();

}

// jQuery(document).ready(function($){
	

	
// });