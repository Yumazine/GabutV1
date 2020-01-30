function onload(){
    let movingBgArr = document.getElementsByClassName('moving-bg')

    let movingBgIdx = 0
    movingBgArr[0].className += ' moving-bg-active'
    movingBgArr[0].style = "transform: translate(-7em, -8em)"
    movingBgArr[1].style = "transform: translate(-7em, -12em)"
    movingBgArr[2].style = "transform: translate(-16em, 0)"
    
    let isFirst = true

    setInterval(function(){
        let i = movingBgIdx
        setTimeout(function(){
            if(i % movingBgArr.length == 0 && !isFirst)
                movingBgArr[0].style = "transform: translate(0, 0)"
            else if(i % movingBgArr.length == 1)
                movingBgArr[1].style = "transform: translate(-7em, -12em)"
            else
                movingBgArr[2].style = "transform: translate(-16em, 0)"
            
            isFirst = false
        }, 750)
        movingBgArr[movingBgIdx++ % movingBgArr.length].className = 'moving-bg'
        movingBgArr[movingBgIdx % movingBgArr.length].className += ' moving-bg-active'
        if(movingBgIdx % movingBgArr.length == 0)
            movingBgArr[0].style = "transform: translate(-7em, -8em)"
        else if(movingBgIdx % movingBgArr.length == 1)
            movingBgArr[1].style = "transform: translate(-2em, 0em)"
        else if(movingBgIdx % movingBgArr.length == 2)
            movingBgArr[2].style = "transform: translate(-16em, -15em)"
    }, 8000)
}