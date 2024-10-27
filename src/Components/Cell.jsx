import React, { useState } from 'react'
import Cross from './Cross'
import Circle from './Circle'

function Cell({ index, value, stepNext, winner }) {
	let x = 0
	let z = 0
	let win = false
	if (winner != null && winner.includes(index)){
		win = true
	}
	const COORD_CONST = 0.49
	switch (index) {
		case 0:
			z = -COORD_CONST
			x = -COORD_CONST
			break
		case 1:
			z = -COORD_CONST
			x = 0
			break
		case 2:
			z = -COORD_CONST
			x = COORD_CONST
			break
		case 3:
			z = 0
			x = -COORD_CONST
			break
		case 4:
			z = 0
			x = 0
			break
		case 5:
			z = 0
			x = COORD_CONST
			break
		case 6:
			z = COORD_CONST
			x = -COORD_CONST
			break
		case 7:
			z = COORD_CONST
			x = 0
			break
		case 8:
			z = COORD_CONST
			x = COORD_CONST
			break
	}
	function MouseEnterHandler(event) {
		if (value === null && winner == null) {
			setOpacity(0.7)
		}
	}
	function MouseLeaveHandler(event) {
		setOpacity(0)
	}
	function MouseClickHandler(event) {
		setOpacity(0)
		if (value == null && winner == null) {
			stepNext(index)
			if (winner != null){

			}
		}
	}
	const [opacity, setOpacity] = useState(0)
	return (
		<>
			<mesh
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.4}
				position={[x, 0.034, z]}
				onPointerEnter={() => MouseEnterHandler()}
				onPointerLeave={() => MouseLeaveHandler()}
				onClick={() => MouseClickHandler()}
			>
				<planeGeometry></planeGeometry>
				<meshStandardMaterial
					color='#00FFFF'
					opacity={opacity}
					transparent={true}
				/>
			</mesh>
			{value == 1 && <Cross x={x} z={z} win={win}></Cross>}
			{value == 2 && <Circle x={x} z={z} win={win}></Circle>}
		</>
	)
}

export default Cell
