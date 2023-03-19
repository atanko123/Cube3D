
function handleClick(id) {
    const cube = document.getElementById('cube')

    let rotate
    switch (id) {
        case 'top':
            rotate = 'rotateX(-90deg)'
        break
        case 'bottom':
            rotate = 'rotateX(90deg)'
        break
        case 'right':
            rotate = 'rotateY(-90deg)'
        break
        case 'left':
            rotate = 'rotateY(90deg)'
        break
        case 'back':
            rotate = 'rotateY(180deg)'
        break
        case 'front':
            rotate = 'rotateY(0deg)'
        break
    }
    cube.style.transform = `translateZ(-150px) ${rotate}`
}