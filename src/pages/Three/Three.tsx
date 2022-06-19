import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import { Container } from "react-bootstrap";

// //Loader de STL
// import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
// //Orbitador
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BoxMesh from "./components/BoxMesh";
import Locura from "./Locura";

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
      <div style={{ height: "100vh" }}>
        <Canvas>
          <Suspense fallback={null}>
            <Locura />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </Container>
  );
};

export default Three;
