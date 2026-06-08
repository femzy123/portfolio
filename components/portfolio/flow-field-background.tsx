"use client";

import * as React from "react";

import type { SectionId } from "@/lib/portfolio-data";

type FlowFieldBackgroundProps = {
  activeSection: SectionId;
};

type Ribbon = {
  y: number;
  amplitude: number;
  speed: number;
  width: number;
  hue: number;
  phase: number;
  alpha: number;
};

type Particle = {
  ribbon: number;
  offset: number;
  speed: number;
  size: number;
  hue: number;
  phase: number;
};

const RIBBONS: Ribbon[] = [
  {
    y: 0.2,
    amplitude: 0.14,
    speed: 0.045,
    width: 22,
    hue: 208,
    phase: 0.2,
    alpha: 0.18,
  },
  {
    y: 0.4,
    amplitude: 0.1,
    speed: 0.06,
    width: 15,
    hue: 292,
    phase: 2.4,
    alpha: 0.14,
  },
  {
    y: 0.73,
    amplitude: 0.13,
    speed: 0.036,
    width: 18,
    hue: 224,
    phase: 4.1,
    alpha: 0.13,
  },
  {
    y: 0.9,
    amplitude: 0.08,
    speed: 0.052,
    width: 12,
    hue: 318,
    phase: 5.5,
    alpha: 0.11,
  },
];

const FRAME_INTERVAL = 1000 / 30;
const PARTICLES: Particle[] = Array.from({ length: 96 }, (_, index) => {
  const ribbon = index % RIBBONS.length;
  const seed = Math.sin((index + 1) * 91.73) * 10000;
  const random = seed - Math.floor(seed);

  return {
    ribbon,
    offset: random,
    speed: 0.018 + ((index * 17) % 31) / 2600,
    size: 0.65 + ((index * 13) % 19) / 11,
    hue: index % 5 === 0 ? 318 : index % 3 === 0 ? 224 : 190,
    phase: random * Math.PI * 2,
  };
});

const SECTION_INTENSITY: Record<SectionId, number> = {
  home: 0.56,
  experience: 0.28,
  skills: 0.36,
  projects: 0.28,
  services: 0.34,
  systems: 0.38,
  writing: 0.3,
  contact: 0.46,
};

function getRibbonPoint(
  ribbon: Ribbon,
  progress: number,
  width: number,
  height: number,
  time: number,
) {
  const horizontal = progress * width;
  const drift = time * ribbon.speed + ribbon.phase;
  const wave =
    Math.sin(progress * Math.PI * 2.1 + drift) * ribbon.amplitude +
    Math.sin(progress * Math.PI * 5.2 - drift * 1.5) * ribbon.amplitude * 0.35;

  return {
    x: horizontal,
    y: height * (ribbon.y + wave),
  };
}

function drawRibbonPath(
  context: CanvasRenderingContext2D,
  ribbon: Ribbon,
  width: number,
  height: number,
  time: number,
) {
  const steps = width < 768 ? 42 : 56;
  context.beginPath();

  for (let step = 0; step <= steps; step += 1) {
    const progress = step / steps;
    const point = getRibbonPoint(ribbon, progress, width, height, time);

    if (step === 0) {
      context.moveTo(point.x, point.y);
    } else {
      context.lineTo(point.x, point.y);
    }
  }
}

