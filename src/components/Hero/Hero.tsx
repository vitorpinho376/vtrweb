import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import Linkedin from "../../assets/linkedin.svg";
import GridImage from "../../assets/grid.svg";

const MainSection = styled.section`
    padding: 80px 80px 24px;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 24px;

    h1 {
        font-weight: 900;
        font-size: 80px;
        line-height: 6.25rem;
        max-width: 700px;
        font-style: italic;

        b {
            color: ${(props) => props.theme.colors.whiteMuted};
        }
    }

    p {
        font-size: 20px;
        line-height: 32px;
        max-width: 594px;
    }

    @media only screen and (max-width: 1000px) {
        gap: 32px;
        padding: 35% 5% 5%;
        height: auto;
        h1 {
            font-size: 3rem;
            line-height: 4.25rem;
        }
    }
`;

const ActionHolder = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;

        a {
            width: 100%;
            justify-content: center;
        }
    }
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

const Box = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    @media only screen and (max-width: 1000px) {
        gap: 32px;
        padding-top: 48px;
        align-items: center;
        justify-content: center;
    }
`;

const ClientGrid = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    width: 100%;

    img {
        height: 100px;
        opacity: 0.7;
    }

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Hero = () => {
    return (
        <MainSection>
            <h1>I help design teams to build better Design Systems</h1>
            <p>
                My name is Vitor Pinho and I am a passionate Designer and FE
                Engineer based in Brazil. I have been working with digital
                products for over +12 years. I love to improve processes and
                build easy and fun solutions for humans.
            </p>
            <ActionHolder>
                <Button href="mailto:hi@vitor.mobi">Send a message</Button>
                <Button
                    target="_blank"
                    href="https://www.linkedin.com/in/vitorcc/"
                    variant="neutral"
                >
                    <Linkedin /> Connect with me
                </Button>
            </ActionHolder>
            <GridDetail>
                <GridImage />
            </GridDetail>
            <Box>
                <ClientGrid>
                    <img src="/clients/Carta.png" />
                    <img src="/clients/Stone.png" />
                    <img src="/clients/HBO.png" />
                    <img src="/clients/Springboard.png" />
                    <img src="/clients/WhatsGood.png" />
                    <img src="/clients/Nibo.png" />
                </ClientGrid>
            </Box>
        </MainSection>
    );
};

export default Hero;
