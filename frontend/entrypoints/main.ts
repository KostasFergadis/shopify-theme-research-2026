import 'vite/modulepreload-polyfill'; 
import '../styles/main.css';

// Import your libraries
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import EmblaCarousel from 'embla-carousel';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Basic Lenis smooth scroll setup
const lenis = new Lenis();
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

console.log('Vite pipeline, GSAP, and Tailwind loaded successfully!');