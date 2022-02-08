import React from "react";
import styled from "styled-components";
import Logo from "../../assets/vtr.svg";

import Linkedin from "../../assets/linkedin.svg";
import Dribbble from "../../assets/dribbble.svg";
import Figma from "../../assets/figma.svg";
import Github from "../../assets/github.svg";

export interface HeaderProps {
    modal?: boolean;
}

const HeaderWrapper = styled.div`
    width: 100%;
    top: 0;
    position: fixed;
    padding: 40px 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 56px;

    svg {
        min-width: 100px;
    }
`;

const Badge = styled.div`
    display: flex;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
`;

const MainNav = styled.nav`
    display: flex;
    gap: 24px;
    align-items: center;
    width: 100%;
`;

const LinkNav = styled.a`
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
`;

const MutedLinkNav = styled(LinkNav)`
    color: ${(props) => props.theme.colors.whiteMuted};
`;

const SocialNav = styled.nav`
    display: flex;
    gap: 40px;

    svg {
        min-width: auto;
    }
`;

const Header = ({ modal }: HeaderProps) => {
    return (
        <HeaderWrapper>
            <Logo />
            <MainNav>
                <MutedLinkNav>
                    My work <Badge>Soon</Badge>
                </MutedLinkNav>
                <LinkNav href="#">About Me</LinkNav>
                <LinkNav href="#">Contact</LinkNav>
            </MainNav>
            <SocialNav>
                <LinkNav
                    target="_blank"
                    href="https://www.linkedin.com/in/vitorcc/"
                >
                    <Linkedin />
                </LinkNav>
                <LinkNav target="_blank" href="https://figma.com/@vitorpinho">
                    <Figma />
                </LinkNav>
                <LinkNav target="_blank" href="https://dribbble.com/vtr376">
                    <Dribbble />
                </LinkNav>
                <LinkNav
                    target="_blank"
                    href="https://github.com/vitorpinho376"
                >
                    <Github />
                </LinkNav>
            </SocialNav>
        </HeaderWrapper>
    );
};

export default Header;
