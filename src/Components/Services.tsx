// may the holidays bring you and your loved ones peace, love, and joy - evan

import { Typography } from '@mui/material';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 90%;
    max-width: 1600px;
    margin: 4rem auto;
    padding: 3rem 0;
    min-height: calc(100vh - 300px);

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        width: 92%;
        margin: 3rem auto;
        padding: 2rem 0;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        width: 95%;
        margin: 2rem auto;
        padding: 1rem 0;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        width: 95%;
        margin: 1.5rem auto;
    }
`;

const StyledCard = styled.div`
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 2px solid #e0e0e0;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        border-radius: 20px;

        &:hover {
            transform: translateY(-8px);
        }
    }

    @media screen and (max-width: 768px) {
        border-radius: 16px;

        &:hover {
            transform: translateY(-4px);
        }
    }
`;

const StyledCardMedia = styled.div<{ image: string }>`
    height: 280px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    flex-shrink: 0;

    @media screen and (max-width: 1024px) {
        height: 220px;
    }

    @media screen and (max-width: 768px) {
        height: 200px;
    }
`;

const StyledCardContent = styled.div`
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & h5 {
        font-size: 2rem;
        color: #333333;
        font-weight: bold;
        margin: 0;
    }

    & p {
        font-size: 1.2rem;
        color: #555555;
        line-height: 1.6;
        margin: 0;
    }

    & .price {
        font-size: 1.4rem;
        color: #17a2b8;
        font-weight: bold;
        margin: 0.5rem 0;
    }

    @media screen and (max-width: 1024px) {
        padding: 1.25rem;
        gap: 0.75rem;

        & h5 {
            font-size: 1.3rem;
        }

        & p {
            font-size: 0.95rem;
        }

        & .price {
            font-size: 1.1rem;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 1rem;

        & h5 {
            font-size: 1.25rem;
        }

        & p {
            font-size: 0.9rem;
        }

        & .price {
            font-size: 1rem;
        }
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
