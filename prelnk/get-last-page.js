const previousPage = document.getElementById('previous-page');

previousPage.textContent = document.referrer;

fetch("history.html")
	.then(response => response.text())
	.then(data => {
		// Create a new HTML document and set its contents to the retrieved data
		var parser = new DOMParser();
		var htmlDoc = parser.parseFromString(data, "text/html");
		
		// Use the querySelector() method to select the <p> tag and read its contents
		var myParagraph = htmlDoc.querySelector("#start").textContent;
		console.log("Contents of <p> tag: " + myParagraph);
		
		var text1 = myParagraph ;
		var text2 =  document.referrer;
		var concatenatedText = text1 + text2;
		
		// Use the innerHTML property to set the text of the HTML element to the concatenated text
		document.getElementById("concatenated-text").innerHTML = concatenatedText;
	
		myParagraph.textContent = concatenatedText;
	})
	.catch(error => console.log(error));
