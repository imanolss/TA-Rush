// Get a reference to the canvas DOM element
// Get the canvas drawing context
const canvas = document.querySelector('#canvas')
const startBtn = document.querySelector('.btn-start')
const portada = document.querySelector('#portada')
const background = document.querySelector('#game-screen')
const scoreIndex = document.querySelector('.score')
const scoreIndex2 = document.querySelector('.score2')
const scoreIndex3 = document.querySelector('.score3')
const music1 = document.querySelector('#musica1')
const music2 = document.querySelector('#musica2')
const ctx = canvas.getContext('2d')
let frames = 0
let interval
let score = 0
let score2 = 0
let score3 = 0
let dudas = []

//Lo que se dibuja al inicio
window.onload = function() {
  portada.style.display = ''
  background.style.display = 'none'
}

//portada
class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = './images/background.jpg'
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
  }
}

//Jugadores
class taOne {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 45
    this.height = 75
    this.img = new Image()
    this.img.src = './images/TaMentest.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveUp() {
    this.y -= 20
  }
  moveDown() {
    this.y += 20
  }
  moveLeft() {
    this.x += 20
  }
  moveRight() {
    this.x -= 20
  }
  touchDoubts(dudas) {
    return (
      this.x < dudas.x + dudas.width &&
      this.x + this.width > dudas.x &&
      this.y < dudas.y + dudas.height &&
      this.y + this.height > dudas.y
    )
  }
}

class taTwo {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 40
    this.height = 80
    this.img = new Image()
    this.img.src = './images/TaWomantest.png'
  }
  draw() {
    this.y
    this.x
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveUp() {
    this.y -= 20
  }
  moveDown() {
    this.y += 20
  }
  moveLeft() {
    this.x += 20
  }
  moveRight() {
    this.x -= 20
  }
  touchDoubts(dudas) {
    return (
      this.x < dudas.x + dudas.width &&
      this.x + this.width > dudas.x &&
      this.y < dudas.y + dudas.height &&
      this.y + this.height > dudas.y
    )
  }
}

class taThree {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 40
    this.height = 80
    this.img = new Image()
    this.img.src = './images/TaWomantest.png'
  }
  draw() {
    this.y
    this.x
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveUp() {
    this.y -= 20
  }
  moveDown() {
    this.y += 20
  }
  moveLeft() {
    this.x += 20
  }
  moveRight() {
    this.x -= 20
  }
  touchDoubts(dudas) {
    return (
      this.x < dudas.x + dudas.width &&
      this.x + this.width > dudas.x &&
      this.y < dudas.y + dudas.height &&
      this.y + this.height > dudas.y
    )
  }
}

