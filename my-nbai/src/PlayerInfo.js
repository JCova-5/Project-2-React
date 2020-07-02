import React, {useState,useEffect} from 'react'


export default function PlayerInfo(props) {
        // console.log(props)
        useEffect(() => {
            PlayerPageInfo();
        }, [props]);
    
        const [players, setPlayers] = useState({});
    
    
        const PlayerPageInfo = async () => {
            const data = await fetch (`https://www.balldontlie.io/api/v1/players/${props.match.params.id}`)
            const players = await data.json();
            // console.log(players);
            setPlayers(players);
        };
    
    
    
    
        return (
            <div className='nba-players'>
                <h1>Player: {players.first_name} {players.last_name}</h1>
                <h2>Height: {players.height_feet} {players.height_inches}</h2>
                <h2>Position: {players.position}</h2>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxJEa8HYW4cZylteKROPdRtwrTIIpefGeYZA&usqp=CAU' alt='nba players'/>
            </div>
        );
};
