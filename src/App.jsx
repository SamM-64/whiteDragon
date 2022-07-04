import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Dragon from "./components/Dragon";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.05} />
      <spotLight color="white" angle={0.5} position={[0, 30, 0]} />

      <spotLight color="blue" angle={1} position={[2, 20, 2]} />
      <OrbitControls />
      <Dragon
        scale={0.5}
        position={[-1, -1, 1]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </Canvas>
  );
}
export default App;
