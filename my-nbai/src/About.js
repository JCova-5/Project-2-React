import React from 'react'

export default function About() {
    return (
        <div>
            <h1>About NBA-I</h1>
            <p>NBA-I is an app created for you to find team and player information. 
                Here you will find a list of teams to choose from and you will be able
                to select a team displaying a small team bio. You will also be able
                to do the same for players and it will display height weight position etc..
            </p>
            <h2>Covid-19 Updates</h2>
            <ul className='about-list'>
                <li>Stats will not be posted until NBA season returns.</li>
                <li>The NBA is scheduled to return July 30th. </li>
                <li>With recent Covid outbreaks the NBA may not return to finish 19-20 season.</li>
            </ul>
        </div>
    )
}
