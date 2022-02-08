import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import Linkedin from "../../assets/linkedin.svg";
import GridImage from "../../assets/grid.svg";

const MainSection = styled.section`
    padding: 80px;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    h1 {
        font-weight: 900;
        font-size: 80px;
        line-height: 101px;
        max-width: 900px;

        b {
            color: ${(props) => props.theme.colors.white};
        }
    }
`;

const ActionHolder = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const GridDetail = styled.div`
    position: absolute;
    bottom: 0;
    right: -25%;
    animation: floating 5s ease-in-out infinite;

    @keyframes floating {
        0% {
            opacity: 0;
            transform: translatey(0px);
        }
        50% {
            opacity: 0.7;
            transform: translatey(-80px);
        }
        100% {
            opacity: 0;
            transform: translatey(0px);
        }
    }
`;

const Hero = () => {
    return (
        <MainSection>
            <h1>
                <b>Design + Technology </b>
                can improve the world we live in.
            </h1>
            <ActionHolder>
                <Button href="mailto:hi@vitor.mobi">Send a message</Button>
                <Button variant="neutral">
                    <Linkedin /> Connect with me
                </Button>
            </ActionHolder>
            <GridDetail>
                <GridImage />
            </GridDetail>
        </MainSection>
    );
};

export default Hero;
