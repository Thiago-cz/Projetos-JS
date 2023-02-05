const btns = document.querySelectorAll(".btn")
const conteiner = document.querySelector(".conteiner")
const msgEndGame = document.querySelector(".endGame")
const msgWinEndGame = document.querySelector("#msgEndGame")
const btnRestart = document.querySelector("#btnRestart")


let turn = true

const winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

const startGame = () => {
    for (const btn of btns) {
        turn = true
        btn.classList.remove("o")
        btn.classList.remove("x")
        conteiner.classList.remove("x")
        conteiner.classList.remove("o")
        btn.removeEventListener("click", handleClick)
        btn.addEventListener("click", handleClick, { once: true })
    }
    conteiner.classList.add("x")
    msgEndGame.style.display = "none"

}

const endGame = (isDraw) => {
    if(isDraw) {
        msgWinEndGame.innerText = "Empate!!!"
    }else {
        msgWinEndGame.innerText = turn? "X ganhou!!!" : "O ganhou!!!"
    }
    msgEndGame.style.display = "flex"
}

const checkForWin = (player) => {
    return winningCombination.some(combination => {
        return combination.every((index) => {
            return btns[index].classList.contains(player)
        })
    })
}

const checkForDraw = () => {
    return [...btns].every(btn =>{
        return btn.classList.contains("x") || btn.classList.contains("o")
    })

}

const placeMark = (btn, classToAdd) => {
    btn.classList.add(classToAdd)
}
const suapTurn = () => {
    turn = !turn
    conteiner.classList.remove("x")
    conteiner.classList.remove("o")
    turn ? conteiner.classList.add("x") : conteiner.classList.add("o")
}

const handleClick = (e) => {
    const btn = e.target
    const classToAdd = turn ? "x" : "o"
    placeMark(btn, classToAdd)
    const isWin = checkForWin(classToAdd)
    const isDraw = checkForDraw()

    if(isWin) {
        endGame(false)
    }else if(isDraw) {
        endGame(true)
    }else {
        suapTurn()
    }
}
startGame()
btnRestart.addEventListener("click", startGame)

//parei no 59