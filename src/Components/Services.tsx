// may the holidays bring you and your loved ones peace, love, and joy - evan

import { Typography } from '@mui/material';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2%;
    width: 95%;
    margin: 2% auto;
    

    @media screen and (max-width: 768px) {
        margin: 5% auto;
        width: 90%;
        flex-direction: column;
        gap: 16px; 
        align-items: center; 
    }
`;

const StyledCard = styled.div`
    flex: 1 1 calc(23% - 16px); 
    max-width: 23%; 
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    transition: transform 0.2s, box-shadow 0.3s;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        flex: none;
        width: 90%; 
        max-width: 90%;
    }
`;

const StyledCardMedia = styled.div`
    height: 250px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
`;

const StyledCardContent = styled.div`
    text-align: center;
    padding: 16px;

    & h5 {
        font-size: 1.5rem;
        color: #333333;
        font-weight: bold;
    }

    & p {
        font-size: 1rem;
        color: #555555;
        
    }

    & .price {
        font-size: 1.2rem;
        color: #17a2b8;
        font-weight: bold;
        margin: 8px 0;
        
    }
`;

const services = [
    {
        title: 'Dog Walking',
        image: '/src/assets/dogwalking.png',
        price: '$20 for 10 minutes, $25 for 20 minutes, $30 for 30 minutes',
        description: 'Busy schedule or just can\'t keep up with your dog anymore? We offer dog walking services to keep your pet active and healthy. Each additional dog per walk is $10 extra.'
    },
    {
        title: 'House Visits',
        image: '/src/assets/dogandcat.png',
        price: '$25 for 1 visit, $40 for 2 visits per day',
        description: 'Too busy to stop at home? We offer house visits to check on your pets and make sure they are happy and healthy. Perfect service for those who are away for long hours, or those with a puppy or older dog.'
    },
    {
        title: 'Extended Visits',
        image: '/src/assets/curlyhairdog.png',
        price: '$150 per day',
        description: 'Going away for a prolonged period of time? We offer extended visits to keep your pets company and well cared for! This service includes 2 walks and 3 check-ins throughout the day.'
    },
    {
        title: 'Frequent Visits / Other Care',
        image: '/src/assets/goat.jpeg',
        price: 'Contact me! Let\'s work out a plan that works for you and your pet!',
        description: 'Looking for frequent support? We can work out a plan that works for you and your pet! Contact me to figure out a plan that ensures your pet is well cared for. We offer support for puppies, older dogs, big dogs, small dogs, cats, and more!'
    },
];

export default function Services() {
    return (
        <CardContainer>
            {services.map((service, index) => (
                <StyledCard key={index}>
                    <StyledCardMedia image={service.image} />
                    <StyledCardContent>
                        <Typography variant="h5" component="div">
                            {service.title}
                        </Typography>
                        <Typography className="price">
                            {service.price}
                        </Typography>
                        <Typography variant="body2">
                            {service.description}
                        </Typography>
                    </StyledCardContent>
                </StyledCard>
            ))}
        </CardContainer>
    );
}
