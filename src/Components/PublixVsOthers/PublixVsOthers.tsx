import './PublixVsOthers.css';


const PublixVsOthers = () => {
    return (
        <section className="PublixVsOthers">
            <div className="PublixVsOthersLeft">
                <h2 className="title1">Publix vs. Others</h2>
                <p className="subtitle">
                    Don’t wait weeks for an appointment. Our doctors, therapists, and specialists can help you with the flu, infections, anxiety, stress, skin conditions, and provide advice on serious medical conditions. No matter what you're facing, we’re available from wherever you are by phone, video, or app.
                </p>
            </div>
            <div className="PublixVsOthersRight">
                <div className='boxleft'>
                    <div className='box1'>
                        <div className='content'>
                            <div className='contentHead'>
                                <p>Publix</p>
                            </div>
                            <div className='contentBody'>
                                <p className='h15'>Visit Fee</p>
                                <p className='h15'>Rating</p>
                                <p className='h30'>Type of Consultation</p>
                                <p className='h15'>Weekends & Nights</p>
                                <p className='h15'>Refundable?</p>
                                <p className='h15'>MD Cost</p>
                            </div>
                        </div>
                    </div>
                    <div className='box2 mr20'>
                        <div className='content'>
                            <div className='contentHead'>
                                <p>Publix</p>
                            </div>
                            <div className='contentBody nonMobile'>
                                <p className='bold h15'>$40</p>
                                <p className='bold h15'>
                                    <img className='star' src={'/PublixVsOthers/Star_Orange.svg'} alt="Star" />4.9
                                </p>
                                <p className='h30'>Online form submission, <br />takes mins</p>
                                <p className='h15'>Open</p>
                                <p className='h15'><img className='icons' src={'/PublixVsOthers/Vector.png'} alt="Vector" /></p>
                                <p className='h15'>Up to 87% discount</p>
                            </div>
                            <div className='contentBody mobile'>
                                <p className='bold h15'>
                                     <span className='label'>Visit Fee</span>
                                    <span>$40</span>
                                </p>
                                <p className='bold h15'>
                                    <span className='label'>Rating</span>
                                    <span>
                                        <img className='star' src={'/PublixVsOthers/Star_Orange.svg'} alt="Star" />4.9
                                    </span>
                                </p>
                                <p className='nonFlex'>
                                    <span className='label'>Type of Consultation</span>
                                    <span className='blockEl'>
                                        Online form submission, <br />takes mins
                                    </span>
                                </p>
                                <p className='nonFlex'>
                                    <span className='label'>Weekends and Nights</span>
                                    <span className='blockEl'>
                                        Open
                                    </span>
                                </p>
                                <p className='bold'>
                                    <span className='label'>Refundable</span>
                                    <span>
                                        <img className='icons' src={'/PublixVsOthers/Vector.png'} alt="Vector" />
                                    </span>
                                </p>
                                
                                <p className='nonFlex'>
                                    <span className='label'>MD Cost</span>
                                    <span className='blockEl'>
                                        Up to 87% discount
                                    </span>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='boxright'>
                    <div className='box3'>
                        <div className='content'>
                            <div className='contentHead'>
                                <p>Others</p>
                            </div>
                            <div className='contentBody nonMobile'>
                                <p className='bold h15'>
                                    $80 - $250
                                </p>
                                <p className='bold h15'>
                                    <img className='star' src={'/PublixVsOthers/Star_Orange.svg'} alt="Star" />3.5
                                </p>
                                <p className='h30'>Appointment needed, <br /> takes hours</p>
                                <p className='h15'>Unreliable</p>
                                <p className='h15'><img className='icons' src={'/PublixVsOthers/Vector1.png'} alt="Vector1" /></p>
                                <p className='h15'>Full Price</p>
                            </div>
                            <div className='contentBody mobile'>
                                <p className='bold h15'>
                                     <span className='label'>Visit Fee</span>
                                    <span>$80 - $250</span>
                                </p>
                                <p className='bold h15'>
                                    <span className='label'>Rating</span>
                                    <span>
                                        <img className='star' src={'/PublixVsOthers/Star_Orange.svg'} alt="Star" />3.5
                                    
                                    </span>
                                </p>
                                <p className='nonFlex'>
                                    <span className='label'>Type of Consultation</span>
                                    <span className='blockEl'>
                                
                                    Appointment needed, <br /> takes hours
                                    </span>
                                </p>
                                 <p className='nonFlex'>
                                    <span className='label'>Weekends and Nights</span>
                                    <span className='blockEl'>
                                        Unreliable
                                    </span>
                                </p>
                                
                                <p className='bold'>
                                    <span className='label'>Refundable</span>
                                    <span>
                                        <img className='icons' src={'/PublixVsOthers/Vector1.png'} alt="Vector1" />
                                    </span>
                                </p>
                                 <p className='nonFlex'>
                                    <span className='label'>MD Cost</span>
                                    <span className='blockEl'>
                                        Full Price
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PublixVsOthers

// import './PublixVsOthers.css';
// import React from 'react';



// interface PublixVsOthersProps {
//   publixVisitFee?: string;
//   publixRating?: number;
//   publixConsultationType?: string;
//   publixWeekendsAndNights?: string;
//   publixRefundable?: boolean;
//   publixMdCost?: string;
//   otherVisitFee?: string;
//   otherRating?: number;
//   otherConsultationType?: string;
//   otherWeekendsAndNights?: string;
//   otherRefundable?: boolean;
//   otherMdCost?: string;
// }

// const PublixVsOthers: React.FC<PublixVsOthersProps> = ({
//   publixVisitFee = '$40',
//     publixRating= 4.9,
//   publixConsultationType= 'Online form submission,takes mins',
//   publixWeekendsAndNights= 'open',
//   publixMdCost= 'Up to 87% discount',
//   otherVisitFee= '$80 - $250',
//   otherRating= 3.5,
//   otherConsultationType= 'Appointment needed,takes hours',
//   otherWeekendsAndNights= 'Unreliable',
//   otherMdCost= 'Full Price',
// }) => {
//   return (
//     <section className='PublixVsOthers'>
//       <div className='PublixVsOthersLeft'>
//         <h2 className='title1'>Publix vs. Others</h2>
//         <p className='subtitle'>
//           Don’t wait weeks for an appointment. Our doctors, therapists, and specialists can help you with the flu, infections, anxiety, stress,skin conditions, and provide advice on serious medical conditions. No matter what you're facing, we’re available from wherever you are by phone, video, or app.
//         </p>
//       </div>
//       <div className='PublixVsOthersRight'>
//         <div className='boxleft'>
//           <div className='box1'>
//             <div className='content'>
//               <div className='contentHead'>
//                 <p>Publix</p>
//               </div>
//               <div className='contentBody'>
//                 <p className='h15'>Visit Fee</p>
//                 <p className='h15'>Rating</p>
//                 <p className='h30'>Type of Consultation</p>
//                 <p className='h15'>Weekends & Nights</p>
//                 <p className='h15'>Refundable?</p>
//                 <p className='h15'>MD Cost</p>
//               </div>
//             </div>
//           </div>
//           <div className='box2 mr20'>
//             <div className='content'>
//               <div className='contentHead'>
//                 <p>Publix</p>
//               </div>
//               <div className='contentBody'>
//                 <p className='bold h15'>{publixVisitFee}</p>
//                 <p className='bold h15'>
//                   <img className='star' src={'/PublixVsOthers/Star_Orange.svg'} alt='Star' />
//                   {publixRating}
//                 </p>
//                 <p className='h30'>{publixConsultationType}</p>
//                 <p className='h15'>{publixWeekendsAndNights}</p>
//                 <p className='h15'>
//                   <img className='icons' src={'/PublixVsOthers/Vector.png'} alt='Vector' />
//                 </p>
//                 <p className='h15'>{publixMdCost}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='boxright'>
//           <div className='box3'>
//             <div className='content'>
//               <div className='contentHead'>
//                 <p>Others</p>
//               </div>
//               <div className='contentBody'>
//                 <p className='bold h15'>{otherVisitFee}</p>
//                 <p className='bold h15'>
//                   <img className='star' src={'/PublixVsOthers/Star_Orange.svg'} alt='Star' />
//                   {otherRating}
//                 </p>
//                 <p className='h30'>{otherConsultationType}</p>
//                 <p className='h15'>{otherWeekendsAndNights}</p>
//                 <p className='h15'>
//                   <img className='icons' src={'/PublixVsOthers/Vector1.png'} alt='Vector1' />
//                 </p>
//                 <p className='h15'>{otherMdCost}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PublixVsOthers;