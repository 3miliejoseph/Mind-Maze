import { ParticleMaterial } from "./ParticleMaterial";

declare module "@react-three/fiber" {
    interface ThreeElements {
        particleMaterial: any;
    }
}
