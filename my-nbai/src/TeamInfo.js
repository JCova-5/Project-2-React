import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function TeamInfo(props) {
    // console.log(props)
    useEffect(() => {
        TeamPageInfo();
    }, [props]);

    const [teams, setTeams] = useState({});


    const TeamPageInfo = async () => {
        const data = await fetch (`https://www.balldontlie.io/api/v1/teams/${props.match.params.id}`)
        const teams = await data.json();
        // console.log(teams);
        setTeams(teams);
    };





    return (
        <div className='team-info-page'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27834372255223.5be1732508c1e.jpg' alt='NBA TEAMs'/>
            <h1>{teams.abbreviation}</h1>
            <h2>{teams.full_name}</h2>
            <h2>Conference: {teams.conference}</h2>
            <h2>Division: {teams.division}</h2>
            <h2>Franchise Location: {teams.city}</h2>
            <h2>Mascot: {teams.name}</h2>
        </div>
    );
 };
