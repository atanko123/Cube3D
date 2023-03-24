let rotateX = 0, rotateY = 0, rotateZ = 0
let currentSideId = 'front'
const cube = document.getElementById('cube')

function handleRotationBySide(sideId) {
    switch (sideId) {
        case 'top':
            rotateX = -90
            rotateY = 0
            rotateZ = 0
        break
        case 'bottom':
            rotateX = 90
            rotateY = 0
            rotateZ = 0
        break
        case 'right':
            rotateX = 0
            rotateY = -90
            rotateZ = 0
        break
        case 'left':
            rotateX = 0
            rotateY = 90
            rotateZ = 0
        break
        case 'back':
            rotateX = 0
            rotateY = 180
            rotateZ = 0
        break
        case 'front':
            rotateX = 0
            rotateY = 0
            rotateZ = 0
        break
    }
    currentSideId = sideId
    handleRotation()
}

function handleRotationByDirection(direction) {
    const rotateTo = rotationByDirection[direction][currentSideId]
    handleRotationBySide(rotateTo)
}

function handleRotation() {
    cube.style.transform = `translateZ(-150px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
}

const rotationByDirection = {
    up: {
        top: 'back',
        left: 'top',
        front: 'top',
        right: 'top',
        bottom: 'front',
        back: 'bottom'
    },
    down: {
        top: 'front',
        left: 'bottom',
        front: 'bottom',
        right: 'bottom',
        bottom: 'back',
        back: 'top'
    },
    left: {
        top: 'right',
        left: 'back',
        front: 'left',
        right: 'front',
        bottom: 'left',
        back: 'right'
    }, 
    right: {
        top: 'right',
        left: 'front',
        front: 'right',
        right: 'back',
        bottom: 'right',
        back: 'left'
    }
}