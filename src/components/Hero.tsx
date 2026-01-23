import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowDown, Play, Pause } from 'lucide-react';

// Slide 1: Custom layout with animated images (Completely Locked Layout)
const Slide1 = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
      {/* 16:9 Stage - This locks the layout exactly like desktop */}
      <div className="relative w-full aspect-video md:h-full md:w-auto overflow-hidden shadow-2xl">
        
        {/* Background Image - Pinned to stage */}
        <img 
          src="/assets/hero_bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Title - Locked Position */}
        <motion.img 
          src="/assets/hero_title.png"
          alt="Raih Masa Depanmu Bersama Kami"
          className="absolute top-[15%] left-[8%] w-[60%] object-contain z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />

        {/* Blue Banner - Locked Position */}
        <motion.img 
          src="/assets/hero_banner.png"
          alt="Jurusan Proteksi Tanaman"
          className="absolute top-[32%] left-[8%] w-[38%] object-contain z-20"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* Badge - Locked Position (Centered below banner) */}
        <motion.div 
          className="absolute left-[8%] w-[38%] top-[65%] z-10 flex justify-center"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-full group w-[35%] aspect-square flex items-center justify-center">
            <motion.img 
              src="/assets/hero_badge.png"
              alt="5 Beasiswa Per Tahun"
              className="w-full h-full object-contain"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            {/* Glass Shine Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -skew-x-12"
              animate={{ 
                left: ['-100%', '200%'],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 2
              }}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </motion.div>

        {/* Right Side - People - Locked Position */}
        <motion.img 
          src="/assets/hero_people.png"
          alt="Tim Proteksi Tanaman"
          className="absolute right-[3%] bottom-[3%] w-[38%] h-auto object-contain object-bottom z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const slides = [
  {
    id: 1,
    type: 'custom',
    component: Slide1,
    title: { regular: 'Raih Masa', italic: 'Depanmu' },
    desc: 'Bergabung dengan program studi terbaik di bidang proteksi tanaman.',
    cta: 'Daftar Sekarang'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://www.youtube.com/embed/ITncc5Lxcsk?autoplay=1&mute=1&loop=1&playlist=ITncc5Lxcsk&controls=0&showinfo=0&rel=0&modestbranding=1',
    title: { regular: 'Revolusi', italic: 'Pertanian' },
    desc: 'Teknologi modern untuk ketahanan pangan masa depan.',
    cta: 'Jelajahi Program'
  },
  {
    id: 3,
    type: 'image',
    src: '/assets/hero_slide_2.jpg',
    title: { regular: 'Sinergi', italic: 'Industri' },
    desc: 'Kolaborasi lintas sektor untuk inovasi berkelanjutan.',
    cta: 'Lihat Peluang Karir'
  },
  {
    id: 4,
    type: 'image',
    src: '/assets/hero_slide_3.jpg',
    title: { regular: 'Inovasi' },
    desc: 'Smart farming & teknologi pertanian modern untuk masa depan pangan Indonesia.',
    cta: 'Eksplorasi Riset'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    if (isPaused) return;

    const duration = currentSlide === 0 ? 12000 : 8000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative w-full h-screen max-h-[900px] min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Slides Container */}
      <AnimatePresence mode="wait">
        <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
        >
          {slide.type === 'custom' && slide.component ? (
            <slide.component />
          ) : slide.type === 'video' ? (
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <iframe 
                    className="w-full h-full object-cover scale-150 md:scale-100"
                    src={slide.src} 
                    title="Background Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ pointerEvents: 'none' }}
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
          ) : (
             <div className="relative w-full h-full">
                <img 
                    src={slide.src} 
                    alt="Hero Slide" 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
             </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay (Bottom Left) */}
      {(slide.type !== 'custom' || slide.id === 1) && (
        <div className={`absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-4xl ${slide.id === 1 ? 'md:hidden' : ''}`}>
           <motion.div
             key={`text-${currentSlide}`}
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
              <h1 className="text-4xl md:text-8xl lg:text-9xl leading-none font-serif tracking-tight mb-4">
                 {slide.title.regular} <br/>
                 <span className="italic font-light text-primary-300">{slide.title.italic}</span>
              </h1>
              <p className="text-base md:text-xl text-white/80 max-w-md mb-8 font-light border-l-2 border-primary pl-4">
                 {slide.desc}
              </p>
              <a href="#about" className="group inline-flex items-center gap-2 text-base md:text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
                 {slide.cta}
                 <ArrowDown className="group-hover:translate-y-1 transition-transform" size={18} />
              </a>
           </motion.div>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center px-4 z-20">
         <button onClick={prevSlide} className={`p-2 transition-colors hover:scale-110 ${slide.type === 'custom' ? 'text-gray-600/50 hover:text-gray-800' : 'text-white/50 hover:text-white'}`}>
            <ChevronLeft size={48} strokeWidth={1} />
         </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 z-20">
         <button onClick={nextSlide} className={`p-2 transition-colors hover:scale-110 ${slide.type === 'custom' ? 'text-gray-600/50 hover:text-gray-800' : 'text-white/50 hover:text-white'}`}>
            <ChevronRight size={48} strokeWidth={1} />
         </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
         {slides.map((_, idx) => (
            <button 
               key={idx}
               onClick={() => setCurrentSlide(idx)}
               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                 currentSlide === idx 
                   ? (slides[currentSlide].type === 'custom' ? 'bg-gray-800 w-8' : 'bg-white w-8')
                   : (slides[currentSlide].type === 'custom' ? 'bg-gray-400 hover:bg-gray-600' : 'bg-white/40 hover:bg-white/70')
               }`}
            />
         ))}
      </div>

      {/* Play/Pause Control */}
      <button 
        onClick={() => setIsPaused(!isPaused)}
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 border ${
          slide.type === 'custom' 
            ? 'bg-white/30 border-gray-400/30 text-gray-800 hover:bg-white/50' 
            : 'bg-black/30 border-white/20 text-white hover:bg-black/50'
        }`}
        aria-label={isPaused ? "Play Slider" : "Pause Slider"}
      >
        {isPaused ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
      </button>

      {/* Scroll Hint */}
      <div className={`absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 animate-bounce ${slide.type === 'custom' ? 'text-gray-600/70' : 'text-white/70'}`}>
         <span className="text-sm font-bold uppercase tracking-[0.2em] [writing-mode:vertical-rl]">Scroll</span>
         <ArrowDown size={20} />
      </div>

    </section>
  );
};

export default Hero;
