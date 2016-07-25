      function myFunction() {
        var words = document.getElementById("before");    
        var pic = document.getElementById("after");
    	
    	if (pic.src.match("winning.jpg.png")) {
    		pic.src = "obamicon.jpg.png";
    		pic.alt = "obamicon";
//     		words.innerHTML="After";
			} 

		else {
			pic.src= "winning.jpg.png";
			pic.alt="winning";
// 			words.innerHTML="Before";

			}
    }
    
//     function bigImg(x){
//     x.style = "width:604px; height:448px"
//     }
//     
//     function normalImg(x) {
//     x.style = "width:304px; height:224px"
//     }