import { OrbitControls } from '@react-three/drei'
import Board from './Board.jsx'
import { Canvas } from '@react-three/fiber'
import React, { useState, useRef } from 'react'

function Game() {
	let gameMode = 2
	const [board, setBoard] = useState(Array(9).fill(null))
	const [isNextX, setIsNextX] = useState(true)
	const [winner, setWinner] = useState(null)
	const score = useRef({ X: 0, Y: 0 })

	function stepNext(index) {
		let newCells = board.slice()
		if (gameMode == 1) {
			isNextX ? (newCells[index] = 1) : (newCells[index] = 2)
			setIsNextX(!isNextX)
			setBoard(newCells)
			setWinner(CheckWinner(newCells))
		} else if (gameMode == 2) {
			newCells[index] = 1
			if (!(newCells.findIndex(el => el == null) == -1 || winner != null)) {
				do {
					index = Math.floor(Math.random() * 9)
				} while (newCells[index] != null)
				newCells[index] = 2
			}
			setBoard(newCells)
			setWinner(CheckWinner(newCells))
		} 
	}
	function CheckWinner(newCells) {
		const winnerCombination = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[6, 4, 2],
		]
		for (let combination of winnerCombination) {
			let [a, b, c] = combination
			if (
				newCells[a] &&
				newCells[a] === newCells[b] &&
				newCells[b] === newCells[c]
			) {
				setWinner(true)
				if (newCells[a] == 1) {
					score.current = { X: score.current.X + 1, Y: score.current.Y }
				} else {
					score.current = { X: score.current.X, Y: score.current.Y + 1 }
				}
				return combination
			}
		}
		return null
	}

	function isEndGame() {
		if (board.findIndex(el => el == null) == -1 || winner != null) {
			return true
		}
		return false
	}

	return [
		<div className='GameInfo'>
			<div className='CurrentStep'>
				{!isEndGame() && `Сейчас ходит ${isNextX ? 'X' : '0'}`}
			</div>
			<div className='GameResult'>
				{winner != null && `Победил ${isNextX ? '0' : 'X'}`}
				{board.findIndex(el => el == null) == -1 && winner == null && `Ничья`}
			</div>
			<div className='Score'>{`Счёт ${score.current.X}:${score.current.Y}`}</div>
		</div>,
		<div className='Canvas'>
			<Canvas camera={{ fov: 90, position: [0, 1.3, 1.3] }}>
				<OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
				<directionalLight position={[10, 10, 10]} intensity={1} />
				<directionalLight position={[-10, 10, -10]} intensity={1} />
				<Board
					board={board}
					isNextX={isNextX}
					winner={winner}
					stepNext={stepNext}
				></Board>
			</Canvas>
			<button
				className='RestartBtn'
				onClick={() => {
					setBoard(Array(9).fill(null))
					setIsNextX(true)
					setWinner(null)
				}}
			>
				Restart
			</button>
		</div>,
	]
}

export default Game
