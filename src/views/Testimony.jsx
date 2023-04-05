import React from 'react';
import { Link } from 'react-router-dom';
import Lary from '../Lary.png';
import Terry from '../Terry.png';
import Gary from '../Gary.png';

const Testimony = () => {

  return (
    <>
    <div className="johnwick">
      <h1>Testimony</h1>
      <button className="redOne"><Link to={'/'}>Go back</Link></button>
      <div>
        <p>Here are some of the completed missions and stories from sar rescue volunteers themselves.</p>
        <img className="patriot" src={Lary} alt="Lary" />
        <img className="patriot" src={Terry} alt="Terry" />
        <img className="patriot" src={Gary} alt="Gary" />
      </div>
    <div className="colorMeSilly">
      <p id="laryT">'Lary' Christchurch Alpine Cliff rescue team have been growing of recent years and we were looking for a management service for the team that could handle our growing needs being a volunteer rescue team that has limited funds each year</p>
      <p id="terryT">'Gary' just tried out the app on both my Iphone and android phone, and am definitely impressed with where this is going! I quickly made an edit to my contact info that I'd forgotten about, and registered for an upcoming course and both worked perfectly. With all the record-keeping requirements that are in the new safety plan I can see SAR groups needing a system with an interface that's as user-friendly as possible.</p>
      <p id="garyT"> 'Terry' WGSAR was looking for a better way to manage our group information. We used spreadsheets and word processing lists to record all our information. After using Volunteer Rescue, we found that we could enter data once and then retrieve the information for our various needs. The support from the Volunteer Rescue staff is quick and useful. Tracking volunteer hours and coordinating events has never been easier and it does much more</p>
    </div>
    </div>
    </>
  )
}

export default Testimony