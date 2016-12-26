function change(){
    var tra = document.getElementById("move").style.transform
    switch (tra)
    {
    case "translateY(0%)":
        $("#move").css("transform","translateY(-100%)");
        break;
    case "translateY(-100%)":
        $("#move").css("transform","translateY(-200%)");
        break;
    case "translateY(-200%)":
        $("#move").css("transform","translateY(-300%)");
        break;
    case "translateY(-300%)":
        $("#move").css("transform","translateY(0%)");
        break;
    }  
}

$(document).ready(function(){
    setInterval(change, 4000);
});