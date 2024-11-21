import { Container, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from "/src/assets/background.png";


const lightGrayTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
            paper: grey[200],
        },
        text: {
            primary: '#000000',
            secondary: grey[700],
        },
    },
});

const StyledLink = styled(Link)`
    margin: 0 1%;
    border-radius: 45px;
    padding: 2vh 3vw;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffab25;
    color: black;
    text-decoration: none;
    font-family: Arial, sans-serif;
    box-shadow: 8px 5px #ec8a00;
    transition: transform 0.5s, box-shadow 0.5s;
    border: 2px solid black;

    &:hover {
        background-color: #4bacac;
        transform: scale(1.1);
        box-shadow: 0 0 #ffb856;
    }

    &:active {
        color: #ffab25;
    }

    @media (max-width: 768px) {
        margin: 0 1%;
    }
`;

const Bubble = styled(Box)`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border: 3px solid #000000;
    border-radius: 85px;
    padding: 16px;
    color: #000000;
    width: 50%; /* Increased width */
    text-align: center;
    margin: 0 4% 0 5%;
    @media (max-width: 768px) {
        width: 80%;
    }
`;
const ButtonsContainer = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 16px; /* Space between buttons */
    margin-top: 16px; /* Space between text and buttons */
`;



const CallToActionContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    margin-bottom: 20px; /* Added margin-bottom to decrease space */
`;


const Image = styled.img`
    height: 80vh;
    margin: -11% -5% 0 0; /* Adjusted margins */
    filter: brightness(1.1); /* Increase brightness */
`;

const FlexContainer = styled(Box)`
    display: flex;
    flex-direction: row; /* Changed to row to align items horizontally */
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 3%;
    gap: 16px; /* Decreased space between elements */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;



export default function Home() {
    return (
        <ThemeProvider theme={lightGrayTheme}>
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                    maxHeight: '80vh',
                    py: 4,
                    backgroundImage: `url(${backgroundImage})`, // Set the background image
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                // putcontasct right in t5he bubbld
                <Box sx={{ textAlign: 'left', my: 4, mt: 12 }}>
                    <FlexContainer>
                        {/* Bubble with links on the left side */}
                        <Bubble>
                            <CallToActionContainer>
                                // set font family in SX prop for everything
                                <Typography sx={{fontFamily: 'Ubuntu'}} variant="h6" component="h2" gutterBottom>
                                    We would love to hear more about your
                                    loved one! To learn more about our services and get in contact, click below!
                                </Typography>

                                <Typography sx={{fontFamily: 'Ubuntu'}} variant="body1" component="p">
                                    If you're in the Metro West area and searching for “dog walking in Framingham” or “house sitting near me,” look no further than Max Cares Pet Care.
                                    Contact us today to schedule a meet-and-greet or learn more about how we can keep your pets happy, safe, and well-cared for.
                                </Typography>
                                <ButtonsContainer>
                                    <StyledLink to="/services">Our Services</StyledLink>
                                    <StyledLink to="/contact">Contact</StyledLink>
                                </ButtonsContainer>
                            </CallToActionContainer>
                        </Bubble>
                        {/* Image on the right side */}
                        <Image src='/src/assets/coolhudson.png' alt='Hudson the dog' />
                    </FlexContainer>
                </Box>
            </Container>
        </ThemeProvider>
    );
}