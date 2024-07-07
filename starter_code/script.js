const inputBox = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {  //search function to find suggestions to the user depending on what he types
	let results = [];
	 if(str.length){   // if user types any input
		
		results = fruit.filter((keyword)=>{   // iterate over each element in fruit array and check if str is included in any of them, all items that have str included are added to the results array.

			return keyword.toLowerCase().includes(str.toLowerCase());  // lowerCase every value we are checking in fruit and str string
		
			});
		}
		return results;
		}
	
	// TODO

	
	


function searchHandler(e) {      // we use this function to be able to run search function on the user's input
	const inputVal = e.target.value;   
	const results = search(inputVal); // running search function depending on what user types
	showSuggestions(results,inputVal);
}

function showSuggestions(results, inputVal) {   // function to add all the elements in results array as li's under the search bar
	suggestions.innerHTML = ""  // reset suggestions for every time the user types
    results.forEach((result) => {   // use forEach to itirate over every element in results to create a new li, and every li has the text content of the values in the results array and then append these li's to the appropriate ul
 	const li = document.createElement('li');
	li.textContent = result
	suggestions.appendChild(li);
	hoverOnLi() // highlighting elements that the user is hovering over
	

  })
	
 }
function hoverOnLi() {
	const listItems = Array.from(suggestions.getElementsByTagName('li'))
	for(let i =0 ; i< listItems.length; i++){
		
		listItems[i].addEventListener('mouseenter',(e) => listItems[i].style.backgroundColor = 'rgb(216, 106, 106)' )
		listItems[i].addEventListener('mouseleave',(e) => listItems[i].style.backgroundColor = "")
	}
	
}


function useSuggestion(e) {
	suggestions.innerHTML = "" 
	const listItems = Array.from(suggestions.getElementsByTagName('li'))

		inputBox.value = e.target.innerHTML

	
}
const listItems = suggestions.getElementsByTagName('li')
inputBox.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
