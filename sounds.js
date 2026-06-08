let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playSound(type) {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        
        switch (type) {
            case 'move': {
                // Short, low-pitched wood block plop
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
                
                gain.gain.setValueAtTime(0.4, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(now);
                osc.stop(now + 0.1);
                break;
            }
            case 'capture': {
                // Sharp click/impact followed by short decay
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(260, now);
                osc.frequency.exponentialRampToValueAtTime(110, now + 0.07);
                
                gain.gain.setValueAtTime(0.5, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
                
                osc.connect(gain);
                
                // Add a bit of white noise for the capture impact crackle
                const bufferSize = ctx.sampleRate * 0.03;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;
                const noiseGain = ctx.createGain();
                noiseGain.gain.setValueAtTime(0.12, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);
                
                noise.connect(noiseGain);
                noiseGain.connect(ctx.destination);
                gain.connect(ctx.destination);
                
                osc.start(now);
                noise.start(now);
                osc.stop(now + 0.07);
                noise.stop(now + 0.03);
                break;
            }
            case 'check': {
                // Two quick warning notes (high-pitch alert)
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.setValueAtTime(440, now + 0.05);
                osc.frequency.setValueAtTime(540, now + 0.06);
                
                gain.gain.setValueAtTime(0.25, now);
                gain.gain.setValueAtTime(0.25, now + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(now);
                osc.stop(now + 0.2);
                break;
            }
            case 'game-over': {
                // A beautiful, low major chord resolving
                const freqs = [130.81, 164.81, 196.00, 261.63]; // C3, E3, G3, C4
                freqs.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now);
                    osc.detune.setValueAtTime(idx * 3 - 4.5, now);
                    
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
                    
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    
                    osc.start(now);
                    osc.stop(now + 1.0);
                });
                break;
            }
            case 'castle': {
                // Double slide/click (king & rook slide)
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.linearRampToValueAtTime(220, now + 0.06);
                osc.frequency.setValueAtTime(180, now + 0.07);
                osc.frequency.linearRampToValueAtTime(220, now + 0.14);
                
                gain.gain.setValueAtTime(0.3, now);
                gain.gain.setValueAtTime(0.3, now + 0.06);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(now);
                osc.stop(now + 0.18);
                break;
            }
        }
    } catch (e) {
        console.warn('Audio play failed', e);
    }
}
