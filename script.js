$(document).ready(function () {
  const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function getResult(player, computer) {
    if (player === computer) return "It's a draw! 😐";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You win! 🥳";
    }
    return "You lose! 😢";
  }

  $(".choice-btn").click(function () {
    const playerChoice = $(this).data("choice");
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    $("#player-choice").text(playerChoice);
    $("#computer-choice").text(computerChoice);
    $("#outcome").text(result);
  });
});
