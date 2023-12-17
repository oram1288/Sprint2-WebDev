const amountOfGames = 82
// FETCH and READ the people.json disk file

fetch('./player.json')
  .then(response => response.json())
  .then(data => {
    // Create a container to hold the player data
    const container = document.createElement('div');
    container.id = 'playerContainer';

    // Loop through an array in the JSON data
    data.forEach(player => {
      // Create a new div for each player
      const playerDiv = document.createElement('div');
      playerDiv.className = 'player';

      // Add the player's data to the div
      playerDiv.innerHTML = `
        <h2>${getFullName(player)}</h2>
        <p>Player Number: ${player.number}</p>
        <p>Player Age: ${getAge(player)}</p>
        <p>Player Type: ${getPlayerTypes(player)}</p>
        <p>Player Salary: $${getSalary(player)}</p>
        <p>Player Salary Per Game: $${getSalaryPerGame(player)}</p>
        <p>Player Points: ${getPoints(player)}</p>
        <p>Player Points Per Game: ${getPointsPerGame(player)}</p>
      `;

      // Add the player's div to the container
      container.appendChild(playerDiv);

      // Also log the data to the console
      console.log(getFullName(player));
      console.log(player.number);
      console.log(getAge(player));
      console.log(getPlayerTypes(player));
      console.log(getSalary(player));
      console.log(getSalaryPerGame(player));
      console.log(getPoints(player));
      console.log(getPointsPerGame(player));
    });

    // Add the container to the body of the HTML
    document.body.appendChild(container);
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  // Functions being used
  function getPlayerTypes(player) {
    switch(player.playerType){
      case "sniper": 
        return`${player.fname} loves to put the puck in the back of the net.`;
        break;
      case "playmaker":
        return `${player.fname} makes plays happen all over the ice.`;
        break;
      case "offensive defencemen": 
        return`${player.fname} likes to jump up in the play.`;
        break;
      default:
        return `${player.fname} plays a solid defensive game.`;
    }
  }

  function getFullName(player) {
    return `${player.fname} ${player.lname}`;
  }

  function getAge(player) {    
    return `${player.fname} is ${new Date().getFullYear() - 
      new Date(player.birthday).getFullYear()} years old.`; 
  }

  function getPoints(player){
    return player.points;
  }

  function getPointsPerGame(player){
    return Math.round((player.points / amountOfGames)* 100.0) / 100.0;
  }

  function getSalary(player){
    return player.salary;
  }

  function getSalaryPerGame(player){
    return Math.round((player.salary / amountOfGames)* 100.0) / 100.0;
  }
