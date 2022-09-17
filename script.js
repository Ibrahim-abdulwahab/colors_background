window.addEventListener('load', function(){
    const button=document.getElementById("btn")
    const colors=["red","green","blue","yellow"]
    const feature=document.getElementById("feature")
    const name=document.getElementById("name_color")
    

    const changeColor=()=>{
        let color=colors[Math.floor(Math.random()*colors.length)];
        feature.className=color;
        name.innerHTML=`Background Color : ${color}`
    }


    button.addEventListener("click",changeColor)



})