function drawFrame(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  intensity: number,
  reducedMotion: boolean,
) {
  const responsiveIntensity = intensity * (width < 768 ? 0.58 : 1);

  context.clearRect(0, 0, width, height);

  const vignette = context.createRadialGradient(
    width * 0.48,
    height * 0.5,
    0,
    width * 0.48,
    height * 0.5,
    Math.max(width, height) * 0.72,
  );
  vignette.addColorStop(0, `rgba(8, 18, 28, ${0.035 * responsiveIntensity})`);
  vignette.addColorStop(1, `rgba(0, 0, 0, ${0.18 * responsiveIntensity})`);
  context.fillStyle = vignette;
  context.fillRect(0, 0, width, height);

  context.save();
  context.globalCompositeOperation = "lighter";

  RIBBONS.forEach((ribbon, index) => {
    const ribbonTime = reducedMotion ? index * 0.7 : time;
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, `hsla(${ribbon.hue + 28}, 100%, 54%, 0)`);
    gradient.addColorStop(
      0.18,
      `hsla(${ribbon.hue + 8}, 100%, 64%, ${
        ribbon.alpha * responsiveIntensity
      })`,
    );
    gradient.addColorStop(
      0.48,
      `hsla(${ribbon.hue}, 100%, 58%, ${
        ribbon.alpha * 0.56 * responsiveIntensity
      })`,
    );
    gradient.addColorStop(
      0.76,
      `hsla(${ribbon.hue - 38}, 100%, 54%, ${
        ribbon.alpha * 0.42 * responsiveIntensity
      })`,
    );
    gradient.addColorStop(1, `hsla(${ribbon.hue - 18}, 100%, 48%, 0)`);

    drawRibbonPath(context, ribbon, width, height, ribbonTime);
    context.strokeStyle = gradient;
    context.lineWidth = ribbon.width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.shadowBlur = 34 * responsiveIntensity;
    context.shadowColor = `hsla(${ribbon.hue}, 100%, 62%, ${
      0.62 * responsiveIntensity
    })`;
    context.stroke();

    drawRibbonPath(context, ribbon, width, height, ribbonTime + 0.16);
    context.strokeStyle = `hsla(${ribbon.hue + 12}, 100%, 74%, ${
      0.18 * responsiveIntensity
    })`;
    context.lineWidth = Math.max(1, ribbon.width * 0.12);
    context.shadowBlur = 18 * responsiveIntensity;
    context.stroke();
  });

  PARTICLES.forEach((particle) => {
    const ribbon = RIBBONS[particle.ribbon];
    const progress = reducedMotion
      ? particle.offset
      : (particle.offset + time * particle.speed) % 1;
    const point = getRibbonPoint(ribbon, progress, width, height, time);
    const shimmer = reducedMotion
      ? 0.55
      : 0.45 + Math.sin(time * 2.4 + particle.phase) * 0.35;
    const size = particle.size * (1 + shimmer * 0.55);

    context.beginPath();
    context.fillStyle = `hsla(${particle.hue}, 100%, 66%, ${
      Math.max(0.08, shimmer) * 0.35 * responsiveIntensity
    })`;
    context.shadowBlur = 12 * responsiveIntensity;
    context.shadowColor = `hsla(${particle.hue}, 100%, 66%, ${
      0.72 * responsiveIntensity
    })`;
    context.arc(point.x, point.y, size, 0, Math.PI * 2);
    context.fill();
  });

  context.restore();
}

export function FlowFieldBackground({ activeSection }: FlowFieldBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const activeSectionRef = React.useRef(activeSection);

  React.useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;
    let width = 0;
    let height = 0;
    let reducedMotion = reducedMotionQuery.matches;
    let lastFrame = 0;

    const resize = () => {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.35);

      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.floor(nextWidth * pixelRatio);
      canvas.height = Math.floor(nextHeight * pixelRatio);
      canvas.style.width = `${nextWidth}px`;
      canvas.style.height = `${nextHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const render = (timestamp: number) => {
      if (!reducedMotion && timestamp - lastFrame < FRAME_INTERVAL) {
        frame = window.requestAnimationFrame(render);
        return;
      }

      lastFrame = timestamp;
      const intensity = SECTION_INTENSITY[activeSectionRef.current] ?? 0.6;
      const time = timestamp / 1000;

      drawFrame(context, width, height, time, intensity, reducedMotion);

      if (!reducedMotion) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const restart = () => {
      window.cancelAnimationFrame(frame);
      reducedMotion = reducedMotionQuery.matches;
      frame = window.requestAnimationFrame(render);
    };

    resize();
    restart();

    window.addEventListener("resize", resize, { passive: true });
    reducedMotionQuery.addEventListener("change", restart);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      reducedMotionQuery.removeEventListener("change", restart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 opacity-95 [mix-blend-mode:screen]"
    />
  );
}