class Dudas {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.img = new Image()
    this.img.src = './images/dudas.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

const board = new Board()
const taone = new taOne(10, 475)
const tatwo = new taTwo(10, 390)
const tathree = new taThree(10, 300)
/*
function generateDoubts() {
  if (frames % 150 === 0) {
    let x = canvas.width
    let y = canvas.height
    let randomX = Math.floor(Math.random() * x + 1)
    let randomY = Math.floor(Math.random() * y + 1)

    dudas.push(new Dudas(randomX, randomY))
  }
}
*/

function generateDoubts() {
  if (frames % 150 === 0) {
    let positionX = ''
    let positionY = ''
    position = Math.round(Math.random() * 19 + 1)

    switch (position) {
      case 1:
        positionX = 800
        positionY = 30
        break
      case 2:
        positionX = 800
        positionY = 120
        break
      case 3:
        positionX = 800
        positionY = 214
        break
      case 4:
        positionX = 800
        positionY = 390
        break
      case 5:
        positionX = 800
        positionY = 480
        break
      case 6:
        positionX = 600
        positionY = 30
        break
      case 7:
        positionX = 600
        positionY = 120
        break
      case 8:
        positionX = 600
        positionY = 214
        break
      case 9:
        positionX = 600
        positionY = 390
        break
      case 10:
        positionX = 600
        positionY = 480
        break
      case 11:
        positionX = 400
        positionY = 30
        break
      case 12:
        positionX = 400
        positionY = 120
        break
      case 13:
        positionX = 400
        positionY = 214
        break
      case 14:
        positionX = 400
        positionY = 390
        break
      case 15:
        positionX = 400
        positionY = 480
        break
      case 16:
        positionX = 190
        positionY = 30
        break
      case 17:
        positionX = 190
        positionY = 120
        break
      case 18:
        positionX = 190
        positionY = 214
        break
      case 19:
        positionX = 190
        positionY = 390
        break
      case 20:
        positionX = 190
        positionY = 480
        break
      case 20:
    }
    dudas.push(new Dudas(positionX, positionY))
  }
}
function drawDudas() {
  dudas.forEach(duda => {
    duda.alive = true
    duda.draw()
  })
}

function getDuda() {
  dudas.forEach((duda, index) => {
    if (taone.touchDoubts(duda)) {
      score++
      scoreIndex.innerHTML = `Ironbeers: ${score}`
      dudas.splice(index, 1)
    } else if (tatwo.touchDoubts(duda)) {
      score2++
      scoreIndex2.innerHTML = `Ironbeers: ${score2}`
      dudas.splice(index, 1)
    } else if (tathree.touchDoubts(duda)) {
      score3++
      scoreIndex3.innerHTML = `Ironbeers: ${score3}`
      dudas.splice(index, 1)
    }
  })
}
function ironbeers() {
  if (score >= 10) {
    ctx.fillStyle = 'rgb(36, 63, 114)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    ctx.font = '40px Gill Sans'
    ctx.fillText(`Player 1 Win!! You got ${score} Ironbeers`, 300, 250)
    ctx.font = '30px Gill Sans'
    ctx.fillStyle = 'white'
    ctx.fillText('Press R to restart the game', 300, 300)
    music1.pause()
    music2.play()
  } else if (score2 >= 10) {
    ctx.fillStyle = 'rgb(36, 63, 114)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    ctx.font = '40px Gill Sans'
    ctx.fillText(`Player 2 Win!! You got ${score2} Ironbeers`, 300, 250)
    ctx.font = '30px Gill Sans'
    ctx.fillStyle = 'white'
    ctx.fillText('Press R to restart the game', 300, 300)
    music1.pause()
    music2.play()
  } else if (score3 >= 10) {
    ctx.fillStyle = 'rgb(36, 63, 114)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    ctx.font = '40px Gill Sans'
    ctx.fillText(`Player 3 Win!! You got ${score3} Ironbeers`, 300, 250)
    ctx.font = '30px Gill Sans'
    ctx.fillStyle = 'white'
    ctx.fillText('Press R to restart the game', 300, 300)
    music1.pause()
    music2.play()
  }
}
/*function getIronbeers() {
  ctx.font = '40px Gill Sans'
  ctx.fillText(`You got ${score} Ironbeers`, 300, 200)
  ctx.font = '30px Gill Sans'
  ctx.fillText('Press R to restart the game', 300, 250)
}*/
/*
function drawScore() {
  ctx.fillText = 'blue'
  ctx.font = '250px Gill Sans'
  ctx.fillText = (`Ironbeers: ${score}`, 500, 50)
}
*/

function bgmusic() {
  music1.play()
}
function start() {
  portada.style.display = 'none'
  background.style.display = ''
  interval = setInterval(update, 1000 / 60)
  bgmusic()
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  board.draw()
  taone.draw()
  tathree.draw()
  tatwo.draw()
  generateDoubts()
  drawDudas()
  getDuda()

  // drawScore()
  ironbeers()
}
function restart() {
  if (true) {
    location.reload()
  }
}
document.onkeydown = event => {
  switch (event.keyCode) {
    case 87:
      taone.moveUp()
      break
    case 68:
      taone.moveLeft()
      break
    case 83:
      taone.moveDown()
      break
    case 65:
      taone.moveRight()
      break
    case 85:
      tatwo.moveUp()
      break
    case 75:
      tatwo.moveLeft()
      break
    case 74:
      tatwo.moveDown()
      break
    case 72:
      tatwo.moveRight()
      break
    case 38:
      tathree.moveUp()
      break
    case 39:
      tathree.moveLeft()
      break
    case 40:
      tathree.moveDown()
      break
    case 37:
      tathree.moveRight()
      break
    case 82:
      restart()
      break
  }
}
startBtn.addEventListener('click', start)

/*
startBtn.onclick = function() {
  portada.style.display = none
  background.style.display = ''
}
*/
