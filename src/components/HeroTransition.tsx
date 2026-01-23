import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const HeroTransition = () => {
  const [activePoint, setActivePoint] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Update window width for scaling logic
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1920;
  const scaleFactor = isMobile ? Math.max(0.4, windowWidth / 1300) : 1;

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring config for premium animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Card animations - original desktop logic
  const cardRotateYRaw = useTransform(scrollYProgress, [0, 0.4], [0, 180]);
  const cardRotateZRaw = useTransform(scrollYProgress, [0, 0.4], [0, -8]);
  const cardXRaw = useTransform(scrollYProgress, [0, 0.4], [0, 110]);
  const cardScaleRaw = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1.05, 1.1]);

  const cardRotateY = useSpring(cardRotateYRaw, springConfig);
  const cardRotateZ = useSpring(cardRotateZRaw, springConfig);
  const cardX = useSpring(cardXRaw, springConfig);
  const cardScale = useSpring(cardScaleRaw, springConfig);

  // Text animations - spread apart and fade
  const leftTextX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-50%"]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Content fade in
  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);

  const accordionItems = [
    { id: 1, title: 'Jurusan', highlight: 'Evergreen', content: ['Pertanian selalu dibutuhkan, tidak bisa tergantikan oleh AI.', 'Ada 8 miliar manusia yang harus makan setiap harinya.'] },
    { id: 2, title: 'Jurusan', highlight: 'Hidden Gem', content: ['Jurusan langka, hanya ada di 14 perguruan tinggi di Indonesia.','Ilmu spesifik yang fokus pada perlindungan tanaman.'] },
    { id: 3, title: 'Prospek', highlight:  'Masa Depan Cerah', content: ['Masuk mudah, kuliah menyenangkan, lapangan kerja luas.','Peluang karir: Pertanian, Industri, Pemerintahan, BUMN, Danantara, dll.']},
    { id: 4, title: 'Kuliah Murah, Fasilitas', highlight: 'Sultan', content: ['UKT bersahabat, tapi dapet akses ke lab digital berbasis AI dan dosen-dosen pakar.', 'Belajar langsung di lapangan lewat proyek nyata yang bikin kamu siap berkarir setelah lulus.'] }
  ];

  return (
    <section 
      id="why-us"
      ref={containerRef}
      className="relative min-h-[150vh] bg-emerald-50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-emerald-200 z-0" />
      
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Scaling Wrapper (Miniature Stage) */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'center center',
            width: isMobile ? '1200px' : '100%',
            height: isMobile ? '800px' : '100%',
            flexShrink: 0
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
            
            {/* Left Header */}
            <motion.div 
              style={{ x: leftTextX, opacity: textOpacity }}
              className="absolute left-[5%] md:left-[10%] lg:left-[5%] top-[35%] z-10 text-left"
            >
              <span className="block text-lg md:text-2xl text-portavia/60 font-display font-normal uppercase">
                MENGAPA HARUS
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-portavia uppercase leading-none" style={{ transform: 'scaleY(1.15)' }}>
                PROTEKSI
              </h2>
            </motion.div>

            {/* Central Flip Card */}
            <div className="absolute inset-x-0 top-[15%] flex items-center justify-center pointer-events-none">
              <motion.div
                style={{ 
                  rotateY: cardRotateY, rotateZ: cardRotateZ,
                  x: useTransform(cardX, (v) => `${v}%`), scale: cardScale,
                  transformStyle: 'preserve-3d', pointerEvents: 'auto'
                }}
                className="relative w-[294px] h-[524px] z-20"
              >
                <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
                    <img src="/assets/faculty_front.jpg" className="w-full h-full object-cover" alt="Front" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end pb-8">
                        <span className="block text-white/70 text-xs tracking-widest uppercase mb-1">PROTEKSI TANAMAN</span>
                        <h3 className="text-white text-2xl font-bold">FP UNILA</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-white" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={activePoint} 
                        src={`/assets/card_point_${activePoint}.jpg`} 
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Header */}
            <motion.div 
              style={{ x: rightTextX, opacity: textOpacity }}
              className="absolute right-[5%] md:right-[10%] lg:right-[5%] top-[41%] z-10 text-right"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-portavia uppercase leading-none" style={{ transform: 'scaleY(1.15)' }}>
                TANAMAN
              </h2>
              <span className="block text-lg md:text-2xl text-portavia/60 font-display font-normal uppercase">
                FP UNILA ?
              </span>
            </motion.div>

            {/* Content Accordion */}
            <motion.div style={{ opacity: contentOpacity, y: contentY }} className="absolute left-0 pl-4 md:pl-8 top-[8%] max-w-4xl z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-text-main mb-8 font-display">karena...</h2>
              <div className="space-y-2">
                {accordionItems.map((item) => (
                  <div key={item.id} className="relative py-4 px-4 cursor-pointer group" onMouseEnter={() => setActivePoint(item.id)}>
                    {activePoint === item.id && <motion.div layoutId="highlightStatic" className="absolute inset-0 bg-emerald-50/60 rounded-xl -z-10" />}
                    <h3 className="text-xl font-bold text-text-main mb-3">
                      {item.id}. {item.title} <span className="text-emerald-500">{item.highlight}</span>
                    </h3>
                    <div className="space-y-2">
                      {item.content.map((p, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-emerald-400">●</span>
                          <p className="text-text-muted text-base font-medium leading-snug">{p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTransition;
