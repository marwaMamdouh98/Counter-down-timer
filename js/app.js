


/* var of items */
let title = document.getElementById("titleInput");
let date = document.getElementById("dateInput");
let counterButton = document.getElementById("enterBtn");
let form = document.getElementById("counterForm");




 
     
     
     //form.addEventListener("click", function(event) {
        var deadline = new Date(date.value).getTime(); 
        var x = setInterval(function() { 
        var now = new Date().getTime(); 
        var t = deadline - now; 
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((t % (1000 * 60)) / 1000); 
            document.getElementById("showData").innerHTML = days + "d "  
        + hours + "h " + minutes + "m " + seconds + "s "; 
            if (t < 0) { 
                clearInterval(x); 
                document.getElementById("showData").innerHTML = "EXPIRED"; 
            } 
        }, 1000); 
     //});
     
            /*let now = new Date().getTime();
     let date = new Date(date.value);

     let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hour = date.getHours(),
        min  = date.getMinutes();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;

    var today = year + "-" + month + "-" + day,
        displayTime = hour + ":" + min; 

    document.getElementById('formdate').value = today;      
    document.getElementById("formtime").value = displayTime;
     
     
     
     
     
    let countDown = new Date(date.value).getTime();
    
}
 counterButton.addEventListener 
 

/*
var sec =190;
 var   countDiv = document.getElementById("showData");

var countDown = setInterval(function(){
    secondPass();
})

if(title.value=="" || data.value==""){
         alert("please enter your data please...")
     }
*/