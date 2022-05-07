import useDoctors from '../hooks/useDoctors';
import { MainLayout } from '../styles/Layout';
import DoctorsCard from './DoctorsCard';
import styled from 'styled-components'

const OurDoctors = () => {
    const [doctors] = useDoctors();
    return (
        <MainLayout>
            <OurDoctorsStyled>
                <div className="doctor-title">
                    <h2>Our <span>Doctors</span></h2>
                </div>
                <div className="our-doctor">
                    {
                        doctors.map(doctor => <DoctorsCard
                            key={doctor.id}
                            image={doctor.image}
                            name={doctor.name}
                            type={doctor.type}
                        />)
                    }
                </div>
            </OurDoctorsStyled>
            {/* <DoctorsCard /> */}
        </MainLayout>
    );
};
const OurDoctorsStyled = styled.div`
    .doctor-title{
        text-align: center;
        margin: 70px 0px;
        h2{
            font-weight: 700;
            span{
            color: var(--primary-color)
        }
        }
    }
    .our-doctor{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

@media screen and (max-width: 991px) {
    .our-doctor{
        flex-direction: column;
    }
        }
`
export default OurDoctors;