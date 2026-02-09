import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, 
  MapPin, Mail, ArrowDown,
  Shield, Sparkles, Building2, Coins,
  CheckCircle2, GraduationCap,
  Play, Pause, Smartphone, MessageCircle
} from 'lucide-react';

// ============================================
// HERO SLIDER COMPONENT (Matching Desktop)
// ============================================
const MobileHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      type: 'custom',
      title: { regular: 'Raih Masa', italic: 'Depanmu' },
      desc: 'Bergabung dengan program studi terbaik di bidang proteksi tanaman.',
      cta: 'Daftar Sekarang'
    },
    {
      id: 2,
      type: 'video',
      src: 'https://www.youtube.com/embed/ITncc5Lxcsk?autoplay=1&mute=1&loop=1&playlist=ITncc5Lxcsk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
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

  // Auto-advance slider
  useEffect(() => {
    if (!isPlaying) return;
    const duration = currentSlide === 0 ? 10000 : 6000;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length, isPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[70vh] min-h-[450px] max-h-[550px] overflow-hidden bg-black text-white">
      {/* Slides Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {slide.type === 'custom' ? (
            // Slide 1: Custom layout with hero images - Mobile optimized
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/assets/hero_bg.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              
              {/* Left Side - Badges Container */}
              <div className="absolute top-20 left-12 z-20 flex flex-col items-center gap-3">
                {/* Department Banner */}
                <motion.img 
                  src="/assets/hero_banner.png"
                  alt="Jurusan Proteksi Tanaman"
                  className="w-52 h-auto object-contain drop-shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
                
                {/* Scholarship Badge with Glass Shine Effect */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{ 
                    opacity: { delay: 0.6 },
                    scale: { delay: 0.6 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative w-24 h-24"
                >
                  <img 
                    src="/assets/hero_badge.png"
                    alt="5 Beasiswa Per Tahun"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  {/* Glass Shine Effect - follows badge shape */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                      WebkitMaskImage: 'url(/assets/hero_badge.png)',
                      maskImage: 'url(/assets/hero_badge.png)',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                      animate={{ x: ['-50%', '50%'] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        repeatDelay: 2
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* People image - Right side, adjusted */}
              <motion.img 
                src="/assets/hero_people.png"
                alt="Tim Proteksi Tanaman"
                className="absolute right-[5%] bottom-20 w-[48%] h-auto object-contain z-10"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </div>
          ) : slide.type === 'video' ? (
            <div className="absolute inset-0 w-full h-full">
              <iframe
                className="w-full h-full object-cover scale-[2] origin-center"
                src={slide.src}
                title="Background Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.src}
                alt="Hero Slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-14 z-20">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl leading-tight font-serif tracking-tight mb-3">
            {slide.title.regular} {slide.title.italic && <><br />
            <span className="italic font-light text-primary-300">{slide.title.italic}</span></>}
          </h1>
          <p className="text-sm text-white/80 max-w-[280px] mb-5 font-light border-l-2 border-primary pl-3">
            {slide.desc}
          </p>
          <a
            href="#infografis"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase hover:text-primary transition-colors"
          >
            {slide.cta}
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 active:text-white"
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 active:text-white"
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-white w-6' : 'bg-white/40 w-2'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all shadow-lg active:scale-95"
        aria-label={isPlaying ? "Pause Slider" : "Play Slider"}
      >
        {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
      </button>
    </section>
  );
};

// ============================================
// INFOGRAPHIC SECTION (HeroTransition Content)
// ============================================
const InfographicSection = () => {
  const infographicData = [
    {
      id: 1,
      icon: Shield,
      number: '01',
      title: 'Jurusan Evergreen',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      image: '/assets/card_point_1.jpg',
      points: [
        'Pertanian selalu dibutuhkan, tidak bisa tergantikan oleh AI.',
        'Ada 8 miliar manusia yang harus makan setiap hari.'
      ]
    },
    {
      id: 2,
      icon: Sparkles,
      number: '02',
      title: 'Jurusan Hidden Gem',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600',
      image: '/assets/card_point_2.jpg',
      points: [
        'Jurusan langka, hanya ada di 14 perguruan tinggi di Indonesia.',
        'Ilmu spesifik yang fokus pada perlindungan tanaman.'
      ]
    },
    {
      id: 3,
      icon: Building2,
      number: '03',
      title: 'Prospek Masa Depan Cerah',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      image: '/assets/card_point_3.jpg',
      points: [
        'Masuk mudah, kuliah menyenangkan, lapangan kerja luas.',
        'Peluang karir: Pertanian, Industri, Pemerintahan, BUMN, Danantara, dll.'
      ]
    },
    {
      id: 4,
      icon: Coins,
      number: '04',
      title: 'Kuliah Murah, Fasilitas Sultan',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      image: '/assets/card_point_4.jpg',
      points: [
        'UKT bersahabat, tapi dapet akses ke lab digital berbasis AI dan dosen-dosen pakar.',
        'Belajar langsung di lapangan lewat proyek nyata yang bikin kamu siap berkarir setelah lulus.'
      ]
    }
  ];

  return (
    <section id="infografis" className="pt-16 pb-8 px-4">
      {/* Section Header with Fancy Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <div className="relative inline-block pb-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-main leading-tight relative z-10 px-6">
            Mengapa <span className="italic">Proteksi Tanaman?</span>
          </h2>
          {/* Orange Highlight Line SVG - centered 60% width, zigzag style */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-5 z-0">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 293 24" 
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path 
                d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                stroke="rgb(255,118,44)" 
                strokeWidth="5" 
                strokeLinecap="round" 
                fill="transparent"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Infographic Cards with Sticky Stack Animation */}
      <div className="relative max-w-md mx-auto">
        {infographicData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="sticky mb-4"
            style={{ 
              top: `${80 + idx * 20}px`,
              zIndex: idx + 1
            }}
          >
            <div 
              className={`relative overflow-hidden rounded-3xl ${item.bgColor} border-2 border-white shadow-xl`}
              style={{
                boxShadow: 'inset 0px -6px 0.5px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 0.5px 0px rgba(255, 255, 255, 0.8), 0px 8px 20px 0px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Number Badge */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-end justify-start p-3 opacity-20`}>
              </div>
              <div className={`absolute top-3 right-4 text-4xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-30`}>
                {item.number}
              </div>

              <div className="flex items-stretch">
                {/* Illustration Image */}
                <div className="w-24 flex-shrink-0 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
                  />
                </div>
                
                <div className="p-4 flex-1">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 rounded-lg bg-white shadow-md ${item.iconColor}`}>
                      <item.icon size={18} strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-bold text-text-main leading-tight flex-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Points */}
                  <div className="space-y-2">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex gap-2">
                        <CheckCircle2 size={14} className={`${item.iconColor} flex-shrink-0 mt-0.5`} />
                        <p className="text-xs text-text-muted leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`h-1 bg-gradient-to-r ${item.color}`} />
            </div>
          </motion.div>
        ))}
        {/* Spacer for last card */}
        <div className="h-4" />
      </div>

    </section>
  );
};

// ============================================
// DOSEN SECTION (3D Curved Wall Carousel)
// ============================================
const DosenSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dosenData = [
    { id: 1, name: 'Prof. Dr. Ir. Hasriadi Mat Akin, M.P.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_1.png' },
    { id: 2, name: 'Prof. Dr. Ir. Cipta Ginting, M.Sc.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_2.png' },
    { id: 3, name: 'Prof. Dr. Ir. FX Susilo, M.Sc.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_3.png' },
    { id: 4, name: 'Prof. Dr. Ir. Hamim Sudarsono, M.Sc.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_4.png' },
    { id: 5, name: 'Prof. Dr. Ir. I Gede Swibawa, M.S.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_5.png' },
    { id: 6, name: 'Prof. Dr. Radix Suharjo, S.P., M.Agr.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_6.png' },
    { id: 7, name: 'Prof. Dr. Yuyun Fitriana, S.P., M.P.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_7.png' },
    { id: 8, name: 'Prof. Dr. Ir. Purnomo, M.S.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_8.png' },
    { id: 9, name: 'Prof. Dr. Ir. Rosma Hasibuan, M.Sc.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_9.png' },
    { id: 10, name: 'Dr. Tri Maryono, S.P., M.Si.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_10.png' },
    { id: 11, name: 'Dr. Ir. Sudi Pramono, M.P.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_11.png' },
    { id: 12, name: 'Dr. Ir. Suskandini Ratih D., M.P.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_12.png' },
    { id: 13, name: 'Dr. Ir. Titik Nur Aeny, M.Sc.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_13.png' },
    { id: 14, name: 'Dr. Ivayani, S.P., M.Si.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_14.png' },
    { id: 15, name: 'Dr. Puji Lestari, S.P., M.Si.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_15.png' },
    { id: 20, name: 'Selvi Helina, S.P., M.Sc.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_20.png' },
    { id: 16, name: 'Ir. Solikhin, M.P.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_16.png' },
    { id: 17, name: 'Ir. Agus Muhammad Hariri, M.P.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_17.png' },
    { id: 19, name: 'Ir. Muhammad Nurdin, M.Si.', field: 'Ilmu Penyakit Tumbuhan', photo: '/assets/dosen_19.png' },
    { id: 18, name: 'Ir. Lestari Wibowo, M.P.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_18.png' },
    { id: 21, name: 'Ni Kadek Emi Sintha Dewi, M.P.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_21.png' },
    { id: 22, name: 'Luna Lukvitasari, M.Si.', field: 'Ilmu Hama Tumbuhan', photo: '/assets/dosen_22.png' },
  ];

  const totalItems = dosenData.length;
   const radius = 1050; // Increased for more spacing
  const angleStep = 360 / totalItems; 
  const cardWidth = 280; 
  const cardHeight = 390; 

  useEffect(() => {
    if (!isAutoRotating || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.1); 
    }, 16);
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging]);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setIsAutoRotating(false);
    if (autoRotateTimeoutRef.current) clearTimeout(autoRotateTimeoutRef.current);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX;
    setRotation(prev => prev - delta * 0.25); 
    setStartX(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
    autoRotateTimeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 2000);
  };

  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => { if (isDragging) handleEnd(); };

  return (
    <section className="pb-4 relative overflow-hidden">
      <div className="relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-0 px-4"
        >
           <div className="relative inline-block pb-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-2">
                Dosen Berpengalaman <span className="italic block mt-1 sm:inline sm:mt-0">& Berkualitas</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-5 z-0 opacity-80">
                <svg className="w-full h-full" viewBox="0 0 293 24" fill="none" preserveAspectRatio="none">
                  <motion.path 
                    d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                    stroke="rgb(255,118,44)" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </svg>
              </div>
           </div>
           <div className="mt-4">
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              9 Profesor | 18 Dosen S3 | 6 Dosen S2 Lulusan Dalam & Luar Negeri.

            </p>
          </div>
        </motion.div>

        <div 
          className="relative h-[400px] -mt-16 -mb-8 w-full cursor-grab active:cursor-grabbing select-none flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div 
            className="w-full h-full relative"
            style={{ 
              perspective: '1000px',
              perspectiveOrigin: 'center center'
            }}
          >
             <div 
              className="absolute left-1/2 top-1/2"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                transition: isDragging ? 'none' : 'transform 0.15s linear',
              }}
            >
              {dosenData.map((dosen, idx) => {
                const angle = idx * angleStep;
                return (
                  <div
                    key={dosen.id}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${cardHeight}px`,
                      marginLeft: `-${cardWidth/2}px`,
                      marginTop: `-${cardHeight/2}px`,
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                      backfaceVisibility: 'hidden', 
                    }}
                  >
                     <div className="w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl relative">
                      <img 
                        src={dosen.photo}
                        alt={dosen.name}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/dosen_placeholder.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-0 right-0 p-5 z-10 text-center">
                        <p className="text-xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
                          {dosen.name}
                        </p>
                        <div className="mt-2 flex justify-center">
                          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                              {dosen.field}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
               })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ALUMNI SECTION (Success Stories)
// ============================================
const AlumniSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const alumniData = [
    { id: 101, name: 'Aziz Maulana', role: 'Professional', company: 'Sugar Group Company', photo: '/assets/alumni_aziz.png' },
    { id: 104, name: 'Ade Herdian', role: 'Professional', company: 'Bank Syariah Indonesia', photo: '/assets/alumni_ade.png' },
    { id: 102, name: 'Ketut Septia Putri', role: 'ASN', company: 'Lampung Tengah', photo: '/assets/alumni_ketut.png' },
    { id: 103, name: 'Ummu Khairun Nisa', role: 'Professional', company: 'PT Gunung Sejahtera Puti Pesona (GSPP)', photo: '/assets/alumni_ummu.png' },
    { id: 105, name: 'Devi Agustina', role: 'Internasional', company: 'Agriculture Specialties (South East Asia) at Nouryon', photo: '/assets/alumni_devi.png' },
    { id: 1, name: 'Adi Damar', role: 'Julong Group Indonesia', company: 'PT Rezeki Kencana', photo: '/assets/alumni_adi.png' },
    { id: 2, name: 'Afrianda', role: 'Purchasing Staff', company: 'PT MAJU MAPAN YIC', photo: '/assets/alumni_afrianda.png' },
    { id: 3, name: 'Amalia Cahya', role: 'Badan Karantina Indonesia', company: 'Badan Karantina Indonesia', photo: '/assets/alumni_amalia.png' },
    { id: 4, name: 'Mardiyanto', role: 'Country business Consultant', company: 'Sumitomo Chemical Asia', photo: '/assets/alumni_1.png' },
    { id: 5, name: 'Ilham Mendrofa', role: 'Founder', company: 'PT Agrokimia', photo: '/assets/alumni_2.png' },
    { id: 6, name: 'Helsond', role: 'RnD officer', company: 'PT Wilmar Indonesia', photo: '/assets/alumni_3.png' },
    { id: 7, name: 'Ariyo Nugroho', role: 'Banana Commodity Leader', company: 'PT Great Giant Food', photo: '/assets/alumni_4.png' },
    { id: 8, name: 'Widiantoro', role: 'Plantation Officer', company: 'PT Gunung Madu Plantation', photo: '/assets/alumni_5.png' },
    { id: 9, name: 'Wahyu Susanto', role: 'Owner', company: 'Rumah Madu & GHA Store', photo: '/assets/alumni_6.png' },
    { id: 10, name: 'Tri Maryono', role: 'Dosen', company: 'Proteksi Tanaman Unila', photo: '/assets/alumni_7.png' },
    { id: 11, name: 'Puji Lestari', role: 'Dosen', company: 'Proteksi Tanaman Unila', photo: '/assets/alumni_8.png' },
    { id: 12, name: 'Ivayani', role: 'Dosen', company: 'Proteksi Tanaman Unila', photo: '/assets/alumni_9.png' },
    { id: 13, name: 'Selvi Helina', role: 'Dosen', company: 'Proteksi Tanaman Unila', photo: '/assets/alumni_10.png' },
    { id: 14, name: 'Heri widodo', role: 'Ketua Tim Penegakan Hukum', company: 'BKHIT Lampung', photo: '/assets/alumni_11.png' },
    { id: 15, name: 'Samsul Hidayat', role: 'Instansi Pemerintah', company: 'Badan Karantina Indonesia', photo: '/assets/alumni_12.png' },
    { id: 16, name: 'Astuti ', role: 'Instansi Pemerintah', company: 'Badan Karantina Indonesia', photo: '/assets/alumni_13.png' },
    { id: 17, name: 'UPTD BPTPH', role: 'Instansi Pemerintah', company: 'UPTD BPTPH', photo: '/assets/alumni_14.png' },
    { id: 18, name: 'Widyaningrum AS', role: 'ASN PLP', company: 'Perguruan Tinggi Negeri', photo: '/assets/alumni_15.png' },
    { id: 19, name: 'Yopi Almuhayat', role: 'Professional', company: 'PT Great Giant Food', photo: '/assets/alumni_yopi.png' },
    { id: 20, name: 'Sakti Hadma', role: 'Professional', company: 'PT Rentokill', photo: '/assets/alumni_sakti.png' },
  ];

  const totalItems = alumniData.length;
  const angleStep = 360 / totalItems; 
  const radius = 1180; // Wider spacing between photos - increased for 26 alumni
  const cardWidth = 280; 
  const cardHeight = 390; 

  useEffect(() => {
    if (!isAutoRotating || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => prev - 0.08); // Slower rotation
    }, 16);
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging]);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setIsAutoRotating(false);
    if (autoRotateTimeoutRef.current) clearTimeout(autoRotateTimeoutRef.current);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX;
    setRotation(prev => prev - delta * 0.25); 
    setStartX(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
    autoRotateTimeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 2000);
  };

  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => { if (isDragging) handleEnd(); };

  return (
    <section className="pb-0 relative overflow-hidden">
      <div className="relative z-10 pt-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-0 px-4"
        >
           <div className="relative inline-block pb-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-2">
                Karir Gemilang <span className="italic block mt-1 sm:inline sm:mt-0">Alumni Kami</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-5 z-0 opacity-80">
                <svg className="w-full h-full" viewBox="0 0 293 24" fill="none" preserveAspectRatio="none">
                  <motion.path 
                    d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                    stroke="rgb(16, 185, 129)" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </svg>
              </div>
           </div>
           <p className="text-gray-600 text-sm mt-2 max-w-xs mx-auto">
             Lulusan Proteksi Tanaman telah sukses berkarir di berbagai perusahaan multinasional dan instansi pemerintah.
           </p>
        </motion.div>

        <div 
          className="relative h-[400px] -mt-16 -mb-20 w-full cursor-grab active:cursor-grabbing select-none flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div 
            className="w-full h-full relative"
            style={{ 
              perspective: '1000px',
              perspectiveOrigin: 'center center'
            }}
          >
             <div 
              className="absolute left-1/2 top-1/2"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                transition: isDragging ? 'none' : 'transform 0.15s linear',
              }}
            >
              {alumniData.map((alumni, idx) => {
                const angle = idx * angleStep;
                return (
                  <div
                    key={alumni.id}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${cardHeight}px`,
                      marginLeft: `-${cardWidth/2}px`,
                      marginTop: `-${cardHeight/2}px`,
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                      backfaceVisibility: 'hidden', 
                    }}
                  >
                     <div className="w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl relative border border-gray-100">
                      <img 
                        src={alumni.photo}
                        alt={alumni.name}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/dosen_placeholder.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-0 right-0 p-5 z-10 text-center">
                        <p className="text-2xl font-black text-white leading-tight mb-1 drop-shadow-lg">
                          {alumni.name}
                        </p>
                        <p className="text-sm text-emerald-400 font-bold mb-3 uppercase tracking-widest bg-black/20 backdrop-blur-sm inline-block px-2 py-0.5 rounded">
                          {alumni.role}
                        </p>
                        <div className="flex justify-center">
                          <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-xl">
                            <span className="text-[13px] text-white font-bold italic leading-none">
                              {alumni.company}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
               })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// ============================================
// SCHOLARSHIP SECTION
// ============================================
const ScholarshipSection = () => {
  const scholarships = [
    {
      title: 'Beasiswa dari Pemerintah',
      desc: 'Beasiswa yang diberikan oleh pemerintah.',
      list: '(Bidikmisi, KIP-K, BPI, dll.)',
      color: 'bg-emerald-500',
      icon: <GraduationCap className="text-white" size={28} />
    },
    {
      title: 'Beasiswa dari Korporasi ',
      desc: 'Beasiswa yang diberikan oleh swasta maupun BUMN.',
      list: '(Djarum,PUSRI, BSI, BI, Bukit Asam, dll.)',
      color: 'bg-emerald-500',
      icon: <Coins className="text-white" size={28} />
    },
    {
      title: 'Beasiswa Yayasan Alumni Proteksi Tanaman FP Unila',
      desc: '5 mahasiswa per tahun & jaminan langsung kerja untuk 10 lulusan terbaik per tahun.',
      list: '(Beasiswa Prestasi dan Beasiswa Kebutuhan.)',
      color: 'bg-emerald-500',
      icon: <Sparkles className="text-white" size={28} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-14">
          
          {/* Header Part - Unified Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative inline-block pb-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-2">
                Beragam Beasiswa <span className="italic block mt-1 sm:inline sm:mt-0">Menantimu !</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-5 z-0 opacity-80">
                <svg className="w-full h-full" viewBox="0 0 293 24" fill="none" preserveAspectRatio="none">
                  <motion.path 
                    d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                    stroke="rgb(16, 185, 129)" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Content Row: Image on Left, List on Right */}
          <div className="flex flex-row gap-10 items-stretch">
            {/* Small Lateral Image - Slightly wider for balance */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[30%] rounded-3xl overflow-hidden shadow-2xl relative flex-shrink-0"
            >
              <div className="absolute inset-0 bg-black/5 z-10" />
              <img 
                src="/assets/beasiswa_unila.png" 
                alt="About Scholarship"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Services Style List - Next to Image with more gap */}
            <div className="flex-1 flex flex-col gap-10">
              {scholarships.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group flex flex-col items-start gap-4 bg-white p-6 rounded-[2rem] border border-emerald-50 shadow-[0_10px_30px_-15px_rgba(16,185,129,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] transition-all duration-300"
                >
                  {/* Baris 1: Judul - Rata Kiri */}
                  <h3 className="text-lg font-black text-gray-800 tracking-tight leading-tight">{s.title}</h3>
                  
                  {/* Baris 2: Icon + Description - Icon disamping Desc */}
                  <div className="flex items-center gap-5 w-full">
                    {/* Icon Block - Centered vertically beside Row 2 */}
                    <div className={`flex-shrink-0 w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {idx === 0 && <GraduationCap className="text-white" size={28} />}
                      {idx === 1 && <Coins className="text-white" size={28} />}
                      {idx === 2 && <Sparkles className="text-white" size={28} />}
                    </div>
                    
                    {/* Content Block (Baris 2 Desc) */}
                    <div className="flex-1">
                      <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Baris 3: List - Rata Kiri (Dibawah Icon) */}
                  <div className="text-left">
                    <span className="inline-block text-[10px] font-black text-emerald-600 bg-emerald-50/50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
                      {s.list}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ============================================
// HIMAPROTEKTA SECTION
// ============================================
const HimaprotektaSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentRawIndex, setCurrentRawIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const baseVideoIds = [
    '7582444628675153173',
    '7580785161210498325',
    '7579759549159181589',
    '7558459483547192583',
    '7558808372561054994',
    '7558811742093053202',
    '7448652036251372808',
    '7447124434067950856',
    '7447060534391835922'
  ];

  const videoIds = [...baseVideoIds, ...baseVideoIds, ...baseVideoIds];

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const itemWidth = width * 0.70;
      const itemFullWidth = itemWidth + 12;
      const centerOffset = (width - itemWidth) / 2;
      
      // Initial scroll: Set middle set, first video centered
      // scrollLeft = targetCenter - centerOffset
      const initialScroll = (itemFullWidth * baseVideoIds.length) - centerOffset;
      scrollRef.current.scrollLeft = initialScroll;
      
      // Calculate initial rawIndex
      const rawIndex = Math.round((initialScroll + centerOffset) / itemFullWidth);
      setCurrentRawIndex(rawIndex);
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const itemWidth = width * 0.70;
      const itemFullWidth = itemWidth + 12;
      const centerOffset = (width - itemWidth) / 2;
      
      // Detect card at CENTER of viewport
      const rawIndex = Math.round((scrollLeft + centerOffset) / itemFullWidth);
      const normalizedIndex = rawIndex % baseVideoIds.length;
      
      if (rawIndex !== currentRawIndex) {
        setCurrentRawIndex(rawIndex);
      }
      
      if (normalizedIndex !== activeIndex && normalizedIndex >= 0) {
        setActiveIndex(normalizedIndex);
      }

      // Seamless jump logic
      if (scrollLeft < itemFullWidth) {
        scrollRef.current.scrollLeft = itemFullWidth * (baseVideoIds.length + 1);
      } else if (scrollLeft > itemFullWidth * (baseVideoIds.length * 2)) {
        scrollRef.current.scrollLeft = itemFullWidth * baseVideoIds.length;
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const itemWidth = width * 0.70;
      const itemFullWidth = itemWidth + 12;
      const centerOffset = (width - itemWidth) / 2;
      
      scrollRef.current.scrollTo({
        left: (baseVideoIds.length + index) * itemFullWidth - centerOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollNext = () => {
    const nextIndex = (activeIndex + 1) % baseVideoIds.length;
    scrollTo(nextIndex);
  };

  const handleScrollPrev = () => {
    const prevIndex = (activeIndex - 1 + baseVideoIds.length) % baseVideoIds.length;
    scrollTo(prevIndex);
  };

  return (
    <section className="pt-16 pb-6 px-0 relative overflow-hidden bg-white">
      <div className="max-w-2xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block pb-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-2">
              Himpunan Mahasiswa Jurusan <span className="italic block mt-1 sm:inline sm:mt-0 text-emerald-600">HIMAPROTEKTA</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-5 z-0 opacity-80">
              <svg className="w-full h-full" viewBox="0 0 293 24" fill="none" preserveAspectRatio="none">
                <motion.path 
                  d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                  stroke="rgb(255,165,0)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Himpunan Mahasiswa Proteksi Tanaman (HIMAPROTEKTA) - Wadah Asah <span className="font-bold text-emerald-600">Soft Skill, Kreativitas & Relasi</span>
          </p>
        </motion.div>
      </div>

      {/* Multi-Card Infinite Carousel - Smart Loading CENTERED */}
      <div className="relative group/carousel w-full">
         <button 
            onClick={handleScrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-emerald-600 active:scale-95 transition-all border border-emerald-50"
         >
            <ChevronLeft size={24} />
         </button>

         <button 
            onClick={handleScrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-emerald-600 active:scale-95 transition-all border border-emerald-50"
         >
            <ChevronRight size={24} />
         </button>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto snap-x snap-mandatory flex gap-3 px-0 pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
        
        {videoIds.map((id, index) => {
          const isActive = index === currentRawIndex;
          
          return (
            <div key={`${id}-${index}`} className="min-w-[70%] snap-center">
              <motion.div
                animate={{ 
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.85
                }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white rounded-lg shadow-lg border border-emerald-50 overflow-hidden relative"
              >
                {/* Header - Minimalist */}
                <div className="p-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-between">
                  <div className="flex items-center gap-1">
                     <Smartphone size={8} />
                     <span className="font-extrabold text-[6px]">@himaprotekta</span>
                  </div>
                  <Play className={isActive ? 'animate-pulse' : 'opacity-20'} size={8} />
                </div>

                {/* Video Content - Conditional Render for Queue Loading */}
                <div className="aspect-[9/16] w-full bg-black relative p-1 overflow-hidden">
                  {isActive ? (
                    <div className="absolute inset-1 overflow-hidden rounded-md bg-black">
                      <iframe
                        src={`https://www.tiktok.com/embed/v2/${id}?muted=1`}
                        className="absolute w-full h-full border-0"
                        allow="autoplay; encrypted-media"
                        title={`Active Video ${index}`}
                      />
                    </div>
                  ) : (
                    <div className="text-emerald-500/20 flex flex-col items-center gap-1">
                      <Smartphone size={24} />
                      <span className="text-[6px] font-bold uppercase tracking-tighter">Queue</span>
                    </div>
                  )}
                  <div className="absolute inset-0 pointer-events-none border-[2px] border-white/5 rounded-lg" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      </div>

      {/* Swipe Hint */}
      <div className="text-center mt-6">
        <div className="flex items-center justify-center gap-1.5">
           {baseVideoIds.map((_, i) => (
             <button 
               key={i} 
               onClick={() => scrollTo(i)}
               className={`h-1 rounded-full transition-all duration-300 ${
                 i === activeIndex ? 'w-5 bg-emerald-500' : 'w-1 bg-emerald-100'
               }`} 
             />
           ))}
        </div>
        <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.2em] mt-3 animate-pulse italic">Swipe to Explore</p>
      </div>
    </section>
  );
};

// ============================================
// JURNAL SECTION
// ============================================
const JournalSection = () => {
  const journals = [
    {
      title: "Terindeks SCOPUS",
      fullName: "Jurnal Hama & Penyakit Tumbuhan Tropika",
      tags: ["Jurnal Internasional"],
      rotation: -3,
      image: "/assets/jhptt_cover.png",
      url: "https://jhpttropika.fp.unila.ac.id/index.php/jhpttropika"
    },
    {
      title: "",
      fullName: "Jurnal Proteksi Agrikultura",
      tags: ["Jurnal Nasional"],
      rotation: 3,
      image: "/assets/jpa_cover.png",
      url: "https://jpa.fp.unila.ac.id/index.php/jpa"
    }
  ];

  return (
    <section className="pt-6 pb-10 px-4 relative overflow-hidden bg-white">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-2xl mx-auto mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-600 font-extrabold mb-2 block">Scientific Publications</span>
          <div className="relative inline-block pb-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 leading-tight relative z-10">
              Publikasi Jurnal <span className="italic text-emerald-600">Jurusan</span>
            </h2>
            {/* Emerald Zigzag Line SVG */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-5 z-0 opacity-80">
              <svg className="w-full h-full" viewBox="0 0 293 24" fill="none" preserveAspectRatio="none">
                <motion.path 
                  d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                  stroke="rgb(16, 185, 129)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic leading-relaxed mt-4 max-w-md mx-auto">
            "Dedikasi tanpa batas untuk perkembangan ilmu pengetahuan dan perlindungan ekosistem pertanian berkelanjutan."
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto relative z-10 px-2 sm:px-0">
        {journals.map((journal, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotate: 0, y: 20 }}
            whileInView={{ opacity: 1, rotate: journal.rotation, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: idx * 0.15 }}
            className="flex flex-col"
          >
            <a 
              href={journal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block group"
            >
              <div 
                className="relative aspect-[9/13] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 z-10 transition-transform duration-300 group-hover:shadow-emerald-900/10"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                <img 
                  src={journal.image} 
                  alt={journal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlays */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-12">
                   <div className="flex flex-wrap gap-1.5 mb-2">
                     {journal.tags.map((tag, tIdx) => (
                       <span key={tIdx} className="text-[8px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <h3 className="text-white font-serif font-bold text-base leading-tight">
                     {journal.title}
                   </h3>
                </div>
                
                {/* Visit Button */}
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-600 shadow-lg border border-white/50 group-hover:bg-emerald-600 group-hover:text-white transition-all scale-90 group-hover:scale-100">
                    <Play size={10} fill="currentColor" />
                  </div>
                </div>
              </div>
            </a>
            
            <div className="mt-4 px-2 text-center">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight leading-snug line-clamp-2">
                {journal.fullName}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <p className="text-gray-400 text-[13px] font-medium max-w-[320px] mx-auto leading-relaxed italic">
          "Dedikasi tanpa batas untuk perkembangan ilmu pengetahuan dan perlindungan ekosistem pertanian berkelanjutan."
        </p>
      </div>
    </section>
  );
};



// ============================================
// CTA SECTION
// ============================================
const CTASection = () => {
  return (
    <section id="daftar" className="py-20 px-6 relative overflow-hidden">
      {/* Premium Background with Gradient & Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900" />
      
      {/* Decorative Animated Blobs */}
      <div className="absolute top-0 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Be Part of the Future
        </div>
        
        <h2 className="text-4xl font-serif font-bold text-white mb-6 leading-tight">
          Siap Bergabung dengan <span className="italic block mt-1 text-emerald-300">Pencetak Generasi Emas?</span>
        </h2>
        
        <p className="text-emerald-50/80 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
          Jadilah dokter tanaman yang inovatif untuk menjaga ketahanan pangan global.
        </p>
        
        <div className="flex flex-col gap-4 items-center">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-emerald-800 px-10 py-4 rounded-2xl font-black shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Come Join Us
            </span>
            <div className="absolute inset-0 bg-emerald-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
          
        </div>
      </motion.div>
    </section>
  );
};

// ============================================
// CONTACT SECTION
// ============================================
const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-600 font-extrabold mb-2 block">Get In Touch</span>
          <div className="relative inline-block pb-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-2">
              Hubungi <span className="italic text-emerald-600">Kami</span>
            </h2>
            {/* Emerald Zigzag Line SVG */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-5 z-0 opacity-80">
              <svg className="w-full h-full" viewBox="0 0 293 24" fill="none" preserveAspectRatio="none">
                <motion.path 
                  d="M 3 8.397 C 32.76 5.575 121.068 0.779 236.228 4.165 M 67.503 16.663 C 88.654 13.471 151.95 6.537 235.928 4.341 M 68.203 16.605 C 96.815 15.061 181.196 13.876 289.83 21.484" 
                  stroke="rgb(16, 185, 129)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-3 max-w-md mx-auto">
        <a
          href="https://wa.me/6281373525491"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-emerald-50"
        >
          <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
            <MessageCircle size={20} />
          </div>
          <div>
            <div className="font-bold text-text-main text-sm">WhatsApp</div>
            <div className="text-xs text-text-muted">+62 813 7352 5491</div>
          </div>
        </a>

        <a
          href="mailto:hpt@fp.unila.ac.id"
          className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-emerald-50"
        >
          <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
            <Mail size={20} />
          </div>
          <div>
            <div className="font-bold text-text-main text-sm">Email</div>
            <div className="text-xs text-text-muted">hpt@fp.unila.ac.id</div>
          </div>
        </a>

        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-emerald-50">
          <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
            <MapPin size={20} />
          </div>
          <div>
            <div className="font-bold text-text-main text-sm">Alamat</div>
            <div className="text-xs text-text-muted leading-relaxed">
              Gedung G, Fakultas Pertanian Universitas Lampung, <br />
              Jl. Prof. Dr. Ir. Sumantri Brojonegoro No.1, Bandar Lampung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MOBILE HEADER
// ============================================
const MobileHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-3 left-4 right-4 z-50 py-3 px-5 transition-all duration-500 rounded-2xl border ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-emerald-500/10' 
        : 'bg-white/10 backdrop-blur-md border-white/20 shadow-xl'
    }`}>
      <div className="flex items-center justify-center max-w-md mx-auto">
        <div className="flex items-center">
          <img src="/assets/navbar_logos.png" alt="Logo" className="h-8 w-auto object-contain" />
        </div>
      </div>
    </header>
  );
};

// ============================================
// FOOTER
// ============================================
const MobileFooter = () => {
  return (
    <footer className="px-4 py-12 bg-text-main text-white text-center">
      <img src="/assets/navbar_logos.png" alt="Logo" className="h-12 w-auto mx-auto mb-6 opacity-80" />
      
      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.1em] mb-4 max-w-[480px] mx-auto leading-relaxed">
        Official Promotion Media of the Department of Plant Protection,<br />
        Faculty of Agriculture, Universitas Lampung
      </p>

      <div className="w-12 h-[1px] bg-white/10 mx-auto mb-6" />

      <p className="text-xs text-white/40 font-medium">
        © {new Date().getFullYear()} Jurusan Proteksi Tanaman<br />
        Universitas Lampung
      </p>
    </footer>
  );
};

// ============================================
// MAIN MOBILE PAGE
// ============================================
const MobilePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MobileHeader />
      <MobileHeroSlider />
      <div className="bg-gradient-to-b from-emerald-50 via-white via-emerald-50/30 to-white">
        <InfographicSection />
        <DosenSection />
        <AlumniSection />
        <ScholarshipSection />
        <HimaprotektaSection />
        <JournalSection />
      </div>

      <CTASection />
      <ContactSection />
      <MobileFooter />
    </div>
  );
};

export default MobilePage;
