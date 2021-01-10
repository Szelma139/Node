import React from 'react'
import styled from 'styled-components';

const MobilePhone = styled.div`
margin-left: 50px;
border-radius: 35px;
max-width: 268px;
height: 580px;
background-image: url('https://image.freepik.com/free-vector/gradient-japanese-temple-with-lake_52683-45004.jpg');
background-size: cover;
background-position: center center;



button {
    background-color: white;
    border:none;
    border-radius: 20px;
    padding: 1rem 4rem 1rem 4rem;    
}

h1 {
    color: white;
    font-weight: 900;
	font-size: 35px;
}

p {
    color: white;
    font-weight:200;
font-size: 18px;
}


`;

const ContentContainer = styled.div`

padding-left: 1rem;
padding-top:2.5rem;
padding-bottom: 5rem;
`;


const InnerContent = styled.div`
padding-top: 60%;
margin-top: 40%;

`;

export const Showcase = () => {
    return (
        <MobilePhone>
           <ContentContainer>
    
            <h1>Begin tourney to Japan</h1>
   <InnerContent>


            <button>Guide me</button>
            <p>There is so much peace around you especially if you consider silence a sign of peace!</p>
            </InnerContent>
        </ContentContainer>
        </MobilePhone>
    )
}
