import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Dragon = (props) => {
  const { scene, animations } = useGLTF("/scene.gltf");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    actions[names].play();
  }, []);

  return <primitive object={scene} {...props} />;
};

export default Dragon;
