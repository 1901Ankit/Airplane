import { Canvas } from "@react-three/fiber";
import Experience  from "./experience";
import { ScrollControls } from "@react-three/drei";


const App=()=> {
  return (
    <>
      <Canvas>
       
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.3}>
        <Experience />
        </ScrollControls>
     
      </Canvas>
    </>
  );
}

export default App;