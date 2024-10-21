import { Canvas } from "@react-three/fiber";
import "./App.css";
import {ArcballControls, PointerLockControls, Sky} from "@react-three/drei";
import Cross from "./Components/Cross.jsx";

function App() {
    return (
        <div className="App">
            <Canvas camera={{fov: 90, position: [0, 0, 3],}}>
                <ArcballControls></ArcballControls>
                <Sky sunPosition={[100, 20, 100]}/>
                <ambientLight intensity={1.5} />
                <Cross></Cross>
            </Canvas>
        </div>
    );
}

export default App;