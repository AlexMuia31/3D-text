import {
  Billboard,
  ContactShadows,
  Text,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { Character } from "./Character";

import * as THREE from "three";

export const Experience = () => {
  const woodenSign = useGLTF("models/Wooden Sign.glb");

  return (
    <>
      <Text3D
        font="fonts/Inter_Bold.json"
        rotation-y={THREE.MathUtils.degToRad(30)}
        size={4}
        position={[-8, 0, -5]}
        bevelEnabled
        bevelThickness={0.5}
        bevelSize={0.1}
      >
        Alex
        <meshStandardMaterial color={"#a1bb6f"} />
      </Text3D>
      <group position-x={-1.5} rotation-y={THREE.MathUtils.degToRad(15)}>
        <primitive object={woodenSign.scene} />
        <Text
          fontSize={0.3}
          position={[0, 1.2, 0.01]}
          maxWidth={1}
          textAlign="center"
          font="fonts/PlaywriteNZBasic-VariableFont_wght.ttf"
        >
          Alex Muia <meshStandardMaterial color="#000" />
        </Text>
      </group>
      <group position={[1.5, 0, 0]} rotation-y={-Math.PI / 4}>
        <Billboard position-y={3}>
          <Text fontSize={0.2} anchorY={"bottom"}>
            Link
            <meshStandardMaterial color="#000" />
          </Text>
          <Text fontSize={0.2} anchorY={"top"}>
            Alex's Personal Hero
            <meshStandardMaterial color="#000" />
          </Text>
        </Billboard>
        <Character />
      </group>
      <ContactShadows opacity={0.42} scale={42} far={42} />
    </>
  );
};
