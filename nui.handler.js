const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

RegisterRawNuiCallback('scoreboard', async () => {});
