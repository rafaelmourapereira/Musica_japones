// script.js
const playlist = [
    { title: "Gurenge", artist: "LiSA" },
        { title: "Yoru ni Kakeru", artist: "YOASOBI" },
            { title: "Lemon", artist: "Kenshi Yonezu" },
                { title: "Kaikai Kitan", artist: "Eve" },
                    { title: "Stay With Me", artist: "Miki Matsubara" }
                    ];

                    let currentIndex = 0;
                    let isPlaying = false;

                    const statusEl = document.querySelector('.status');
                    const titleEl = document.querySelector('.song-title');
                    const artistEl = document.querySelector('.artist-name');
                    const playBtn = document.querySelector('.btn-play');
                    const prevBtn = document.getElementById('prev'); 
                    const nextBtn = document.getElementById('next'); 

                    function updateRemoteDisplay() {
                        const currentSong = playlist[currentIndex];
                            titleEl.textContent = currentSong.title;
                                artistEl.textContent = currentSong.artist;
                                    
                                        if (isPlaying) {
                                                statusEl.textContent = "▶ Tocando";
                                                        playBtn.textContent = "⏸"; 
                                                                statusEl.style.color = "#00ffcc"; 
                                                                    } else {
                                                                            statusEl.textContent = "⏸ Pausado";
                                                                                    playBtn.textContent = "▶"; 
                                                                                            statusEl.style.color = "#ff3399"; 
                                                                                                }
                                                                                                }

                                                                                                playBtn.addEventListener('click', () => {
                                                                                                    isPlaying = !isPlaying;
                                                                                                        updateRemoteDisplay();
                                                                                                        });

                                                                                                        nextBtn.addEventListener('click', () => {
                                                                                                            currentIndex = (currentIndex + 1) % playlist.length;
                                                                                                                updateRemoteDisplay();
                                                                                                                });

                                                                                                                prevBtn.addEventListener('click', () => {
                                                                                                                    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
                                                                                                                        updateRemoteDisplay();
                                                                                                                        });

                                                                                                                        document.addEventListener('keydown', (event) => {
                                                                                                                            if (event.code === 'Space') {
                                                                                                                                    event.preventDefault(); 
                                                                                                                                            playBtn.click();
                                                                                                                                                } else if (event.code === 'ArrowRight') {
                                                                                                                                                        nextBtn.click();
                                                                                                                                                            } else if (event.code === 'ArrowLeft') {
                                                                                                                                                                    prevBtn.click();
                                                                                                                                                                        }
                                                                                                                                                                        });

                                                                                                                                                                        updateRemoteDisplay();
                                                                                                                                                                        