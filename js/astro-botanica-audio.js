/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Procedural Web Audio Soundscape Engine
 * Zero external audio assets; 100% synthesized via native Web Audio API.
 * Muted by default (respects autoplay policies and user accessibility).
 *  - Soft orbital habitat ambient hum
 *  - Subtle Geiger ticks on Radiation & DNA Repair volumes
 *  - Tactile page-turn noise burst, telemetry chime, and quiz mastery arpeggio
 */
(function () {
  "use strict";

  let audioCtx = null;
  let enabled = false;
  let droneGain = null;
  let droneOsc1 = null;
  let droneOsc2 = null;
  let geigerTimer = null;
  let currentDomain = "";

  function ensureContext() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function startAmbience() {
    const ctx = ensureContext();
    if (!ctx || droneGain) return;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 180;

    droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    droneGain.gain.exponentialRampToValueAtTime(0.022, ctx.currentTime + 0.8);

    droneOsc1 = ctx.createOscillator();
    droneOsc1.type = "sine";
    droneOsc1.frequency.value = 58;

    droneOsc2 = ctx.createOscillator();
    droneOsc2.type = "triangle";
    droneOsc2.frequency.value = 87.3;

    droneOsc1.connect(filter);
    droneOsc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(ctx.destination);

    droneOsc1.start();
    droneOsc2.start();
    updateGeigerLoop();
  }

  function stopAmbience() {
    if (geigerTimer) {
      clearInterval(geigerTimer);
      geigerTimer = null;
    }
    if (droneGain && audioCtx) {
      try {
        droneGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
        setTimeout(() => {
          try {
            droneOsc1?.stop();
            droneOsc2?.stop();
          } catch (_) {}
          droneOsc1 = null;
          droneOsc2 = null;
          droneGain = null;
        }, 280);
      } catch (_) {
        droneOsc1 = null;
        droneOsc2 = null;
        droneGain = null;
      }
    }
  }

  function playGeigerTick() {
    if (!enabled || !audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(1600 + Math.random() * 600, now);
    g.gain.setValueAtTime(0.015, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);
    osc.connect(g);
    g.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.014);
  }

  function updateGeigerLoop() {
    if (geigerTimer) {
      clearInterval(geigerTimer);
      geigerTimer = null;
    }
    if (!enabled) return;
    if (currentDomain.toLowerCase().includes("radiation")) {
      geigerTimer = setInterval(() => {
        if (Math.random() < 0.45) playGeigerTick();
      }, 650);
    }
  }

  function play(kind) {
    if (!enabled) return;
    const ctx = ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (kind === "page") {
      // Soft filtered noise burst simulating manga page turn
      const bufSize = Math.floor(ctx.sampleRate * 0.08);
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 1200;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.06, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      src.connect(bp);
      bp.connect(g);
      g.connect(ctx.destination);
      src.start(now);
      return;
    }

    if (kind === "success") {
      // Warm ascending 3-note science discovery chime
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.075);
        g.gain.setValueAtTime(0.045, now + idx * 0.075);
        g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.075 + 0.24);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(now + idx * 0.075);
        osc.stop(now + idx * 0.075 + 0.25);
      });
      return;
    }

    if (kind === "telemetry") {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1180, now + 0.06);
      g.gain.setValueAtTime(0.032, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
      return;
    }

    // Subtle mechanical click
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(420, now);
    g.gain.setValueAtTime(0.025, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  function toggle(domain, world) {
    currentDomain = domain || "";
    enabled = !enabled;
    if (enabled) {
      startAmbience();
      play("telemetry");
    } else {
      stopAmbience();
    }
    return enabled;
  }

  function setEnvironment(domain) {
    currentDomain = domain || "";
    updateGeigerLoop();
  }

  window.AstroBotanicaAudio = {
    toggle,
    play,
    setEnvironment,
    isEnabled: () => enabled
  };
})();
