window.addEventListener('load', function(){
    const button=document.getElementById("btn")
    const colors=["#9287AA","#129E96","#9D86FE"]
    const feature=document.getElementById("feature")
    const name=document.getElementById("name_color")
    

    const changeColor=()=>{
        let color=colors[Math.floor(Math.random()*colors.length)];
        feature.style.backgroundColor= color;
        name.innerHTML=`Background Color : ${color}`
    }


    button.addEventListener("click",changeColor)
})
