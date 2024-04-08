var flag = 0;

document.querySelector("#menu").addEventListener("click", function(){
    if(flag === 0){
        document.querySelector("#navbar").style.height="50vh";
        document.querySelectorAll("#navbar a").forEach(function(a){
            a.style.opacity="1";
        })    
        document.querySelector("#menu").style.gap = "2.4vh";
        document.querySelector("#bigline").style.display = "none";
        document.querySelector("#topline").style.rotate = "45deg";
        document.querySelector("#bottomline").style.rotate = "-45deg";
        document.querySelector("#topline").style.width = "100%";
        document.querySelector("#bottomline").style.width = "100%";
        flag = 1;
    }else{
        document.querySelector("#navbar").style.height="9vh";
        document.querySelectorAll("#navbar a").forEach(function(a){
            a.style.opacity="0";
        })
        document.querySelector("#menu").style.gap = "1vh";
        document.querySelector("#bigline").style.display = "block";
        document.querySelector("#topline").style.rotate = "0deg";
        document.querySelector("#bottomline").style.rotate = "0deg";
        document.querySelector("#topline").style.width = "80%";
        document.querySelector("#bottomline").style.width = "80%";
        flag = 0;
    }
})