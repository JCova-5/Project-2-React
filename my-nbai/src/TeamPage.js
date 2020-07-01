import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import TeamInfo from './TeamInfo';

export default function TeamPage() {

    useEffect(() => {
        TeamPageInfo();
    }, []);

    const [teams, setTeams] = useState([]);


    const TeamPageInfo = async () => {
        const data = await fetch ('https://www.balldontlie.io/api/v1/teams')
        const teams = await data.json();
        console.log(teams.data)
        setTeams(teams.data);
    }





    return (
        <div>
            
            <h1 id="team-info">Team Info Page</h1>
            <img src="https://www.basketballnetwork.net/app/uploads/2018/02/nba-teams.jpg" alt="NBA Team Logos"></img>
            {teams.map(team => (
                <h2 key={team.id} className='team-name'>
                <Link to={`./teamPage/${team.id}`}>{team.full_name}</Link>
                </h2>
            ))}
        </div>
    );
}
























