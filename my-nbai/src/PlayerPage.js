import React, {useState, useEffect} from 'react';
    import './App.css';
    import {Link} from 'react-router-dom';
    import TeamInfo from './TeamInfo';

export default function PlayerPage() {
    
    
 
    
        useEffect(() => {
            PlayerPageInfo();
        }, []);
    
        const [players, setPlayers] = useState([]);
    
    
        const PlayerPageInfo = async () => {
            const data = await fetch ('https://www.balldontlie.io/api/v1/players/')
            const players = await data.json();
            console.log(players.data)
            setPlayers(players.data);
        };
    
    
    
    
    
        return (
            <div>
                
                <h1 id="player-info">Player Info Page</h1>
                <img src="https://www.basketballnetwork.net/app/uploads/2018/02/nba-teams.jpg" alt="NBA Team Logos"></img>
                {players.map(player => (
                    <h2 key={player.id} className='player-name'>
                    <Link to={`./playerPage/${player.id}`}>{player.first_name}</Link>
                    </h2>
                ))}
            </div>
        );
    };
    
