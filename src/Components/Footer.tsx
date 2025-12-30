import { Typography, Box } from "@mui/material";
import styled from 'styled-components';

const FooterContainer = styled(Box)`
    background-color: deepskyblue;
    padding: 2rem 3rem;
    text-align: center;
    border-top: 4px solid black;
    margin-top: auto;
    box-shadow: 0 -6px 10px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 1024px) {
        padding: 1.5rem 2rem;
        border-top: 3px solid black;
    }

    @media screen and (max-width: 768px) {
        padding: 1.25rem 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`;

const FooterText = styled(Typography)`
    font-family: 'Ubuntu', sans-serif !important;
    font-size: 1.3rem !important;
    color: #000 !important;
    line-height: 1.8 !important;

    @media screen and (max-width: 1024px) {
        font-size: 1rem !important;
        line-height: 1.6 !important;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.9rem !important;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
    }
`;

const ContactInfo = styled.span`
    display: inline-block;
    margin: 0 1rem;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
        margin: 0 0.5rem;
    }

    @media screen and (max-width: 768px) {
        display: block;
        margin: 0.25rem 0;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText variant="body1">
                All rights reserved to Metro West Pet Care © 2025
                <br />
                <ContactInfo>email@gmail.com</ContactInfo>
                <ContactInfo>1-508-816-4444</ContactInfo>
            </FooterText>
        </FooterContainer>
    );
}