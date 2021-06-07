import React from 'react';
import Header from './Header';
// import main_img from '../images/model-s.jpg';
import './section.css';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({modelName, desc, btnLeft, btnRight, img}) => {
    return (
        <>
           <Container bgImg = {img}>
                <Header />
                <div className="main_info">
                    <div className="top_info">
                    <Fade bottom>
                    <h1>{modelName}</h1>
                    <p>{desc}</p>
                    </Fade>
                    </div>
                    <div className="down_buttons">
                        <div className="buttons">
                        <Fade left>
                        <p>{btnLeft}</p>
                        </Fade>
                        {btnRight && <Fade right><p id="existing">{btnRight}</p></Fade>}
                        </div>
                        <div className="down_arrow">
                        <Fade top><img className="down_img" src={`${process.env.PUBLIC_URL + '/images/down-arrow.svg'}`} alt=""/></Fade>
                        </div>
                    </div>
                </div>
            </Container> 
        </>
    )
}

export default Section;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props =>`url("${process.env.PUBLIC_URL}/images/${props.bgImg}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // object-fit: contain;
    scroll-snap-align: start;
`
