import styled, { keyframes } from "styled-components";

const Universe = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Planet = styled.img`
    width: 84px;
    height: 54px;
`;

const AstronautMan = styled.img`
    width: 192px;
    height: 195px;
`;

const SceneWrapper = styled.div`
    position: relative;
    max-width: 400px;
`;

const PlanetGravity = styled.div`
    position: absolute;
    top: -45%;
    left: -25%;
    z-index: 2;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AstroGravity = styled.div`
    animation: ${floatAnimation} 3s infinite;
    position: relative;
`;

export const AstronautScene = () => {
    return (
        <Universe>
            <SceneWrapper>
                <PlanetGravity>
                    <Planet src="Planet.png" />
                </PlanetGravity>
                <AstroGravity>
                    <AstronautMan src="Astronaut.png" />
                </AstroGravity>
            </SceneWrapper>
        </Universe>
    );
};
