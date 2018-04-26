export const GUESSING = 'GUESSING';
export const makingGuess = guess =>({
    type: GUESSING,
    guess
});

export const RESTART = "RESTART_GAME";
export const restartGame = correctAnswer => ({
    type: RESTART,
    correctAnswer
});

export const GENERATE_AURAL_UPDATE = "GENERATE_AURAL_UPDATE";
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});
