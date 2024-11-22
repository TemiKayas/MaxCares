import { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
            <Typography variant="h4" component="h1">Contact</Typography>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            <TextField label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={4} required />
            <TextField
                select
                label="Service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
            >
                <MenuItem value="Dog Walking">Dog Walking</MenuItem>
                <MenuItem value="House Visits">House Visits</MenuItem>
                <MenuItem value="Extended Visits">Extended Visits</MenuItem>
                <MenuItem value="Frequent Visits">Frequent Visits</MenuItem>
            </TextField>
            <TextField
                label="Type of Pet"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
    );
}