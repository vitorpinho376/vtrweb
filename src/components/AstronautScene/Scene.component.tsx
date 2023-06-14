import styled, { keyframes } from "styled-components";
import { Planet } from "./Planet.graphic";
import { AstronautMan } from "./Astrounaut.graphic";

const Universe = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SceneWrapper = styled.div`
    position: relative;
    max-width: 400px;
`;

const PlanetGravity = styled.div`
    position: absolute;
    top: -15%;
    left: -15%;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
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
                    <Planet />
                </PlanetGravity>
                <AstroGravity>
                    <AstronautMan />
                </AstroGravity>
            </SceneWrapper>
        </Universe>
    );
};
