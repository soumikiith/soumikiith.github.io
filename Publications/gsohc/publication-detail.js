document.addEventListener('DOMContentLoaded', function() {
    // Citation Copy Functionality
    const citationCopyBtn = document.querySelector('.copy-citation-btn');
    
    if (citationCopyBtn) {
        citationCopyBtn.addEventListener('click', function() {
            const citationText = document.querySelector('.citation-block p').textContent;
            
            // Create a temporary textarea to copy text
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = citationText;
            document.body.appendChild(tempTextArea);
            
            // Select and copy the text
            tempTextArea.select();
            document.execCommand('copy');
            
            // Remove the temporary textarea
            document.body.removeChild(tempTextArea);
            
            // Optional: Provide visual feedback
            this.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-copy"></i> Copy Citation';
            }, 2000);
        });
    }
    
    // Audio Summary Functionality
    const audioBtn = document.querySelector('.audio-btn');
    const audioPlayer = document.getElementById('summary-audio');
    const progressBar = document.getElementById('audioProgressBar');
    const currentTimeElement = document.getElementById('currentTime');
    const durationElement = document.getElementById('duration');
    const progressContainer = document.querySelector('.audio-progress');
    
    if (audioBtn && audioPlayer) {
        console.log("Audio elements found and initialized");
        
        // Make sure the audio file is ready
        audioPlayer.load();
        
        // Format time in minutes:seconds
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        }
        
        // Update progress bar and time display
        function updateProgress() {
            if (audioPlayer.duration) {
                const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                progressBar.style.width = percent + '%';
                currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
                durationElement.textContent = formatTime(audioPlayer.duration);
            }
        }
        
        // Handle metadata loaded - when we know the duration
        audioPlayer.addEventListener('loadedmetadata', function() {
            durationElement.textContent = formatTime(audioPlayer.duration);
        });
        
        // Update progress as audio plays
        audioPlayer.addEventListener('timeupdate', updateProgress);
        
        // Allow seeking when clicking on progress bar
        if (progressContainer) {
            progressContainer.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                audioPlayer.currentTime = percent * audioPlayer.duration;
                updateProgress();
            });
        }
        
        // Toggle audio play/pause on button click
        audioBtn.addEventListener('click', function() {
            console.log("Audio button clicked");
            
            try {
                if (audioPlayer.paused) {
                    console.log("Attempting to play audio");
                    
                    // Play the audio with promise to handle errors properly
                    const playPromise = audioPlayer.play();
                    
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            // Playback started successfully
                            console.log("Audio playback started successfully");
                            this.innerHTML = '<i class="fas fa-pause"></i> Pause Summary';
                        })
                        .catch(error => {
                            // Auto-play was prevented or other error
                            console.error("Audio playback failed:", error);
                            alert("Audio playback failed: " + error);
                            this.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Playback Error';
                        });
                    }
                } else {
                    console.log("Pausing audio");
                    audioPlayer.pause();
                    this.innerHTML = '<i class="fas fa-play"></i> Play Summary';
                }
            } catch (e) {
                console.error("Error with audio playback:", e);
                alert("There was an error playing the audio file: " + e.message);
            }
        });
        
        // Reset button text when audio ends
        audioPlayer.addEventListener('ended', function() {
            console.log("Audio playback ended");
            audioBtn.innerHTML = '<i class="fas fa-headphones"></i> Listen to Summary';
            progressBar.style.width = '0%';
            currentTimeElement.textContent = '0:00';
        });
    } else {
        console.error("Audio button or player not found!");
    }
    
    // Author Interview Button
    const interviewBtn = document.querySelector('.audio-btn-interview');
    if (interviewBtn) {
        interviewBtn.addEventListener('click', function() {
            alert("Author interview coming soon!");
        });
    }

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});