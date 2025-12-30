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
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    border: 4px solid #000000;
    border-radius: 60px;
    color: #000000;
    width: 100%;
    max-width: 950px;
    text-align: center;
    padding: 4rem;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);

    @media (max-width: 1024px) {
        max-width: 550px;
        padding: 2rem;
        border-radius: 40px;
        border: 3px solid #000000;
    }

    @media (max-width: 768px) {
        width: 90%;
        max-width: 100%;
        padding: 1.5rem;
        border-radius: 30px;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        padding: 1.25rem;
        border-radius: 25px;
    }
`;

const CallToActionContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
`;

const Image = styled.img`
    height: 85vh;
    max-height: 900px;
    width: auto;
    object-fit: contain;
    filter: brightness(1.1);

    @media (max-width: 1024px) {
        height: 60vh;
        max-height: 500px;
    }

    @media (max-width: 768px) {
        height: 50vh;
        max-height: 400px;
        width: 100%;
    }

    @media (max-width: 480px) {
        height: 40vh;
        max-height: 300px;
    }
`;

const FlexContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;
    padding: 3rem 2rem;

    @media (max-width: 1024px) {
        gap: 2rem;
        padding: 2rem 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
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
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 160px)' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        backgroundColor: 'background.default',
                        color: 'text.primary',
                        flex: 1,
                        py: { xs: 2, sm: 3, md: 4 },
                        px: { xs: 2, sm: 3, md: 4 },
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
                        <FlexContainer>
                            <Bubble>
                                <CallToActionContainer>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Ubuntu',
                                            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.5rem', lg: '1.6rem' },
                                            lineHeight: 1.7,
                                            fontWeight: 500
                                        }}
                                        variant="body1"
                                        component="p"
                                    >
                                        Please provide information on the service you are looking for and your pet's information in the description.
                                    </Typography>
                                    <Box
                                        component="form"
                                        onSubmit={handleSubmit}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: { xs: 2, md: 2.5, lg: 3 },
                                            width: '100%',
                                            maxWidth: { xs: 500, lg: 700 }
                                        }}
                                    >
                                        <TextField
                                            label="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            InputProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                            InputLabelProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                        />
                                        <TextField
                                            label="Phone Number"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            InputProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                            InputLabelProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                        />
                                        <TextField
                                            label="Service Needed"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            InputProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                            InputLabelProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                        />
                                        <TextField
                                            label="Description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            multiline
                                            rows={4}
                                            required
                                            fullWidth
                                            InputProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                            InputLabelProps={{
                                                sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                                            }}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                py: { xs: 1.5, lg: 2 },
                                                fontSize: { xs: '1.1rem', lg: '1.5rem' },
                                                fontWeight: 'bold',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                                }
                                            }}
                                        >
                                            Submit
                                        </Button>
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