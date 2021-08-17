const cells = Array.from(document.querySelectorAll("td"))
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const moveIndicator = document.querySelector("p span")
let onMove = "×",
  gameOver = false

const getText = indexArray => indexArray.reduce((str, i) => str + cells[i].textContent, "")

const checkWin = () => {
  const winningLine = lines.find(line => ["×××", "○○○"].includes(getText(line)))
  if (!winningLine)
    return false
  winningLine.forEach(index => cells[index].style.background = "#66ff66")
  gameOver = true
  return true
}
