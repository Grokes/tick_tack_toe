import { Canvas } from "@react-three/fiber";
import "./App.css";
import {ArcballControls, PointerLockControls, Sky} from "@react-three/drei";
import { Cross } from "./Components/Cross.jsx";
import { Board } from "./Components/Board.jsx";
import { Circle } from "./Components/Circle.jsx";

function App() {
    return (
			<div className='App'>
				<Canvas camera={{ fov: 90, position: [0, 0, 3] }}>
					<ArcballControls></ArcballControls>
					<Sky sunPosition={[100, 20, 100]} />
					<directionalLight position={[1, 1, 1]} intensity={0.8} />
					<ambientLight intensity={0.5} />
                    <Board></Board>
                    <Circle></Circle>
                    <Cross></Cross>
				</Canvas>
			</div>
		)
}

export default App;