import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Container } from "react-bootstrap";
import BoxMesh from "./components/BoxMesh";
import Locura from "./Locura";
import LocuraGLTF from "./LocuraGLTF";

const Three = () => {
  return (
    <Container>
      <h1>Usando Libreria Fiber-Three</h1>
      <p>
        La libreria <b>Fiber-Three</b> es una libreria múy útil que nos permite
        utilizar de forma más eficiente modelos 3d en react.
      </p>
      <h2>Crenado objetos 3d manualmente</h2>
      {/* El componente canvas es el que nos permite inicializar la "escene" y la "camera" de threjs de manera sencilla*/}
      <Canvas>
        {/* 
					Dentro de cada componente tenemos estas etiquetas especiales de Fiber-three que como puede verse empiezan en minusculas
					ya que de cierto modo podriamos verlos como etiquetas JSX especiales de Three-Fiber pudiendo también pasarle a estas
					diferentes props y atributos especiales.
				*/}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Ir al componente para ver más detalles del mismo */}
        <BoxMesh position={[-1.2, 0, 0]} />
        <BoxMesh position={[1.2, 0, 0]} />
      </Canvas>
      <h2>Utilizando modelos 3d de otros formatos (GLTF, TSL, etc...)</h2>
      {/* Importando modelo OBJ */}

      <div style={{ height: "100vh", width: "100%" }}>
        <Canvas camera={{ zoom: 1, position: [7.5, 3, 8] }}>
          <pointLight position={[35, 0, 35]} intensity={0.15} />
          <Suspense fallback={null}>
            <Locura />
            {/* <LocuraGLTF /> */}
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </Container>
  );
};

export default Three;
