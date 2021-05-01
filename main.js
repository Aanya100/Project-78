var images = [
    "father.png",
    "mother.jpg",
    "me.png",
    "brother.jpg",
    "family.jpg",
    
    ];
    var i=0;
    function nextslide() {
    document.getElementById("album").src = images[i]; 
    i++;
    if (i == 5){ 
    i=0;
    }    
    }
    