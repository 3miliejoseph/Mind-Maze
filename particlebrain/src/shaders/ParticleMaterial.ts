import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "./particle.vert?raw";
import fragmentShader from "./particle.frag?raw";

export const ParticleMaterial = shaderMaterial(
  {
    uTime: 0,
    uSize: 6,
    uColor: new THREE.Color("#fcd8f7"),
    uMouse: new THREE.Vector2(9999, 9999),
    uNoiseStrength: 0.0,
  },
  vertexShader,
  fragmentShader
);

extend({ ParticleMaterial });