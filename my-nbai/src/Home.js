import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import TeamPage from './TeamPage'

export default function Nav() {

    const navColor = {
        color: 'white'
    };

    return (
        <div>
            <h1>My NBAI</h1>
            <img src='https://www.basketballnetwork.net/app/uploads/2018/02/nba-teams.jpg' alt="NBA Team Logos"/>
            <div className="page-links">
                <Link exact to="/" > 
                    <h3>Home</h3>
                </Link>
                <p>Find out about teams and players in the NBA. Find the About page to learn about NBA season updates.</p>
                <Link exact='true' to='/teamPage'>
                    <h3>TeamPage</h3>
                </Link>
                <p>Make your way into our team page to find out about a specific team to learn their division, conference, etc..</p>
                <Link to='/playerPage'>
                <h3>PlayerPage</h3>
                </Link>
                <p>Our player page has mini bios about players in the NBA. More and more players will be added soon!</p>

                <Link to='/about'>
                <h3>About</h3>
                </Link>
                <p>Head to our About Page to find updates on the NBA 2019-2020 season status.</p>
                <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZalYZH9pTyXmYFcHANbQsMv5hN6PcAfVc6w&usqp=CAU' alt='top 3 NBA players'/>
            </div>
        </div>
    );
};