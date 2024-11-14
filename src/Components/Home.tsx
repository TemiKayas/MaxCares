import { Container, Typography, Box } from '@mui/material';

export default function Home() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Max Cares Pet Care - Dog Walking and House Sitting in Massachusetts
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Reliable, Compassionate Pet and House Care from an Experienced Professional
                </Typography>
                <Typography variant="body1" component="p">
                    Welcome to Max Cares Pet Care, your trusted dog walking and pet care service near Framingham, Ashland, and Sudbury, Massachusetts.
                    Run by Max Davidson, a dedicated dog walker with decades of experience in pet care and veterinary assistance, we provide
                    reliable and compassionate care for your furry friends. Whether you’re looking for “dog walking near me” or need
                    a responsible and experienced pet sitter, Max Cares Pet Care is here to meet all your dog walking and house sitting needs
                    in Framingham, Ashland, Sudbury, and surrounding areas.
                    <br /><br />
                    Our services include dog walking, puppy care, and house sitting, ensuring your pets feel loved and comfortable while you’re away.
                    We understand how important it is to find a pet care provider you can trust, especially with Max’s extensive background in veterinary
                    support and animal welfare. From energetic puppy care to gentle attention for older dogs, Max brings kindness, knowledge, and reliability
                    to every visit.
                    <br /><br />
                    If you're in Massachusetts and searching for “dog walking in Framingham” or “house sitting near me,” look no further than Max Cares Pet Care.
                    Contact us today to schedule a meet-and-greet or learn more about how we can keep your pets happy, safe, and well-cared for.
                </Typography>
            </Box>
        </Container>
    );
}
