import React from 'react'
import { Link } from 'react-router-dom';
import sar from '../sar.png';

const Dashboard = () => {
  return (
    <>
<div>
    <h1>Dashboard</h1>
    <h1>SAR, LEARN TO SERVE:</h1>
    <a href="https://www.fema.gov/emergency-managers/national-preparedness/training">so that others may live</a>|
    <a href="https://www.usfa.fema.gov/nfa/">Fire rescue</a>|
    <a href="https://cdp.dhs.gov/">SAR casualty</a>|
    <a href="https://training.fema.gov/emi.aspx">EMERGENCY MGMT</a>|
    <a href="https://ruraltraining.org/">Rural/country SAR</a>|
    <a href="https://training.fema.gov/hiedu/">Higher education</a>
</div>
    <div>
        <h3>How To Get Involved:</h3>
        <p>Search and rescue or SAR is all about helping people, family, communities in times of need.
        You dont have to have any extensive amount of military training or college to be a hero to your neighbors,
        family or community in times of need or distress. SAR is all about being where your needed to fulfill a roll
        as part of a team. The mission continues, so what are you waiting for ?
        </p>
    <Link to='/Testimony'>next page...</Link>
        <h2>below is an list of active organizations seeking volunteers</h2>
        <select>
            <option hidden>volunteer</option>
            <option>FDR - florida disaster rescue</option>
            <option>P.E.R.T - Patriot Emergency Response Team</option>
            <option>Cajun Navy</option>
            <option>50 Star Sar</option>
        </select>
        <div className="heroo">
            <img className='hero' src={sar} alt="SAR" />
        </div>
    </div>
    </>
    )
}

export default Dashboard