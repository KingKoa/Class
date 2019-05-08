window.onload = function(){
    var imageNum = 0;
    document.querySelector("button").addEventListener("click", 
        function(){
            ++imageNum;
            if (imageNum > 7)
            {
                imageNum = 0;
            }

            if (imageNum == 0){
                document.querySelector("header").style.backgroundImage = "url('images/ocean.jpg')";
            }
            if (imageNum == 1){
                document.querySelector("header").style.backgroundImage = "url('images/Clouds.jpg')";
            }
            if (imageNum == 2){
                document.querySelector("header").style.backgroundImage = "url('images/ConnectingStars.jpg')";
            }

            if (imageNum == 3){
                document.querySelector("header").style.backgroundImage = "url('images/LightBulb.jpg')";
            }

            if (imageNum == 4){
                document.querySelector("header").style.backgroundImage = "url('images/Mountain.jpg')";
            }

            if (imageNum == 5){
                document.querySelector("header").style.backgroundImage = "url('images/OldCastle.jpeg')";
            }

            if (imageNum == 6){
                document.querySelector("header").style.backgroundImage = "url('images/Outerspace.jpeg')";
            }

            if (imageNum == 7){
                document.querySelector("header").style.backgroundImage = "url('images/SunSetCastle.jpeg')";
            }
    });
}
