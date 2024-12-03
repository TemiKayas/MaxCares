// with love and care from the people at blue dev digital - evan

import { Paper, Typography } from '@mui/material';
import styled from 'styled-components';

const AboutContainer = styled(Paper)`
    padding: 5vh;
    width: 80vw;
    margin: 5vh auto;
    //!important is something i use in this file to override the default styles of mui components
    background-color: #e3f2fd !important; 
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-bottom: 4vh;
    background-color: #3c9aff !important;
    padding: 2vh;
    border-radius: 8px;
    border: 2px solid #3f51b5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

const StyledImage = styled.img`
    height: 20vh;
    margin-right: 4vw;
    border-radius: 8px;
    border: 3px solid #3f51b5;
`;

const Title = styled(Typography)`
    font-weight: bold;
    color: white;
    font-size: 3rem;
`;

const BodyText = styled(Typography)`
    text-align: justify;
    font-size: 2rem; 
    width: 100%;
    color: black;
    padding-top: 2%;
    background-color: #e3f2fd;
    border-radius: 8px;

    @media screen and (max-width: 750px) {
        font-size: 1.5rem;
    }
`;

export default function About() {
    return (
        <AboutContainer elevation={3}>
            <HeaderContainer elevation={3}>
                <StyledImage src="/src/assets/maxwithdog.png" alt="Max with a dog" />
                <Title sx={{fontFamily:"Lilita One"}} variant="h2">
                    Metro West Pet Care
                </Title>
            </HeaderContainer>
            <BodyText>
                Welcome to <b>Metro West Pet Care</b>, your trusted dog walking and pet care service near <b>Framingham,
                Ashland, and Sudbury, Massachusetts</b>.
                Run by <b>Max Davidson</b>, a dedicated dog walker with decades of experience in pet care and veterinary
                assistance, we provide
                reliable and compassionate care for your furry friends. Whether you’re looking for <b>“dog walking near
                me”</b> or need
                a responsible and <b>experienced pet sitter</b>, Max Cares Pet Care is here to meet all your dog walking
                and house sitting needs
                in Framingham, Ashland, Sudbury, and surrounding areas.
            </BodyText>
            <BodyText>
                If you're in Massachusetts and searching for “dog walking in Framingham” or “house sitting near me,”
                look no further than Max Cares Pet Care.
                Contact us today to schedule a meet-and-greet or learn more about how we can keep your pets happy, safe,
                and well-cared for.
            </BodyText>
        </AboutContainer>
    );
}