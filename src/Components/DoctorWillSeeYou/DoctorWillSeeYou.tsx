import './DoctorWillSeeYou.css';
import { useEffect, useState } from 'react';
import { doctorCardInitialArray } from "./initialDiseaseData";


export interface DiseaseCategory {
  name: string;
  subName?: string;
  activeIconPath?: string;
  inactiveIconPath?: string;
  isSelected?: boolean;
  diseases: string[];
}


const DoctorWillSeeYou = () => {
  
  const [activeCardkey, setActiveCardKey] = useState("");
  const handleClick = (key: string) => {
    setActiveCardKey(key);
  };

  const selectedCard = doctorCardInitialArray.find(item => item.name === activeCardkey);
   
    return (
        <section className="DoctorWillSeeYou">
            <h2 className="title1">The Doctor Will See You Now</h2>
            <p className="subtitle">Choose from thousands of high-quality providers accepting patients today. Select your appointment type below.</p>
            <div className='DoctorCard'>
                <div className="DoctorCard1 row">
                    {doctorCardInitialArray.map((doctorCard) => (
                        <div
                        className={`col-sm-1 col-6 ${
                            doctorCard.name === activeCardkey
                            ? "DoctorSubCard active"
                            : "DoctorSubCard"}`
                        }
                        onClick={() => handleClick(doctorCard.name)}
                        >
                        <img
                            className="icon"
                            src={
                            doctorCard.name === activeCardkey
                                ? doctorCard.activeIconPath
                                : doctorCard.inactiveIconPath
                            }
                            alt="Card1"
                        />
                        <p className="text">
                            {doctorCard.name} <br />
                            {doctorCard.subName}
                        </p>
                        <img
                            className="arrow"
                            src={
                            doctorCard.name === activeCardkey
                                ? "/whiteDownArrow.svg"
                                : "/RightArrow.svg"
                            }
                            alt="Card1"
                        />
                        </div>
                    ))}
                </div>

                
                { activeCardkey && 
                    <div className="DoctorCard1 row mobileOnly">
                                <div
                                className={`col-xs-12 col-sm-1 col-6 DoctorSubCard active`}
                                >
                                    <img
                                        className="arrow"
                                        src={'/whiteDownArrow.svg'}
                                        alt="Card1"
                                    />
                                    <p className="text">
                                        {selectedCard?.name} <br />
                                        {selectedCard?.subName}
                                    </p>

                                     <img
                                        className="icon"
                                        src={selectedCard?.activeIconPath}
                                        alt="Card1"
                                    />
                                </div>
                            
                    </div>
                }

                <div className="DoctorCard2 grid-container row">

                    {doctorCardInitialArray
                        .filter(
                        (doctorCard: DiseaseCategory) => doctorCard.name === activeCardkey
                        )[0]
                        ?.diseases?.map((disease: string) => (
                        <div className="items" key={disease}>
                            <p>{disease}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DoctorWillSeeYou