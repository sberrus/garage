import React, { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Locura = (props: any) => {
  const obj = useLoader(OBJLoader, "/components/Work2.obj");
  const matcap = useLoader(
    TextureLoader,
    "/components/PavingStones092_1K_Normal.jpg"
  );

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight />
      <primitive object={obj} />
      <meshMatcapMaterial matcap={matcap}  />
    </>
  );
};

export default Locura;
