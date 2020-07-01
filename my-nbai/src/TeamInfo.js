import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function TeamInfo(props) {
    console.log(props)
    useEffect(() => {
        TeamPageInfo();
    }, [props]);

    const [teams, setTeams] = useState({});


    const TeamPageInfo = async () => {
        const data = await fetch (`https://www.balldontlie.io/api/v1/teams${teams.id}`)
        const teams = await data.json();
        console.log(teams.data)
        setTeams(teams.data);
    }





    return (
        <div>
            <h1>{teams.full_name}</h1>
        </div>
    );
 }
