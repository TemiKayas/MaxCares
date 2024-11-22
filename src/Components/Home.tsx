import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
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
    width: 50%;
    text-align: center;
    margin: 0 4% 0 5%;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const ButtonsContainer = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
`;

const CallToActionContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    margin-bottom: 20px;
`;

const Image = styled.img`
    height: 80vh;
    margin: -11% -5% 0 0;
    filter: brightness(1.1);
`;

const FlexContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 3%;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <ThemeProvider theme={lightGrayTheme}>
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                    maxHeight: '80vh',
                    py: 4,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                <Box sx={{ textAlign: 'left', my: 4, mt: 12 }}>
                    <FlexContainer>
                        <Bubble>
                            <CallToActionContainer>
                                <Typography sx={{ fontFamily: 'Ubuntu' }} variant="body1" component="p">
                                    Please provide information on the service you are looking for and your pet's information in the description.
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
                                    <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
                                    <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                                    <TextField label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                                    <TextField label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={4} required />
                                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                                </Box>
                            </CallToActionContainer>
                        </Bubble>
                        <Image src='/src/assets/coolhudson.png' alt='Hudson the dog' />
                    </FlexContainer>
                </Box>
            </Container>
        </ThemeProvider>
    );
}