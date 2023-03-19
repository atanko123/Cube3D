let rotateX = 0, rotateY = 0
const cube = document.getElementById('cube')

function handleRotationBySide(sideId) {
    switch (sideId) {
        case 'top':
            rotateX = -90
            rotateY = 0
        break
        case 'bottom':
            rotateX = 90
            rotateY = 0
        break
        case 'right':
            rotateX = 0
            rotateY = -90
        break
        case 'left':
            rotateX = 0
            rotateY = 90
        break
        case 'back':
            rotateX = 0
            rotateY = 180
        break
        case 'front':
            rotateX = 0
            rotateY = 0
        break
    }
    handleRotation()
}

function handleRotationByDirection(direction) {
    switch (direction) {
        case 'up':
            rotateX = (rotateX + 90)
        break
        case 'down':
            rotateX = (rotateX - 90)
        break
        case 'left':
            rotateY = (rotateY - 90)
        break
        case 'right':
            rotateY = (rotateY + 90)
        break
    }
    handleRotation()
}

function handleRotation() {
    cube.style.transform = `translateZ(-150px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}