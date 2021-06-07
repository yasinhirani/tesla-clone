import React from 'react';
import Header from './Header';
// import main_img from '../images/model-s.jpg';
import './section.css';
import styled from 'styled-components';

const Section = ({modelName, desc, btnLeft, btnRight, img}) => {
    return (
        <>
           <Container bgImg = {img}>
                <Header />
                <div className="main_info">
                    <div className="top_info">
                    <h1>{modelName}</h1>
                    <p>{desc}</p>
                    </div>
                    <div className="down_buttons">
                        <div className="buttons">
                        <p>{btnLeft}</p>
                        {btnRight && <p id="existing">{btnRight}</p>}
                        </div>
                        <div className="down_arrow">
                            <img className="down_img" src={`${process.env.PUBLIC_URL + '/images/down-arrow.svg'}`} alt=""/>
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
    height: 100%;
    background-image: ${props =>`url("${process.env.PUBLIC_URL}/images/${props.bgImg}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // object-fit: contain;
    scroll-snap-align: start;
`
