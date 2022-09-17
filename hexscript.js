window.addEventListener('load', function(){
    const button=document.getElementById("btn")
    const colors=["#9287AA","#129E96","#9D86FE"]
    const feature=document.getElementById("feature")
    const name=document.getElementById("name_color")
    let actualcolor="";
    

    const changeColor=()=>{
        let color=colors[Math.floor(Math.random()*colors.length)];
        if (color=="#9287AA"){
            actualcolor="a"
        }
        if (color=="#129E96"){
            actualcolor="b"
        }
        if (color=="#9D86FE"){
            actualcolor="c"
        }
        feature.className=actualcolor;
        name.innerHTML=`Background Color : ${color}`
        console.log(actualcolor)
    }


    button.addEventListener("click",changeColor)
})
