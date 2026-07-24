import { useGLTF } from "@react-three/drei";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import "./../shaders/ParticleMaterial";


export default function ParticleBrain() {

    const { scene } = useGLTF("/brain.glb");
    const { size } = useThree();
    
    const materialRef = useRef<any>(null);

    const geometry = useMemo(() => {
        let mesh: THREE.Mesh | null = null;
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && !mesh) {
                mesh = child as THREE.Mesh;
            }
        });
        if (!mesh) return null;
        scene.updateMatrixWorld(true);
        const sampler = new MeshSurfaceSampler(mesh).build();

        const isDesktop = Math.min(size.width, size.height) > 768;
        const particles = isDesktop ? 12000 : 6500;
        const positions = new Float32Array(particles * 3);
        const temp = new THREE.Vector3();

        for (let i = 0; i < particles; i++) {
            sampler.sample(temp);
            positions[i * 3] = temp.x;
            positions[i * 3 + 1] = temp.y;
            positions[i * 3 + 2] = temp.z;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        geometry.computeBoundingBox();
        console.log(geometry.boundingBox);
        geometry.center();

        return geometry;
    }, [scene, size.width, size.height]);

    useFrame(({ mouse }) => {
        if (!materialRef.current) return;
        materialRef.current.uMouse.set(
            mouse.x * 2.0,
            mouse.y * 2.0
        );
    });

    if (!geometry) return null;

    // Responsive scale based on viewport width and aspect ratio to prevent cropping on mobile
    const aspect = size.width / size.height;
    const baseScale = 1.5;
    const responsiveScale = aspect < 1 ? baseScale * Math.max(0.7, aspect) : baseScale;

    // Responsive point size to prevent overlapping points on small screens
    const responsivePointSize = Math.min(size.width, size.height) > 768 ? 6.0 : 3.5;

    return (
        <points 
            geometry={geometry}
            scale={responsiveScale}
            rotation={[0, -Math.PI / 2, 0]}
            frustumCulled={false}
        >
            <particleMaterial
                ref={materialRef}
                transparent
                depthWrite={false}
                uSize={responsivePointSize}
            />
        </points>

    );

}
