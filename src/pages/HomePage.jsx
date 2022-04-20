import React from 'react';
import Options from '../components/Options';
import Slider from '../components/Slider';
import TeethCare from '../components/TeethCare';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Slider />
            <Options />
            <TeethCare />
        </div>
    );
};

export default HomePage;