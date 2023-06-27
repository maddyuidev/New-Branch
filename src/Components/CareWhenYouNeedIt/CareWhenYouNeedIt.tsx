import './CareWhenYouNeedIt.scss';
import React from 'react';

interface CareWhenYouNeedItProps {
  mainlogo?: string;
  CareImage?: string;
  CardShadow?: string;
  steth?: string;
  dollar?: string;
  thum?: string;
  star?: string;
}

const CareWhenYouNeedIt: React.FC<CareWhenYouNeedItProps> = ({
  mainlogo,
  CareImage,
  CardShadow,
  steth,
  dollar,
  thum,
  star,
}) => {
  return (
    <section className="CareWhenYouNeedIt row">
      <div className="CareWhenYouNeedItLeft col-md-6 col-12">
        <h2 className="title">Care when you need it</h2>
        <p className="subtitle">
          Explore top-rated doctors at unbeatable prices. Find the care you need and schedule an appointment within minutes.
        </p>
        <div className="btnDiv row">
          <button className="TelemedicineAppointment col-md-5 col-6">Telemedicine Appointment</button>
          <button className="PrescriptionRefill col-md-4 col-5">Prescription Refill</button>
        </div>
        <div className="CareWhenYouNeedItRight CareWhenYouNeedItRightMb  col-md-6 col-12 d-sm-none">
          <img src={"/CareImage.png"} alt="CareImage" />
        </div>
        <div className="CareSavingDiv row">
          <div className="CareSavingCard col-md-4 col-5">
            <div className="CareCardDetails">
              <div className="CareCardTop">
                <div className="logo">
                  <img src={"/mainlogo.svg"} alt="mainlogo" />
                </div>
                <div className="text">
                  Prescription <br /> Saving Card
                </div>
              </div>
              <div className="CareCardBottom">
                <div className="CareCardBottomLeft">
                  <ul>
                    <li>Member ID: 021916</li>
                    <li>BIN: 021916</li>
                    <li>PCN: 021916</li>
                    <li>Group: 021916</li>
                  </ul>
                </div>
                <div className="CareCardBottomRight">
                  <span className="span1">Save</span> <br />
                  <span className="span2">87%</span>
                </div>
              </div>
            </div>
            <div className="CareCardImg">
              <img src={"/CardShadow.png"} alt="CardShadow" />
            </div>
          </div>
          <div className="CareSavingList col col-8">
            <ul>
              <li>
                <img src={"/steth.svg"} alt="steth" />
                <span>Thousands&nbsp;</span> of doctors and specialists
              </li>
              <li>
                <img src={"/dollar.svg"} alt="dollar" />
                <span>$25,000,000+&nbsp;</span> saved by patients
              </li>
              <li>
                <img src={"/thum.svg"} alt="thum" />
                <span>95%&nbsp;</span> patient satisfaction
              </li>
              <li>
                <img src={"/star.svg"} alt="star" />
                <span>4.3&nbsp;</span> on Trustpilot
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="CareWhenYouNeedItRight col-md-6 col-12 d-none d-sm-block">
        <img src={"/CareImage.png"} alt="CareImage" />
      </div>
    </section>
  );
};

export default CareWhenYouNeedIt;
