window.addEventListener('load', function(){
    const button=document.getElementById("btn")
    const colors=["red","green","blue"]
    

    const changeColor=()=>{
        let color=colors[Math.floor(Math.random()*colors.length)]
        console.log(color)
    }


    button.addEventListener("click",changeColor)



})