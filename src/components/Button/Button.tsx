import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export interface ButtonProps {
    children?: ReactNode;
    variant?: "primary" | "neutral";
    href?: string;
    target?: string;
}

const variantOptions = {
    primary: {
        backgroundColor: theme.colors.white,
        color: theme.colors.purple,
        shadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
        border: "2px solid rgba(255, 255, 255, 0)",
        hoveredBg: theme.colors.purple,
        hoveredColor: theme.colors.white,
        hoveredBorder: "2px solid rgba(255, 255, 255, 1)",
        hoveredShadow: "0px 16px 24px rgba(0, 0, 0, 0.1)",
    },
    neutral: {
        backgroundColor: "transparent",
        color: theme.colors.white,
        shadow: "none",
        border: "2px solid rgba(255, 255, 255, 0.12)",
        hoveredBg: "rgba(255, 255, 255, 0.1)",
        hoveredColor: theme.colors.white,
        hoveredBorder: "2px solid rgba(255, 255, 255, 1)",
        hoveredShadow: "0px 16px 24px rgba(0, 0, 0, 0.1)",
    },
};

const StyledButton = styled.a<ButtonProps>`
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 8px 24px;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s ease-in;

    svg {
        margin-top: -4px;
    }

    ${({ variant }) =>
        variant &&
        variantOptions[variant] &&
        css`
            background-color: ${variantOptions[variant].backgroundColor};
            color: ${variantOptions[variant].color};
            box-shadow: ${variantOptions[variant].shadow};
            border: ${variantOptions[variant].border};

            :hover {
                background-color: ${variantOptions[variant].hoveredBg};
                color: ${variantOptions[variant].hoveredColor};
                border: ${variantOptions[variant].hoveredBorder};
                box-shadow: ${variantOptions[variant].hoveredShadow};
            }

            :active {
                box-shadow: none;
            }
        `}
`;

const Button = ({ children, variant, href, target }: ButtonProps) => {
    return (
        <StyledButton target={target} href={href} variant={variant}>
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: "primary",
};

export default Button;
