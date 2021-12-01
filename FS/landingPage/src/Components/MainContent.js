import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png';

function MainContent() {
    return (
        <MainContentStyled >
            <Navigation />
            <div className="content">
                <div className="left">
                    <SmallHeading title={'The power of Artificial Intelligence in Cryptocurrencies'} identifier={'Before'} />
                    <h1>
                    We have for you an <span className='GradientText'>Automated System </span>
                       <th></th> that is easy to use. 
                    </h1>
                    <p>
                    We're committed with our clients,
                      we take care of growing your money,
                      We assure you profits thanks to our Artificial Intelligence.
                     
                    </p>
                    
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
            }
        }
    }
`;
export default MainContent;
