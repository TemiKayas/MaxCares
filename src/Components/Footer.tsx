import { Typography, Box } from "@mui/material";
import styled from 'styled-components';

const FooterContainer = styled(Box)`
    background-color: deepskyblue; /* Set the same background color as Nav */
    padding: 1%;
    text-align: center;
    border-top: 2px solid black; /* Add a black line at the top */
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Typography variant="body1" component="p">
                All rights reserved to Metro West Pet Care ©, email@gmail.com, 1-508-816-4444
            </Typography>
        </FooterContainer>
    );
}