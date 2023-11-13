import { fadeOnBeforeCompile } from "../src/fadematerial";
import { useGLTF } from "@react-three/drei";
import React from "react";


const Cloud=({ opacity, ...props })=> {
  const { nodes, materials } = useGLTF("./models/cloud/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial 
        color="white"
          envMapIntensity={5555}
          transparent
          opacity={opacity}
          onBeforeCompile={fadeOnBeforeCompile}
          //  color={"#0000"} 
           
           />
        
       
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/model.glb");
export default Cloud;