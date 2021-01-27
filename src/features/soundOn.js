export const soundOn = (audio) => {
    const sound = new Audio(audio);
    let playPromise = sound.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI. 
          });
      }
    
}
