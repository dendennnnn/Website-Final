document.addEventListener('DOMContentLoaded', () => {
  const pickButton = document.getElementById('pickButton');
  const clearButton = document.getElementById('clearButton');
  const namesInput = document.getElementById('namesInput');
  const pickedName = document.getElementById('pickedName');
  const totalNames = document.getElementById('totalNames');
  const randomIndex = document.getElementById('randomIndex');

  pickButton.addEventListener('click', () => {
    const names = namesInput.value
      .split('\n')
      .map(name => name.trim())
      .filter(name => name !== '');

    totalNames.textContent = `Total names: ${names.length}`;

    if (names.length === 0) {
      pickedName.textContent = '';
      randomIndex.textContent = 'Random number picked: -';
      return;
    }

    const index = Math.floor(Math.random() * names.length);
    randomIndex.textContent = `Random number picked: ${index + 1}`;
    pickedName.textContent = names[index];
  });

  clearButton.addEventListener('click', () => {
    namesInput.value = '';
    pickedName.textContent = '';
    totalNames.textContent = 'Total names: 0';
    randomIndex.textContent = 'Random number picked: 0';
  });
});
