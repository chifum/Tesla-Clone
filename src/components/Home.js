import React from 'react'
import Section from "./Section";
import Data from '../data/Data';

const Home = () => {
    return (
        <div>
            { 
                Data.map((datium ) => {
                    const { id, title, description, backgroundImg, leftButton, rightButton } = datium; 
                    return(
                        <Section key={id} title={title} description={description} backgroundImg={backgroundImg} leftButton={leftButton} rightButton={rightButton} />
                    )
                })
            }
        </div>
    )
}

export default Home
