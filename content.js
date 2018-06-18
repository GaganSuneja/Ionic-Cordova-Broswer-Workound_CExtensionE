(function(){
            // Interval timer to check after each second for Error Message 

            setInterval(function(){
            try{
            // iframe for the mobile 
                var iframe  = document.getElementsByTagName("iframe");
                
                var innerDoc = iframe[0].contentDocument || iframe[0].contentWindow.document;
                var button = innerDoc.getElementsByClassName("ion-diagnostic-message");
            

                var androidInnerDoc = iframe[1].contentDocument || iframe[1].contentWindow.document;
                var androidbutton = androidInnerDoc.getElementsByClassName("ion-diagnostic-message"); 
            
                if(androidbutton[0].innerHTML== "Uncaught (in promise): cordova_not_available"){
                // android emulator inner element to be removed

                    var androidElement = androidInnerDoc.getElementById("ion-diagnostics");
                    androidElement.remove();
                }

                if(button[0].innerHTML == "Uncaught (in promise): cordova_not_available"){
                // ios emulator  inner element to be removed

                    var er = innerDoc.getElementById("ion-diagnostics");
                    er.remove();

                }
            
            }catch(e){

            }  

    },1000);

})();