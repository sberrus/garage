import { useEffect } from "react";
import { Container } from "react-bootstrap";
import * as THREE from "three";

//Loader de STL
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
//Orbitador
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Three = () => {
	useEffect(() => {
		//Aquí almacenaremos al modelo ya cargado para que pueda ser usado en la escena
		let object: any;

		const importModel = () => {
			//Configuración básica de Threejs, de la camara y la escena.
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10000);
			//Alejamos la cámara para poder visualizar correctamente el modelo
			camera.position.z = 10;

			const scene = new THREE.Scene();

			scene.background = new THREE.Color("#000");

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			//Incorporamos el modelo a la escena
			scene.add(object);
			//Renderizamos la escena y la camara
			renderer.render(scene, camera);
		};

		//Instanciamos el STLLoader para poder usar el modelo
		let loader = new STLLoader();

		/**
		 * Con el loader lo cargamos para usarlo.
		 * El loader tiene un método load que nos permite indicar donde esta el modelo y le enviamos un callback que
		 * tiene el modelo como argumento.
		 */
		loader.load("../assets/models/sberrus.stl", (model) => {
			//Asignamos un material al modelo
			object = new THREE.Mesh(model, new THREE.MeshLambertMaterial({ color: 0x00ff00 }));

			// Los STL Suelen tener unas dimensiones grandes y dependiendo del desarrollador unas posiciones dispersas.
			// Para evitar problemas reseteamos la escala y la posición del modelo para centrarlo en la pantalla.
			object.scale.set(0.1, 0.2, 0.2);
			object.position.set(0, 0, 0);

			//Al finalizar de cargar el modelo, inicializamos el canva para que este lo muestre.
			importModel();
		});

		return () => {};
	}, []);

	return (
		<Container>
			<h1>Three js tls import</h1>
		</Container>
	);
};

export default Three;
