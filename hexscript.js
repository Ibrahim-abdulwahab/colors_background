window.addEventListener('load', function(){
    const button=document.getElementById("btn")
    const hexes=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    const feature=document.getElementById("feature")
    const name=document.getElementById("name_color")

    const changeColor=()=>{
        let color= "#"
        for (let i=0 ; i<6 ; i++){
            let hex=hexes[Math.floor(Math.random()*hexes.length)];
            color= color + hex;
        }
        console.log(color);
        feature.style.backgroundColor= color;
        name.innerHTML=`Background Color : ${color}`
    }


    button.addEventListener("click",changeColor)
})
