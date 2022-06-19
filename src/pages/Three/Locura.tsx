import React, { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const Locura = (props: any) => {
  const mtlUrl = "/components/hola.mtl";
  const objUrl = "/components/hola.obj";
  const materials = useLoader(MTLLoader, mtlUrl);
  const object = useLoader(OBJLoader, objUrl, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight />
      <primitive object={object} />
    </>
  );
};

export default Locura;
