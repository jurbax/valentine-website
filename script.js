const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const gifContainer = document.getElementById('gifContainer');
const yesMusic = document.getElementById('yesMusic');
const noMusic = document.getElementById('noMusic');

let yesCount = 0;
let noCount = 0;

const dancingCats = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnlmdjU1YndiZnZ4NXR2aHIxY3B0MTg2dTRzNDY5dnB1NWIweXp4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pTfx2qLszoacZRS/giphy.gif", // Dancing cat 1
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHoyMGZvNTdodnJsZGNodnhwamJxMWJtbXZxMnBkODRhdnZoZWRnZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcJ6n6VJNjRNS/giphy.gif", // Dancing cat 2
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVxNGYzbGZndnhxaHN1dWgwaHVncmF2bjVweGx6M29tazZxN2R6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dg4TxjYikCpiGd7tYs/giphy.gif" // Heart eyes cat
];

const angryGifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDR6b2s3bmhteTVxa2JqanpkNWcxaDhoYXZubXI3MHMzMjI4engxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7rvF20PqNuGKSQGhf/giphy.gif", // Angry GIF 1
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHA2OHFiMm00eGJzZjltcnRmMG44M3NudnhzYXo0b3lld2g1ajE3aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OjGUvpfVI8SBNSEbo7/giphy.gif" // Angry GIF 2
];

yesButton.addEventListener('click', () => {
  yesCount++;
  response.textContent = `ABAY DAPAT LANG!!!!!! 💖 (Clicked ${yesCount} times)`;
  
  // Clear all GIFs from the "NO" button
  const noGifs = document.querySelectorAll('.no-gif');
  noGifs.forEach(gif => gif.remove());

  // Stop and reset the "NO" music
  noMusic.pause();
  noMusic.currentTime = 0;

  // Increase "YES" music volume (max 1.0)
  if (yesMusic.volume < 1.0) {
    yesMusic.volume += 0.1;
  }

  // Play "YES" music if it's not already playing
  if (yesMusic.paused) {
    yesMusic.currentTime = 0; // Restart the audio
    setTimeout(() => yesMusic.play(), 100); // Small delay to ensure it plays
  }

  // Add more GIFs at random locations and sizes
  const newGif = document.createElement('img');
  newGif.src = dancingCats[Math.floor(Math.random() * dancingCats.length)];
  newGif.classList.add('yes-gif'); // Add class for "YES" GIFs
  newGif.style.position = "absolute";
  newGif.style.left = `${Math.random() * 80}%`;
  newGif.style.top = `${Math.random() * 80}%`;
  newGif.style.width = `${100 + (Math.random() * 200)}px`; // Random size between 100px and 300px
  newGif.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
  gifContainer.appendChild(newGif);

  // Confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

noButton.addEventListener('click', () => {
  noCount++;
  response.textContent = `WTF!?!?!?!?! (Clicked ${noCount} times)`;
  
  // Clear all GIFs from the "YES" button
  const yesGifs = document.querySelectorAll('.yes-gif');
  yesGifs.forEach(gif => gif.remove());

  // Stop and reset the "YES" music
  yesMusic.pause();
  yesMusic.currentTime = 0;

  // Make YES button bigger
  const yesButtonSize = 16 + (noCount * 4); // Increase font size
  yesButton.style.fontSize = `${yesButtonSize}px`;

  // Move NO button around
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80}%`;
  noButton.style.top = `${Math.random() * 80}%`;

  // Play "NO" music if it's not already playing
  if (noMusic.paused) {
    noMusic.currentTime = 0; // Restart the audio
    setTimeout(() => noMusic.play(), 100); // Small delay to ensure it plays
  }

  // Show angry GIF at random location and size
  const angryGif = document.createElement('img');
  angryGif.src = angryGifs[Math.floor(Math.random() * angryGifs.length)];
  angryGif.classList.add('no-gif'); // Add class for "NO" GIFs
  angryGif.style.position = "absolute";
  angryGif.style.left = `${Math.random() * 80}%`;
  angryGif.style.top = `${Math.random() * 80}%`;
  angryGif.style.width = `${100 + (Math.random() * 200)}px`; // Random size between 100px and 300px
  angryGif.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
  gifContainer.appendChild(angryGif);
});