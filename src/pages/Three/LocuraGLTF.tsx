/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function LocuraGLTF({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/components/payload.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Marco"
          position={[12.17, 0.43, -9.41]}
          rotation={[0, 0, -0.01]}
          scale={[2.35, 0.66, 1.11]}
        >
          <mesh
            name="Cube013_1"
            geometry={nodes.Cube013_1.geometry}
            material={materials["041825"]}
            position={[-5.06, -2.23, 4.12]}
            rotation={[0.07, 0, -0.01]}
            scale={[-3.06, 0.69, 3.47]}
          />
          <mesh
            name="Cube014_1"
            geometry={nodes.Cube014_1.geometry}
            material={materials["Material original.001"]}
            position={[-5.07, -1.74, 4.17]}
            rotation={[0, 0, 0.01]}
            scale={[-3.45, 0.78, 3.92]}
          />
          <mesh
            name="Cube015_1"
            geometry={nodes.Cube015_1.geometry}
            material={materials["Material.006"]}
            position={[-5.07, -1.74, 4.17]}
            rotation={[0.01, 0, -0.05]}
            scale={[-3.58, 0.81, 4.06]}
          />
        </group>
        <group name="Empty001" position={[2.05, 3.92, 1.5]} scale={0.62} />
        <group
          name="Empty"
          position={[1.96, 4.92, 0.07]}
          rotation={[0, 0, -0.01]}
          scale={0.62}
        />
        <group
          name="Empty002"
          position={[4.49, 5.39, -0.25]}
          rotation={[0, 0, -0.1]}
          scale={0.41}
        />
        <group
          name="Empty003"
          position={[-0.81, 4.96, 0.35]}
          rotation={[0, 0, 0.04]}
          scale={0.41}
        />
        <group
          name="Empty004"
          position={[1.42, 5.08, -2.33]}
          rotation={[-0.12, 0, -0.01]}
          scale={0.33}
        />
        <group
          name="Empty005"
          position={[2.75, 5.48, 2.72]}
          rotation={[0, 0, -0.01]}
          scale={0.41}
        />
        <mesh
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={materials["Material.011"]}
          position={[-11.08, 2.6, 13.22]}
          rotation={[0, 0, -0.01]}
          scale={0.79}
        />
        <mesh
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={materials["Material.012"]}
          position={[-11.32, 2.6, 11.17]}
          rotation={[0, 0, -0.01]}
          scale={0.79}
        />
        <mesh
          name="here"
          geometry={nodes.here.geometry}
          material={materials.here}
          position={[-5.14, -3.02, 4.23]}
          rotation={[-3.1, -0.01, 0.01]}
          scale={6.72}
        />
        <mesh
          name="Text001"
          geometry={nodes.Text001.geometry}
          material={materials["FEA248.002"]}
          position={[1.56, -2.23, -7.55]}
          rotation={[3.07, -0.01, 0]}
          scale={0.07}
        />
        <mesh
          name="Text002"
          geometry={nodes.Text002.geometry}
          material={materials["FEA248.003"]}
          position={[1.55, -2.26, -7.56]}
          rotation={[3.07, -0.01, 0]}
          scale={0.07}
        />
        <mesh
          name="Text003"
          geometry={nodes.Text003.geometry}
          material={materials["FEA248.004"]}
          position={[1.91, -2.01, -7.59]}
          rotation={[3.07, -0.01, 0.02]}
          scale={0.06}
        />
        <mesh
          name="Text004"
          geometry={nodes.Text004.geometry}
          material={materials["Material.002"]}
          position={[-6.98, -2.34, -0.84]}
          rotation={[3.13, 0, 0.01]}
          scale={0.19}
        />
        <mesh
          name="Text005"
          geometry={nodes.Text005.geometry}
          material={materials["Material.002"]}
          position={[-1.45, -1.43, -3.49]}
          rotation={[-2.99, 0.02, 0.06]}
          scale={0.54}
        />
        <mesh
          name="Text006"
          geometry={nodes.Text006.geometry}
          material={materials["Material.002"]}
          position={[-4.84, -1.94, -3.97]}
          rotation={[-2.99, 0.01, 0.02]}
          scale={0.54}
        />
        <mesh
          name="Cube013"
          geometry={nodes.Cube013.geometry}
          material={materials["041825"]}
          position={[-5.06, -2.23, 4.12]}
          rotation={[0.07, 0, -0.01]}
          scale={[-3.06, 0.69, 3.47]}
        />
        <mesh
          name="Cube014"
          geometry={nodes.Cube014.geometry}
          material={materials["Material original.001"]}
          position={[-5.07, -1.74, 4.17]}
          rotation={[0, 0, 0.01]}
          scale={[-3.45, 0.78, 3.92]}
        />
        <mesh
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={materials["Material.006"]}
          position={[-5.07, -1.74, 4.17]}
          rotation={[0.01, 0, -0.05]}
          scale={[-3.58, 0.81, 4.06]}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials.EE10E7}
          position={[2.71, -2.74, 1.36]}
          rotation={[0, 0, -0.01]}
          scale={0.45}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials.FEA248}
          position={[3.85, -2.79, 1.33]}
          rotation={[0, 0, -0.01]}
          scale={0.46}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials["041825"]}
          position={[5.25, -2.91, 1.21]}
          rotation={[0, 0, -0.01]}
          scale={0.48}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials["Material.001"]}
          position={[6.82, -3.08, 1.21]}
          rotation={[0, 0, -0.01]}
          scale={0.49}
        />
        <mesh
          name="Cube031"
          geometry={nodes.Cube031.geometry}
          material={materials["FEA248.001"]}
          position={[1.45, -2.3, 1.43]}
          rotation={[0, 0, -0.01]}
          scale={0.44}
        />
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials["0A8F19"]}
          position={[5.51, -2.73, 3.09]}
          rotation={[0, 0, -0.01]}
          scale={0.58}
        />
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials["Material.002"]}
          position={[3.94, -2.08, 3.13]}
          rotation={[0, 0, -0.01]}
          scale={0.51}
        />
        <mesh
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={materials["Material.006"]}
          position={[2.35, -2.52, 3.09]}
          rotation={[0, 0, -0.01]}
          scale={0.55}
        />
        <mesh
          name="Cube012"
          geometry={nodes.Cube012.geometry}
          material={materials["Material.007"]}
          position={[0.63, -1.95, 3.06]}
          rotation={[0, 0, -0.01]}
          scale={0.55}
        />
        <mesh
          name="Cube030"
          geometry={nodes.Cube030.geometry}
          material={materials["0F581A"]}
          position={[7.04, -2.18, 3.07]}
          rotation={[0, 0, -0.01]}
          scale={0.57}
        />
        <mesh
          name="suave"
          geometry={nodes.suave.geometry}
          material={materials.suave}
          position={[3.73, -1.59, 6.71]}
          rotation={[3.13, 0.07, 0.09]}
          scale={2.12}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials["default"]}
          position={[-9.5, 7.03, 9.43]}
          rotation={[0, 0, -0.01]}
          scale={[0.4, 0.8, 0.4]}
        />
        <mesh
          name="Cube040"
          geometry={nodes.Cube040.geometry}
          material={materials["041825"]}
          position={[-12.8, 8.74, 10.06]}
          rotation={[-0.08, 0.54, -0.23]}
          scale={[0.12, 0.48, 0.48]}
        />
        <mesh
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={materials["Material.007"]}
          position={[-9.71, 7.91, 14.11]}
          rotation={[3.02, 1.48, -3.02]}
          scale={0.14}
        >
          <mesh
            name="Cube019_1"
            geometry={nodes.Cube019_1.geometry}
            material={materials["0A8F19"]}
            scale={1.05}
          />
        </mesh>
        <mesh
          name="Cube021"
          geometry={nodes.Cube021.geometry}
          material={materials["Material original"]}
          position={[-9.2, 7.83, 12.97]}
          rotation={[3.02, 1.48, -3.02]}
          scale={0.14}
        />
        <mesh
          name="Cube022"
          geometry={nodes.Cube022.geometry}
          material={materials["Material original"]}
          position={[-9.5, 7.93, 13.52]}
          rotation={[3.02, 1.48, -3.02]}
          scale={0.14}
        >
          <mesh
            name="Cube023_1"
            geometry={nodes.Cube023_1.geometry}
            material={materials["Material.002"]}
            scale={1.05}
          />
        </mesh>
        <mesh
          name="Cube025"
          geometry={nodes.Cube025.geometry}
          material={materials["Material.007"]}
          position={[-8.74, 8.07, 14.05]}
          rotation={[3.02, 1.48, -3.02]}
          scale={0.14}
        >
          <mesh
            name="Cube026_1"
            geometry={nodes.Cube026_1.geometry}
            material={materials["Material.002"]}
            scale={1.05}
          />
        </mesh>
        <mesh
          name="Cube027"
          geometry={nodes.Cube027.geometry}
          material={materials["Material original"]}
          position={[-8.24, 7.84, 12.99]}
          rotation={[3.02, 1.48, -3.02]}
          scale={0.14}
        />
        <mesh
          name="Cube028"
          geometry={nodes.Cube028.geometry}
          material={materials["Material original"]}
          position={[-8.54, 7.94, 13.54]}
          rotation={[3.02, 1.48, -3.02]}
          scale={0.14}
        >
          <mesh
            name="Cube029_1"
            geometry={nodes.Cube029_1.geometry}
            material={materials["Material.002"]}
            scale={1.05}
          />
        </mesh>
        <mesh
          name="Cube010"
          geometry={nodes.Cube010.geometry}
          material={materials["Material original"]}
          position={[-11.93, 10.52, 8.47]}
          rotation={[0, 0, -0.01]}
          scale={0.14}
        />
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials["Material.002"]}
          position={[-11.93, 10.52, 8.47]}
          rotation={[0, 0, -0.01]}
          scale={0.14}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["FEA248.005"]}
          position={[-0.22, -0.21, -0.21]}
          rotation={[0, 0, -0.01]}
          scale={[-10.51, 0.52, 10.73]}
        />
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={materials["0A8F19"]}
          position={[-0.3, 0.1, -0.37]}
          rotation={[0, 0, -0.01]}
          scale={[-11.04, 0.54, 11.26]}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials["Material original.001"]}
          position={[1.42, 0.65, 4.15]}
          rotation={[-0.02, -0.03, -0.02]}
          scale={0.39}
        />
        <mesh
          name="Cube024"
          geometry={nodes.Cube024.geometry}
          material={materials["0A8F19"]}
          position={[1.43, 0.66, 4.14]}
          rotation={[-0.02, -0.03, -0.02]}
          scale={0.39}
        />
        <mesh
          name="Cube032"
          geometry={nodes.Cube032.geometry}
          material={materials["Material original.001"]}
          position={[4.92, 1.29, 2.46]}
          rotation={[-2.87, -1.33, -2.99]}
          scale={0.39}
        />
        <mesh
          name="Cube033"
          geometry={nodes.Cube033.geometry}
          material={materials["0A8F19"]}
          position={[4.92, 1.29, 2.47]}
          rotation={[-2.87, -1.33, -2.99]}
          scale={0.39}
        />
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.014"]}
          position={[1.49, 1.73, 3.92]}
          rotation={[-0.02, 0.78, -0.01]}
          scale={[0.18, -0.32, 0.18]}
        />
        <mesh
          name="Sphere002"
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.014"]}
          position={[1.53, 1.69, 4.44]}
          rotation={[-0.02, 0.78, -0.01]}
          scale={[0.2, -0.36, 0.2]}
        />
        <mesh
          name="Sphere003"
          geometry={nodes.Sphere003.geometry}
          material={materials["Material.014"]}
          position={[1.57, 1.6, 4.14]}
          rotation={[-0.02, 0.78, -0.01]}
          scale={[0.2, -0.35, 0.2]}
        />
        <mesh
          name="Sphere004"
          geometry={nodes.Sphere004.geometry}
          material={materials["Material.014"]}
          position={[5.13, 2.45, 2.56]}
          rotation={[-3.09, -0.09, 3.04]}
          scale={[0.25, -0.43, 0.25]}
        />
        <mesh
          name="Sphere005"
          geometry={nodes.Sphere005.geometry}
          material={materials["Material.014"]}
          position={[4.95, 2.32, 2.71]}
          rotation={[-3.09, -0.09, 3.04]}
          scale={[0.18, -0.32, 0.18]}
        />
        <mesh
          name="Sphere006"
          geometry={nodes.Sphere006.geometry}
          material={materials["Material.014"]}
          position={[4.66, 2.43, 2.38]}
          rotation={[-2.87, -1.33, -2.99]}
          scale={[0.2, -0.36, 0.2]}
        />
        <mesh
          name="Sphere007"
          geometry={nodes.Sphere007.geometry}
          material={materials["Material.014"]}
          position={[4.83, 2.22, 2.65]}
          rotation={[-2.87, -1.33, -2.99]}
          scale={[0.2, -0.35, 0.2]}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials["Material.014"]}
          position={[1.46, 1.78, 4.19]}
          rotation={[-0.02, 0.78, -0.01]}
          scale={[0.25, -0.43, 0.25]}
        />
        <mesh
          name="Text007"
          geometry={nodes.Text007.geometry}
          material={materials["Material.015"]}
          position={[3.25, 3.34, 3.19]}
          rotation={[Math.PI / 2, 0, -0.76]}
          scale={0.05}
        />
        <mesh
          name="Icosphere"
          geometry={nodes.Icosphere.geometry}
          material={materials["Material.016"]}
          position={[0.65, 13.24, -1.2]}
          rotation={[0, 0, -0.01]}
          scale={[4.45, 4.45, 6.22]}
        />
        <mesh
          name="Icosphere001"
          geometry={nodes.Icosphere001.geometry}
          material={materials["Material.016"]}
          position={[5.48, 12.23, -1.44]}
          rotation={[0, 0, -0.1]}
          scale={[2.91, 2.91, 4.06]}
        />
        <mesh
          name="Icosphere002"
          geometry={nodes.Icosphere002.geometry}
          material={materials["Material.016"]}
          position={[-3.53, 11.43, -0.09]}
          rotation={[0, 0, 0.04]}
          scale={[2.91, 2.91, 4.06]}
        />
        <mesh
          name="Icosphere003"
          geometry={nodes.Icosphere003.geometry}
          material={materials["Material.016"]}
          position={[0.39, 10.96, -6.45]}
          rotation={[-0.12, 0, -0.01]}
          scale={[2.38, 2.39, 3.31]}
        />
        <mesh
          name="Icosphere004"
          geometry={nodes.Icosphere004.geometry}
          material={materials["Material.016"]}
          position={[2.39, 12.32, 5.24]}
          rotation={[0, 0, -0.01]}
          scale={[2.91, 2.91, 4.06]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Material.003"]}
          position={[3.47, 2.42, 3.23]}
          rotation={[1.57, 0, -0.67]}
          scale={0.68}
        />
        <mesh
          name="PELO001"
          geometry={nodes.PELO001.geometry}
          material={materials["Material.003"]}
          position={[3.69, 2.89, 3.51]}
          rotation={[0, 0.67, 0]}
          scale={0.15}
        />
        <mesh
          name="Oreja001"
          geometry={nodes.Oreja001.geometry}
          material={materials["Material.003"]}
          position={[3.9, 2.52, 3.27]}
          rotation={[0, 0.67, 0]}
          scale={0.1}
        />
        <mesh
          name="nARIZ001"
          geometry={nodes.nARIZ001.geometry}
          material={materials["Material.003"]}
          position={[3.54, 2.59, 3.46]}
          rotation={[0, 0.67, 0]}
          scale={0.04}
        />
        <mesh
          name="lENTES001"
          geometry={nodes.lENTES001.geometry}
          material={materials["Material.003"]}
          position={[3.42, 2.54, 3.67]}
          rotation={[0, 0.67, 0]}
          scale={0.12}
        />
        <mesh
          name="Franela001"
          geometry={nodes.Franela001.geometry}
          material={materials["Material.003"]}
          position={[3.24, 1.78, 3.7]}
          rotation={[0, 0.67, 0]}
          scale={0.04}
        />
        <mesh
          name="Cuell9o001"
          geometry={nodes.Cuell9o001.geometry}
          material={materials["Material.003"]}
          position={[3.55, 1.97, 3.46]}
          rotation={[0, 0.67, 0]}
          scale={0.07}
        />
        <mesh
          name="Cube038"
          geometry={nodes.Cube038.geometry}
          material={materials.AAA}
          position={[3.42, 2.54, 3.63]}
          rotation={[0, 0.67, 0]}
          scale={0.08}
        />
        <mesh
          name="Cube039"
          geometry={nodes.Cube039.geometry}
          material={materials.AAA}
          position={[3.65, 2.54, 3.45]}
          rotation={[0, 0.67, 0]}
          scale={0.08}
        />
        <mesh
          name="cARAA001"
          geometry={nodes.cARAA001.geometry}
          material={materials["Material.003"]}
          position={[3.66, 2.15, 3.45]}
          rotation={[0, 0.67, 0]}
          scale={0.12}
        />
        <mesh
          name="Boca001"
          geometry={nodes.Boca001.geometry}
          material={materials["Material.003"]}
          position={[3.51, 2.18, 3.47]}
          rotation={[0, 0.67, 0]}
          scale={0.01}
        />
        <mesh
          name="Cube034"
          geometry={nodes.Cube034.geometry}
          material={materials["0A8F19"]}
          position={[0.06, -9.91, 0.23]}
          scale={[14.93, 5.85, 13.7]}
        />
        <mesh
          name="Cube035"
          geometry={nodes.Cube035.geometry}
          material={materials["0F581A"]}
          position={[0.06, -9.91, 0.23]}
          scale={[13.96, 5.48, 12.81]}
        />
        <mesh
          name="Cube036"
          geometry={nodes.Cube036.geometry}
          material={materials["Material.016"]}
          position={[0.17, -9.79, 0.23]}
          scale={[12.96, 5.08, 11.9]}
        />
        <mesh
          name="Cube037"
          geometry={nodes.Cube037.geometry}
          material={materials["FEA248.005"]}
          position={[0.17, -9.79, 0.23]}
          scale={[11.78, 4.62, 10.81]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/components/payload.gltf");