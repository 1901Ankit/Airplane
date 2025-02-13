import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const HELIX_SPEED = 600;

const Airplane=(props) =>{
  const { nodes, materials } = useGLTF("./models/airplane/model.glb");

  const helix = useRef();

  useFrame((_state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  });

  return (
    <group {...props} dispose={null}>
      
      <mesh 
      geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
      >
        <meshStandardMaterial color={"#ADD8E6"} />
      </mesh>
      <mesh
        ref={helix}
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      >
        <meshStandardMaterial color={"#ADD8E6"} />
      </mesh>
    </group>
  );
}

// useGLTF.preload("./models/airplane/model.glb");
export default Airplane;