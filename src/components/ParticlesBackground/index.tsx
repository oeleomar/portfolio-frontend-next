import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../config/particles-config";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    //
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{ ...particlesConfig }}
    />
  );
};
