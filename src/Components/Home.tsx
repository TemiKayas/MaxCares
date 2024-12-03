import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import styled from 'styled-components';
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

const Bubble = styled(Box)`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border: 3px solid #000000;
    border-radius: 85px;
    color: #000000;
    width: 80%;
    text-align: center;
    margin: -4% -5% 0 0;
    padding: 2%;
    @media (max-width: 768px) {
        width: 80%;
    }
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
    
    @media (max-width: 768px) {
        height: 50vh;
        margin: 0;
    }
`;

const FlexContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 3%;
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
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        backgroundColor: 'background.default',
                        color: 'text.primary',
                        flex: 1,
                        py: 4,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
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
                                        <TextField label="Service Needed" name="subject" value={formData.subject} onChange={handleChange} required />
                                        <TextField label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={4} required />
                                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                                    </Box>
                                </CallToActionContainer>
                            </Bubble>
                            <Image src='/src/assets/coolhudson.png' alt='Hudson the dog' />
                        </FlexContainer>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}