// index.js
const readline = require('readline');

// Playlist de músicas japonesas
const playlist = [
    { title: "Gurenge", artist: "LiSA" },
        { title: "Yoru ni Kakeru", artist: "YOASOBI" },
            { title: "Lemon", artist: "Kenshi Yonezu" },
                { title: "Kaikai Kitan", artist: "Eve" },
                    { title: "Stay With Me", artist: "Miki Matsubara" }
                    ];

                    let currentIndex = 0;
                    let isPlaying = false;

                    // Configuração do leitor de teclado
                    readline.emitKeypressEvents(process.stdin);
                    if (process.stdin.isTTY) {
                        process.stdin.setRawMode(true);
                        }

                        // Interface visual inicial
                        function updatedisplay() {
                            console.clear();
                                console.log("=== CONTROLE REMOTO J-POP ===");
                                    console.log(`Status: ${isPlaying ? "▶ Tocando" : "⏸ Pausado"}`);
                                        console.log(`Música: ${playlist[currentIndex].title}`);
                                            console.log(`Artista: ${playlist[currentIndex].artist}`);
                                                console.log("=============================");
                                                    console.log("\n[Espaço] Play/Pause | [→] Próxima | [←] Anterior | [Controle+C] Sair");
                                                    }

                                                    // Gerenciador de comandos
                                                    process.stdin.on('keypress', (str, key) => {
                                                        if (key.ctrl && key.name === 'c') {
                                                                process.exit();
                                                                    }

                                                                        switch (key.name) {
                                                                                case 'space':
                                                                                            isPlaying = !isPlaying;
                                                                                                        break;
                                                                                                                case 'right':
                                                                                                                            currentIndex = (currentIndex + 1) % playlist.length;
                                                                                                                                        break;
                                                                                                                                                case 'left':
                                                                                                                                                            currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
                                                                                                                                                                        break;
                                                                                                                                                                                default:
                                                                                                                                                                                            return; // Ignora outras teclas
                                                                                                                                                                                                }
                                                                                                                                                                                                    updatedisplay();
                                                                                                                                                                                                    });

                                                                                                                                                                                                    // Inicializa o painel
                                                                                                                                                                                                    updatedisplay();
                                                                                                                                                                                                    