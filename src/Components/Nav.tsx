import styled from "styled-components";
import { Link } from 'react-router-dom';


const MyDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: deepskyblue;
    padding: 1.5rem 3rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 4px solid black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 120px;

    @media (max-width: 1024px) {
        padding: 1rem;
        min-height: 70px;
        border-bottom: 3px solid black;
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
    height: 110px;
    width: auto;

    @media (max-width: 1024px) {
        height: 60px;
    }

    @media (max-width: 768px) {
        height: 50px;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 0;
    white-space: nowrap;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
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
    margin: 0 0.75rem;
    border-radius: 45px;
    padding: 1rem 2.5rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    color: black;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    box-shadow: 6px 6px navy;
    transition: all 0.3s ease;
    border: 3px solid black;
    white-space: nowrap;
    min-width: 140px;

    &:hover {
        background-color: #4bacac;
        transform: translateY(-3px);
        box-shadow: 8px 8px navy;
    }

    &:active {
        transform: translateY(0);
        box-shadow: 4px 4px navy;
    }

    @media (max-width: 1024px) {
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        margin: 0 0.3rem;
        border: 2px solid black;
        box-shadow: 5px 5px navy;
        min-width: 100px;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        margin: 0 0.25rem;
        box-shadow: 3px 3px navy;
        min-width: 80px;
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
        min-width: 70px;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`;

const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export default function Nav() {
    return (
        <MyDiv>
            <BrandContainer>
                <Logo src="/src/assets/MaxCares.png" alt="MaxCares" />
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