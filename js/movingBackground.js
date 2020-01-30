function onload(){
    let movingBgArr = document.getElementsByClassName('moving-bg')

    let movingBgIdx = 0
    movingBgArr[0].className += ' moving-bg-active'
    movingBgArr[0].style = "transform: translate(-10vw, -14vh)"
    movingBgArr[1].style = "transform: translate(-7vw, -26vh)"
    movingBgArr[2].style = "transform: translate(-21vw, 0)"
    
    let isFirst = true

    setInterval(function(){
        let i = movingBgIdx
        setTimeout(function(){
            if(i == 0)
                movingBgArr[0].style = "transform: translate(0, 0)"
            else if(i == 1)
                movingBgArr[1].style = "transform: translate(-7vw, -26vh)"
            else
                movingBgArr[2].style = "transform: translate(-21vw, 0)"
        }, 750)
        movingBgArr[movingBgIdx++].className = 'moving-bg'
        movingBgIdx %= movingBgArr.length
        movingBgArr[movingBgIdx].className += ' moving-bg-active'
        if(movingBgIdx == 0)
            movingBgArr[0].style = "transform: translate(-10vw, -14vh)"
        else if(movingBgIdx == 1)
            movingBgArr[1].style = "transform: translate(-2vw, 0)"
        else if(movingBgIdx == 2)
            movingBgArr[2].style = "transform: translate(-21vw, -40vh)"
    }, 8000)
}