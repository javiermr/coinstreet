import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
import DemonstrationSection from './DemonstrationSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import SellerCard2 from './SellerCard2';
import SellerCard3 from './SellerCard3';


function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
            <BlogsSection />
                <MainTitle title={'Earnings per month'} subtitle={'Demostration'} />
                <div className="sellercards">
                    <SellerCard />
                    <SellerCard2 />
                    <SellerCard3 />
                </div>
                
                
            </InnerLayout>
            <ContactSection />
            <footer>
                <p>Copyright CoinStreet©. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.div`
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }

    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #020A27;
        padding: 3rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
        }
    }
`;

export default BodyContent;
