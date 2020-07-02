# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link](https://5efe151084f6a0a29877d4da--confident-newton-7e8dbe.netlify.app/)

## Project Description

My project will be an NBA info page. You will be able to Tap on a team and find their information.
You will also be able to do the same for a player which will display a bit of information about the player.

## API

https://www.balldontlie.io/api/v1/players/








## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes](https://www.figma.com/file/z9tyc9XTJXGGIBbI787nte/Untitled?node-id=40%3A12)
- [add link to your react architecture](https://www.figma.com/file/q3dfFMsRx5wq8gVjxL2kD1/Untitled?node-id=4%3A2)


### MVP/PostMVP - 5min

After completion, user will be able to find player and team information. There will be a page for Team listing and the user will be able to tap on the team and see information displayed on page. This will be the same for the player page.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Display information by specific choice of player or team.

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | This will render the header include the nav | 
| Home | This component will show the home page content. Including link to different locations in the app |
| PlayerPage | This Will show the a list of players. | 
| PlayerInfo | PlayerInfo component will show a mini player bio |
| TeamPage | This will show a list of all NBA teams | 
| TeamInfo | This will render out the information of specific franchise. |
| About | Will show a bit about the app along with updates about NBA. | 






Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Home Component | H | 3hrs| 3hrs | 3hrs |
| Nav | H | 3hrs| 2.5hrs | 2.5hrs |
| PlayerPage component | H | 4hrs| 3hrs | 3hrs |
| PlayerInfo component | H | 3hrs| 3hrs | 3hrs |
| TeamPage component | H | 4hrs| 3.5hrs | 3.5hrs |
| TeamInfo component | H | 3hrs| 3hrs | 3hrs |
| About component | H | 2 hrs| 2 hrs | 2 hrs |
| Styling | M | 3hrs| 3hrs | 3hrs |
| Responsive | H | 3 hrs| 3 hrs | 3 hrs |
| Site Deployment | H | 1 hrs| 1 hrs | 1 hrs |
| Total | H | 30 hrs| 32 hrs | 32 hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
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
```
