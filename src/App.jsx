import { Canvas } from "@react-three/fiber";
import "./App.css";
import {OrbitControls, Sky} from "@react-three/drei";
import Cross from "./Components/Cross.jsx";
import Board from "./Components/Board.jsx";
import Circle from "./Components/Circle.jsx";
import Cell from "./Components/Cell.jsx";

function App() {
    return (
			<div className='App'>
				<Canvas camera={{ fov: 90, position: [0, 1, 1] }}>
					<OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
					<directionalLight position={[10, 10, 10]} intensity={1} />
					<directionalLight position={[-10, 10, -10]} intensity={1} />
					<Board></Board>
				</Canvas>
			</div>
		)
}

export default App;