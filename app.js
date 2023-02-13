const container = document.querySelector('.container');

const blocks = [100, 80, 60, 40, 20];

for (let i = 0; i < blocks.length; i++) {
  const block = document.createElement('div');
  block.classList.add('block');
  block.style.height = `${blocks[i]}px`;
  container.appendChild(block);

  for (let j = i + 1; j < blocks.length; j++) {
    if (blocks[j] < blocks[i]) {
      const water = document.createElement('div');
      water.classList.add('water');
      water.style.height = `${blocks[i] - blocks[j]}px`;
      container.appendChild(water);
    }
  }
}