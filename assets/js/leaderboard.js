/* eslint-env es6 */
document.addEventListener('DOMContentLoaded', function() {
  // Function to get the query parameter value by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Retrieve the player's name from the query parameter
  const playerName = getQueryParam('name');

  // Function to update the leaderboard
  function updateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard-table');
  
    if (playerName && leaderboardTable) {
      const tbody = leaderboardTable.querySelector('tbody');
      if (tbody) {
        const newRow = tbody.insertRow();
        const playerNameCell = newRow.insertCell(0);
        playerNameCell.textContent = playerName;
      }
    }
  }


  // Call the updateLeaderboard function to update the leaderboard with the player's name
  updateLeaderboard();
});