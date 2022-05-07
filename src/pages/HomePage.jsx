import React from 'react';
import Card from '../components/Card';
import Counter from '../components/Counter';
import Options from '../components/Options';
import OurDoctors from '../components/OurDoctors';
import SeriviceSection from '../components/SeriviceSection';
import Slider from '../components/Slider';
import TeethCare from '../components/TeethCare';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Slider />
            <Options />
            <TeethCare />
            <SeriviceSection />
            <Counter />
            <OurDoctors />

            {/* <Card /> */}
        </div>
    );
};

export default HomePage;