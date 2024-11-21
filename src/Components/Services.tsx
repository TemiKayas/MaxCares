import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const services = [
    {
        title: 'Dog Walking',
        image: '/src/assets/dogwalking.png',
        price: '$20 for 10 minutes, $25 for 20 minutes, $30 for 30 minutes',
        description: 'Busy schedule or just cant keep up with your dog anymore? We offer dog walking services to keep ' +
            'your pet active and healthy. Each additional dog per walk is $10 extra.'
    },
    {
        title: 'House Visits',
        image: '/src/assets/dogandcat.png',
        price: '$25 for 1 visit, $40 for 2 visits per day',
        description: 'Too busy to stop at home? We offer house visits to check on your pets and make sure they are happy ' +
            'and healthy. Perfect serivce for those who are away for long hours, or those with a puppy or older dog'

    },
    {
        title: 'Extended Visits',
        image: '/src/assets/curlyhairdog.png',
        price: '$150 per day',
        description: 'Going away for a prolonged period of time? We offer extended visits to keep your pets company and' +
            'well cared for! This service includes 2 walks and 3 checkins through out the day.'
    },
    {
        title: 'Frequent Visits',
        image: '/src/assets/goat.jpeg',
        price: 'Contact me! Lets work out a plan that works for you and your pet!',
        description: 'Looking for frequent support? We can work out a plan that works for you and your pet! Contact me to ' +
            'figure out a plan that ensures your pet is well cared for. We offer support for puppies, older dogs, big dogs' +
            'small dogs, cats, and more!'
    },
];

export default function Services() {
    return (
        <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={service.image}
                            alt={service.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}