function onload(){
    let movingBgArr = document.getElementsByClassName('moving-bg')

    let movingBgIdx = 0
    movingBgArr[0].className += ' moving-bg-active'
    movingBgArr[0].style = "transform: translate(-" + (movingBgArr[0].width - window.innerWidth) + "px, -" + (movingBgArr[0].height - window.innerHeight) + "px)"
    movingBgArr[1].style = "transform: translate(-" + (movingBgArr[1].width - window.innerWidth) + "px, -" + (movingBgArr[1].height - window.innerHeight) + "px)"
    movingBgArr[2].style = "transform: translate(-" + (movingBgArr[2].width - window.innerWidth) + "px, 0)"
    
    console.log(movingBgArr[0].width, window.innerWidth)

    setInterval(function(){
        let i = movingBgIdx
        setTimeout(function(){
            if(i == 0)
                movingBgArr[0].style = "transform: translate(0, 0)"
            else if(i == 1)
                movingBgArr[1].style = "transform: translate(-" + (movingBgArr[1].width - window.innerWidth) + "px, -" + (movingBgArr[1].height - window.innerHeight) + "px)"
            else
                movingBgArr[2].style = "transform: translate(-" + (movingBgArr[2].width - window.innerWidth) + "px, 0)"
        }, 750)
        movingBgArr[movingBgIdx++].className = 'moving-bg'
        movingBgIdx %= movingBgArr.length
        movingBgArr[movingBgIdx].className += ' moving-bg-active'
        if(movingBgIdx == 0)
            movingBgArr[0].style = "transform: translate(-" + (movingBgArr[0].width - window.innerWidth) + "px, -" + (movingBgArr[0].height - window.innerHeight) + "px)"
        else if(movingBgIdx == 1)
            movingBgArr[1].style = "transform: translate(0px, 0px)"
        else if(movingBgIdx == 2)
            movingBgArr[2].style = "transform: translate(-" + (movingBgArr[2].width - window.innerWidth) + "px, -" + (movingBgArr[2].height - window.innerHeight - 1) + "px)"
    }, 8000)
}