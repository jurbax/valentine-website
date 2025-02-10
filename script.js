  const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const response = document.getElementById('response');
    const gifContainer = document.getElementById('gifContainer');
    const yesMusic = document.getElementById('yesMusic');
    const noMusic = document.getElementById('noMusic');

    let yesCount = 0;
    let noCount = 0;

    yesButton.addEventListener('click', () => {
      yesCount++;
      response.textContent = `YAY! You've made me the happiest person ever! 💖 (Clicked ${yesCount} times)`;
      
      // Play Yes Music with Error Handling
      yesMusic.currentTime = 0; 
      yesMusic.play()
        .then(() => console.log("Yes music playing"))
        .catch(err => console.error("Yes music failed to play:", err));

      noMusic.pause();

      // Confetti
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    });

    noButton.addEventListener('click', () => {
      noCount++;
      response.textContent = `Wait, what? Let me try again! 😅 (Clicked ${noCount} times)`;

      // Move NO button
      noButton.style.position = 'absolute';
      noButton.style.left = `${Math.random() * 80}%`;
      noButton.style.top = `${Math.random() * 80}%`;

      // Play No Music with Error Handling
      noMusic.currentTime = 0; 
      noMusic.play()
        .then(() => console.log("No music playing"))
        .catch(err => console.error("No music failed to play:", err));

      yesMusic.pause();
    });
 