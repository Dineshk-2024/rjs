import React from 'react'

 class Message extends React.Component{
   state={
      Msg : " hello"
      
   } 
    img ={
        M_img : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAMFBgECB//EADAQAAIBAwIDBwEJAQAAAAAAAAECAwAEERIhBRMxIkFRYXGRodEUIzKBscHh8PEG/8QAGAEBAAMBAAAAAAAAAAAAAAAAAgABBAP/xAAdEQACAgIDAQAAAAAAAAAAAAAAAQIREkEDIjEh/9oADAMBAAIRAxEAPwD5FG7OFjWJGbpsuSaZjsriRj90yHOMFG+np71CmuKeN4RuN8H0q4seJX0kjFbeDZwzFnxnYKTufACszy0boLix7uiOXhCMkBt305iXmcwPvJuTpwvTGKrnikgUl4dicZdT1xn9K0U15dFgLW2BMRL4Yk4AGnO3kcVQ3NzNeW62cdvGoiYMCGwRpXT1J8AKMXJv6hTjwpXGViMj5bIUDyUbUU/EvLQDl5J3O/SuV0M5HBFM9xEUViXwFwM71ZqsanMxbmI51CLT08z41yxc5tlViDGHYEHG4UkfIFLWMTycOuWCPzA2XAGNKnAG/iTn2oejRpuHR29+lxJw2MwShzG7znmEpsT2cY6YOQO6j/q/s1vbtctZqpnUKk2N5WAGWwdhtj3qNbq5slEECrEkUCtPHEANchAGGPeMnx7vOs9xm/knbDSyOEHRui7Yxju76pJtieONEdxrik5ch7SgZ367UU04SVuYZcFgDsAe4UUzlZDapzNLLJodcFQcdph0FanhVjdcItW4hxAwRoJARFNEe0QHyDgYyTpwW2wCNqydm1sgfnugyPA/TemmurmLAtLmV9sYQtj0Izj/ACi4vQ1JL0aub29hgE9hd6JbhmaVgc5RguBg7dVb3qruA1xIJZXaR3OHYYAbw6ete51vHjxyZAQu5JUfFLwvJGpY6QQcaSNz5/zSUQtnrS6krnGnbFcrw7SMxJwCeuRq+TRV0UMwyrA+vkHfv17D8s0wvFZOSUd4Eye1gP8AtRRULOPxXKfdXKCUHvjkx/fOi54rO6lCIyCPxrqz80UVGUituEljk0jSds9mRW+RmiiipZdH/9k='

   }
   
   gmhandler=()=>{
    this.setState ({Msg :"good morning"})
   }
   gnhandler=()=>{
    this.setState ( {Msg: "good night"})
   }
  render() {
    return (
      <div>
        <h1>MESSAGE:{this.state.Msg}</h1>
        <button onClick={this.gmhandler}>GM</button>
        <button onClick={this.gnhandler}>GN</button>
        <button onClick={()=>{this.setState ({Msg: "good afternoon"})}}>GA</button>
        <br /><br />
        <img  className='' src={this.img.M_img}></img>
        
      </div>
    )
  }  
}

export default Message
