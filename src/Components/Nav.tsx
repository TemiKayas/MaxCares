import styled from "styled-components";
import { Link } from 'react-router-dom';


const MyDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: deepskyblue;
    padding: 0% 2%; /* Reduced padding */
    position: relative;
    height: 4%; /* Reduced height */
    border-bottom: 2px solid black; /* Added black line at the bottom */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 2% 0;
    }
`;

const StyledLink = styled(Link)`
    margin: 0 1%;
    border-radius: 45px;
    padding: 2vh 3vw;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: silver;
    color: black;
    text-decoration: none;
    font-family: Arial, sans-serif;
    box-shadow: 8px 5px navy;
    transition: transform 0.5s, box-shadow 0.5s;
    border: 2px solid black;

    &:hover {
        background-color: #4bacac;
        transform: scale(1.1);
        box-shadow: 0 0 #ffb856;
    }

    &:active {
        color: #ffab25;
    }

    @media (max-width: 768px) {
        margin: 0 1%;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 2;
    height: 4%; /* Reduced height */
    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
`;

export default function Nav() {
    return (
        <MyDiv>
            <img src="/src/assets/MaxCares.png" alt="MaxCares" style={{ height: '100px', marginRight: '20px' }} />
            <h1>
                Metro West Pet Care
            </h1>
            <LinksContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
                <StyledLink to="/services">Services</StyledLink>
            </LinksContainer>
        </MyDiv>
    );
}