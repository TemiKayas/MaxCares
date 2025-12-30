import styled from "styled-components";
import { Link } from 'react-router-dom';


const MyDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: deepskyblue;
    padding: 1rem 2%;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 0.25rem solid black;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
    min-height: 5.5rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        padding: 0.75rem 1.5%;
        min-height: 4.5rem;
        border-bottom: 0.2rem solid black;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        min-height: auto;
    }
`;

const Logo = styled.img`
    height: 4.5rem;
    width: auto;
    max-height: 5rem;

    @media (max-width: 1024px) {
        height: 3.5rem;
    }

    @media (max-width: 768px) {
        height: 3rem;
    }
`;

const Title = styled.h1`
    font-size: 1.75rem;
    margin: 0;
    white-space: nowrap;

    @media (max-width: 1024px) {
        font-size: 1.4rem;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

const StyledLink = styled(Link)`
    margin: 0 0.25rem;
    border-radius: 2.5rem;
    padding: 0.7rem 1.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    color: black;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    box-shadow: 0.375rem 0.375rem navy;
    transition: all 0.3s ease;
    border: 0.1875rem solid black;
    white-space: nowrap;
    min-width: 7rem;

    &:hover {
        background-color: #4bacac;
        transform: translateY(-0.1875rem);
        box-shadow: 0.5rem 0.5rem navy;
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0.25rem 0.25rem navy;
    }

    @media (max-width: 1024px) {
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        margin: 0 0.2rem;
        border: 0.125rem solid black;
        box-shadow: 0.3125rem 0.3125rem navy;
        min-width: 6rem;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        margin: 0 0.25rem;
        box-shadow: 0.1875rem 0.1875rem navy;
        min-width: 5rem;
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
        min-width: 4.5rem;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
    }
`;

const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 1;
    min-width: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export default function Nav() {
    return (
        <MyDiv>
            <BrandContainer>
                <Logo src="/MaxCares.png" alt="MaxCares" />
                <Title>Metro West Pet Care</Title>
            </BrandContainer>
            <LinksContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
                <StyledLink to="/services">Services</StyledLink>
            </LinksContainer>
        </MyDiv>
    );
}