import { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Paper, Alert, Snackbar } from '@mui/material';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 300px);
    padding: 4rem 1rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 2rem 1rem;
        min-height: calc(100vh - 240px);
    }

    @media screen and (max-width: 480px) {
        padding: 1.5rem 0.5rem;
    }
`;

const StyledPaper = styled(Paper)`
    padding: 4rem;
    width: 100%;
    max-width: 800px;
    border-radius: 30px !important;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2) !important;
    background-color: #ffffff !important;

    @media screen and (max-width: 1024px) {
        padding: 3rem;
        max-width: 700px;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem;
        border-radius: 16px !important;
        max-width: 90%;
    }

    @media screen and (max-width: 480px) {
        padding: 1.5rem;
        max-width: 95%;
    }
`;

const StyledTitle = styled(Typography)`
    text-align: center;
    margin-bottom: 3rem !important;
    font-weight: bold !important;
    color: #333 !important;
    font-size: 3.5rem !important;

    @media screen and (max-width: 1024px) {
        font-size: 2.5rem !important;
        margin-bottom: 2rem !important;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1.5rem !important;
        font-size: 2rem !important;
    }
`;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
        service: '',
        petType: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSnackbarMessage('Email service not configured. Please contact us at petcareMW@gmail.com or call 774-424-7085');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then(() => {
                setSnackbarMessage('Thank you! Your message has been sent successfully. We will contact you soon!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    description: '',
                    service: '',
                    petType: ''
                });
            })
            .catch(() => {
                setSnackbarMessage('Failed to send message. Please email us directly at petcareMW@gmail.com or call 774-424-7085');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <ContactContainer>
            <StyledPaper elevation={3}>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, lg: 3 } }}>
                    <StyledTitle variant="h3">
                        Contact Us
                    </StyledTitle>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                        InputLabelProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
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
                        variant="outlined"
                        InputProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                        InputLabelProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                    />
                    <TextField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
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
                        variant="outlined"
                        InputProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                        InputLabelProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                    />
                    <TextField
                        select
                        label="Service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                        InputLabelProps={{
                            sx: { fontSize: { xs: '1rem', lg: '1.3rem' } }
                        }}
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    sx: { '& .MuiMenuItem-root': { fontSize: { xs: '1rem', lg: '1.3rem' } } }
                                }
                            }
                        }}
                    >
                        <MenuItem value="Dog Walking">Dog Walking</MenuItem>
                        <MenuItem value="House Visits">House Visits</MenuItem>
                        <MenuItem value="Extended Visits">Extended Visits</MenuItem>
                        <MenuItem value="Frequent Visits">Frequent Visits / Other Care</MenuItem>
                    </TextField>
                    <TextField
                        label="Type of Pet"
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
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
                        size="large"
                        sx={{
                            py: { xs: 1.5, lg: 2 },
                            fontSize: { xs: '1.1rem', lg: '1.5rem' },
                            fontWeight: 'bold',
                            mt: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </StyledPaper>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%', fontSize: '1rem' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </ContactContainer>
    );
}