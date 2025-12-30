// with love and care from the people at blue dev digital - evan

import { Paper, Typography } from '@mui/material';
import styled from 'styled-components';

const AboutContainer = styled(Paper)`
    padding: 2.5rem;
    width: 90%;
    max-width: 1600px;
    margin: 3rem auto;
    min-height: calc(100vh - 300px);
    background-color: #e3f2fd !important;
    border-radius: 30px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        width: 92%;
        padding: 2rem;
        margin: 2rem auto;
        border-radius: 24px;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        padding: 1.5rem;
        margin: 1.5rem auto;
        border-radius: 16px;
    }

    @media screen and (max-width: 480px) {
        width: 95%;
        padding: 1rem;
        margin: 1rem auto;
    }
`;

const HeaderContainer = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 2rem;
    background-color: #3c9aff !important;
    padding: 2rem;
    border-radius: 25px;
    border: 5px solid #3f51b5;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        padding: 1.5rem;
        border: 3px solid #3f51b5;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1.25rem;
        margin-bottom: 1.25rem;
    }

    @media screen and (max-width: 480px) {
        padding: 1rem;
        margin-bottom: 1rem;
    }
`;

const StyledImage = styled.img`
    height: 280px;
    width: auto;
    border-radius: 20px;
    border: 5px solid #3f51b5;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
        height: 130px;
        border: 3px solid #3f51b5;
    }

    @media screen and (max-width: 768px) {
        height: 120px;
    }

    @media screen and (max-width: 480px) {
        height: 100px;
    }
`;

const Title = styled(Typography)`
    font-weight: bold;
    color: white;
    font-size: 5rem;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const BodyText = styled(Typography)`
    text-align: justify;
    font-size: 2rem;
    line-height: 2.2;
    width: 100%;
    color: black;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    font-weight: 400;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-sizing: border-box;
    max-width: 100%;

    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
        line-height: 1.7;
        padding: 1.25rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        line-height: 1.6;
        padding: 1rem;
        text-align: left;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        line-height: 1.5;
        padding: 0.75rem;
        text-align: left;
    }
`;

export default function About() {
    return (
        <AboutContainer elevation={3}>
            <HeaderContainer elevation={3}>
                <StyledImage src="/maxwithdog.png" alt="Max with a dog" />
                <Title sx={{fontFamily:"Lilita One"}} variant="h2">
                    Metro West Pet Care
                </Title>
            </HeaderContainer>
            <BodyText>
                Welcome to <b>Metro West Pet Care</b>, your trusted dog walking and pet care service near <b>Framingham,
                Ashland, and Sudbury, Massachusetts</b>.
                Run by <b>Max Davidson</b>, a dedicated dog walker with decades of experience in pet care and veterinary
                assistance, we provide
                reliable and compassionate care for your furry friends. Whether you're looking for <b>"dog walking near
                me"</b> or need
                a responsible and <b>experienced pet sitter</b>, Max Cares Pet Care is here to meet all your dog walking
                and house sitting needs
                in Framingham, Ashland, Sudbury, and surrounding areas.
                <br/><br/>
                If you're in Massachusetts and searching for "dog walking in Framingham" or "house sitting near me,"
                look no further than Max Cares Pet Care.
                Contact us today to schedule a meet-and-greet or learn more about how we can keep your pets happy, safe,
                and well-cared for.
            </BodyText>
        </AboutContainer>
    );
}