import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import {
  MapPin, Mail, 
  Sparkles, Coins,
  GraduationCap, 
  Smartphone, ArrowRight, MessageCircle, Play, ChevronLeft, ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroTransition from '../components/HeroTransition';

// Reusing types/data styles from MobilePage but adapted for Desktop

// ============================================
// DOSEN SECTION (Desktop Version)
// ============================================
const DosenSection = () => {
    // Desktop: Increase radius and card width
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
  // Desktop: Wider spread
  const angleStep = 360 / totalItems; 
  const radius = 1280; // Increased for desktop to prevent overlap
  const cardWidth = 320; 
  const cardHeight = 420; 

  useEffect(() => {
    if (!isAutoRotating || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.12); // Slower, smoother
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
    setRotation(prev => prev - delta * 0.15); 
    setStartX(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
    autoRotateTimeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 2000);
  };

  // Mouse/Touch handlers
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => { if (isDragging) handleEnd(); };

  return (
    <section id="faculty" className="pt-12 pb-10 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
           <div className="relative inline-block pb-4">
              <h2 className="text-5xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-4">
                Dosen Berpengalaman <span className="italic text-emerald-600">& Kompeten</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-6 z-0 opacity-80">
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
           <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
             9 Profesor | 18 Dosen S3 | 6 Dosen S2 Lulusan Dalam & Luar Negeri.
           </p>
        </motion.div>

        <div 
          className="relative h-[500px] w-full cursor-grab active:cursor-grabbing select-none flex items-center justify-center -mt-16 -mb-20"
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
              perspective: '2000px', // Deeper perspective for desktop
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
                     <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl relative transition-transform hover:-translate-y-4 duration-300">
                      <img 
                        src={dosen.photo}
                        alt={dosen.name}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/dosen_placeholder.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <p className="text-lg font-bold text-white leading-tight mb-2 drop-shadow-md">
                          {dosen.name}
                        </p>
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-emerald-300 font-bold uppercase tracking-wider border border-white/10">
                          {dosen.field}
                        </span>
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
// ALUMNI SECTION (Desktop Version)
// ============================================
const AlumniSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const alumniData = [
    { id: 101, name: 'Aziz Maulana', role: 'Professional', company: 'Sugar Group Company', photo: '/assets/alumni_aziz.png' },
    { id: 104, name: 'Ade Armando', role: 'Professional', company: 'Bank Syariah Indonesia', photo: '/assets/alumni_ade.png' },
    { id: 102, name: 'Ketut Septia Putri', role: 'ASN', company: 'Lampung Tengah', photo: '/assets/alumni_ketut.png' },
    { id: 103, name: 'Ummu Khairun Nisa', role: 'Professional', company: 'PT Gunung Sejahtera Puti Pesona (GSPP)', photo: '/assets/alumni_ummu.png' },
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
  ];

  const totalItems = alumniData.length;
  const angleStep = 360 / totalItems; 
  const radius = 1200; // Wider
  const cardWidth = 300; 
  const cardHeight = 420; 

  useEffect(() => {
    if (!isAutoRotating || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => prev - 0.12); // Slower rotation 
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
    setRotation(prev => prev - delta * 0.15); 
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
    <section id="alumni" className="pt-12 pb-16 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
           <div className="relative inline-block pb-4">
               <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-4">
                 Karir Gemilang <span className="italic text-emerald-600">Alumni Kami</span>
               </h2>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-5 z-0 opacity-80">
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
           <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
             Lulusan Proteksi Tanaman telah sukses berkarir di berbagai perusahaan multinasional dan instansi pemerintah.
           </p>
        </motion.div>

        <div 
          className="relative h-[600px] w-full cursor-grab active:cursor-grabbing select-none flex items-center justify-center -mt-28 -mb-24"
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
              perspective: '2000px',
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
                     <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-xl relative border border-emerald-50 group hover:scale-105 transition-transform duration-300">
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
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <p className="text-xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                          {alumni.name}
                        </p>
                        <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">
                          {alumni.role}
                        </p>
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
                          <span className="text-sm text-white font-medium italic">
                            {alumni.company}
                          </span>
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
// SCHOLARSHIP SECTION (Desktop Version)
// ============================================
const ScholarshipSection = () => {
  const scholarships = [
    {
      title: 'Beasiswa dari Pemerintah',
      desc: 'Beasiswa yang diberikan oleh pemerintah.',
      list: '(Bidikmisi, KIP-K, BPI, dll.)',
      color: 'bg-emerald-500',
      icon: <GraduationCap className="text-white" size={32} />
    },
    {
      title: 'Beasiswa dari Korporasi ',
      desc: 'Beasiswa yang diberikan oleh swasta maupun BUMN.',
      list: '(Djarum,PUSRI, BSI, BI, Bukit Asam, dll.)',
      color: 'bg-emerald-500',
      icon: <Coins className="text-white" size={32} />
    },
    {
      title: 'Beasiswa Yayasan Alumni Proteksi Tanaman FP Unila',
      desc: '5 mahasiswa per tahun & jaminan langsung kerja untuk 10 lulusan terbaik per tahun.',
      list: '(Beasiswa Prestasi dan Beasiswa Kebutuhan.)',
      color: 'bg-emerald-500',
      icon: <Sparkles className="text-white" size={32} />
    }
  ];

  return (
    <section id="scholarship" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row gap-16 items-center">
          {/* Left Side: Title & Image */}
          <div className="w-1/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <div className="relative inline-block pb-4">
                  <h2 className="text-5xl font-serif font-bold text-gray-900 leading-tight relative z-10">
                    Beragam Beasiswa <br />
                    <span className="italic text-emerald-600">Menantimu !</span>
                  </h2>
                  <div className="absolute bottom-0 left-0 w-[80%] h-5 z-0 opacity-80">
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
               <p className="text-gray-600 mt-6 text-lg">
                 Tersedia bebagai beasiswa yang dapat diakses mahasiswa maupun calon mahasiswa.
               </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px]"
            >
              <img 
                src="/assets/beasiswa_unila.png" 
                alt="About Scholarship"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Cards Grid */}
          <div className="flex-1 grid grid-cols-1 gap-6">
            {scholarships.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ x: -10 }}
                className="group flex items-center gap-8 bg-slate-50 p-8 rounded-[2rem] border border-gray-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-20 h-20 ${s.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{s.title}</h3>
                  <p className="text-gray-600 font-medium mb-3 text-base">
                    {s.desc}
                  </p>
                  <span className="inline-block text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full uppercase tracking-wider border border-emerald-100">
                    {s.list}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// HIMAPROTEKTA SECTION (Desktop Version)
// ============================================
const HimaprotektaSection = () => {
    // Desktop: Infinity Slider
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
        const itemWidth = width * 0.25; 
        const itemFullWidth = itemWidth + 12; // + gap
        const centerOffset = (width - itemWidth) / 2;
        
        // Initial scroll
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
        const itemWidth = width * 0.25;
        const itemFullWidth = itemWidth + 12;
        const centerOffset = (width - itemWidth) / 2;
        
        const rawIndex = Math.round((scrollLeft + centerOffset) / itemFullWidth);
        const normalizedIndex = rawIndex % baseVideoIds.length;
        
        if (rawIndex !== currentRawIndex) {
          setCurrentRawIndex(rawIndex);
        }
        
        if (normalizedIndex !== activeIndex && normalizedIndex >= 0) {
          setActiveIndex(normalizedIndex);
        }
  
        // Seamless jump
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
        const itemWidth = width * 0.25;
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
      <section id="himaprotekta" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="relative inline-block pb-4">
              <h2 className="text-5xl font-serif font-bold text-gray-900 leading-tight relative z-10 px-4">
                Himpunan Mahasiswa <span className="italic text-emerald-600">HIMAPROTEKTA</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-5 z-0 opacity-80">
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
            <p className="text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
               Wadah Asah <span className="font-bold text-emerald-600">Soft Skill, Kreativitas & Jejaring</span> Mahasiswa
            </p>
          </div>
  
          {/* Infinity Carousel Wrapper */}
          <div className="relative group/carousel">
             <button 
                onClick={handleScrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-24 z-30 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-emerald-600 hover:scale-110 active:scale-95 transition-all border border-emerald-100"
             >
                <ChevronLeft size={32} />
             </button>

             <button 
                onClick={handleScrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-24 z-30 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-emerald-600 hover:scale-110 active:scale-95 transition-all border border-emerald-100"
             >
                <ChevronRight size={32} />
             </button>

             <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full overflow-x-auto snap-x snap-mandatory flex gap-3 px-0 pb-10 scrollbar-hide select-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
             <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
  
             {videoIds.map((id, index) => {
               const isActive = index === currentRawIndex;
               return (
                 <div key={`${id}-${index}`} className="min-w-[25%] snap-center">
                   <motion.div
                     animate={{ 
                       opacity: isActive ? 1 : 0.4,
                       scale: isActive ? 1 : 0.85,
                     }}
                     transition={{ duration: 0.3 }}
                     className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-50 group transition-all duration-300 relative"
                     style={{
                        zIndex: isActive ? 10 : 1
                     }}
                   >
                     {/* Header */}
                     <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-between">
                         <div className="flex items-center gap-1">
                             <Smartphone size={14} />
                             <span className="font-bold text-[10px]">@himaprotekta</span>
                         </div>
                         <Play className={isActive ? 'animate-pulse' : 'opacity-20'} size={12} fill="currentColor" />
                     </div>
  
                     {/* Interactive Iframe */}
                     <div className="aspect-[9/16] relative bg-black">
                       {/* Overlay to allow clicking/interacting only when active? Or always? TikTok embeds handle clicks internally */}
                       {isActive ? (
                         <>
                            {/* Overlay to catch click events if needed or just let it pass */}
                            <iframe
                                src={`https://www.tiktok.com/embed/v2/${id}?muted=1`}
                                className="absolute inset-0 w-full h-full border-0 relative z-10"
                                allow="autoplay; encrypted-media"
                                title={`Video ${index}`}
                            />
                         </>
                       ) : (
                          // Placeholder for non-active items to save resources? 
                          // Or just show them dimmed. TikTok embeds are heavy.
                          // Keeping duplicated iframes is heavy. 
                          // Let's render them anyway for smoothness as per request "infinity", 
                          // but maybe optimize later if laggy. 
                          // The mobile version conditionally renders queue/iframe.
                          // Let's copy mobile conditional rendering for performance.
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-emerald-500/20">
                             <Smartphone size={32} />
                             <span className="text-[8px] font-bold uppercase tracking-wider mt-2">Queue</span>
                          </div>
                       )}
                       {isActive && (
                         <div className="absolute inset-0 pointer-events-none rounded-none border-4 border-transparent z-30" />
                       )}
                     </div>
                   </motion.div>
                 </div>
               );
             })}
          </div>
          </div>
          
          <div className="mt-8 text-center">
                
               {/* Controls / Indicators */}
               <div className="flex items-center justify-center gap-2 mb-6">
                 {baseVideoIds.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => scrollTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-emerald-200 hover:bg-emerald-300'
                      }`} 
                    />
                 ))}
               </div>
  
               <a href="https://www.tiktok.com/@himaprotekta" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline text-lg">
                  Lihat lebih banyak di TikTok <ArrowRight size={20}/>
               </a>
          </div>
        </div>
      </section>
    );
  };

// ============================================
// JOURNAL SECTION (Desktop Version)
// ============================================
const JournalSection = () => {
    const journals = [
      { title: "Terindeks SCOPUS", fullName: "Jurnal Hama & Penyakit Tumbuhan Tropika", tags: ["Jurnal Internasional"], image: "/assets/jhptt_cover.png", url: "https://jhpttropika.fp.unila.ac.id/index.php/jhpttropika" },
      { title: "", fullName: "Jurnal Proteksi Agrikultura", tags: ["Jurnal Nasional"], image: "/assets/jpa_cover.png", url: "https://jpa.fp.unila.ac.id/index.php/jpa" }
    ];
  
    return (
      <section id="journal" className="py-20 bg-transparent relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
             {/* Left Text */}
             <div className="flex-1 text-left">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full mb-6 inline-block"> Scientific Publications </span>
                <div className="relative inline-block pb-4 mb-4">
                  <h2 className="text-6xl font-serif font-bold text-gray-900 leading-tight relative z-10">
                    Publikasi Jurnal <br/><span className="italic text-emerald-600">Jurusan</span>
                  </h2>
                  <div className="absolute bottom-0 left-0 w-[80%] h-5 z-0 opacity-80">
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
                <p className="text-xl text-gray-500 italic leading-relaxed max-w-xl">
                  "Dedikasi tanpa batas untuk perkembangan ilmu pengetahuan dan perlindungan ekosistem pertanian berkelanjutan."
                </p>
             </div>

             {/* Right Cards */}
             <div className="flex-1 flex gap-8 justify-center">
               {journals.map((journal, idx) => (
                 <motion.a
                   key={idx}
                   href={journal.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   whileHover={{ y: -10 }}
                   className="group block relative w-64"
                 >
                   <div className="aspect-[9/13] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative group-hover:shadow-emerald-200/50 transition-all duration-300">
                      <img src={journal.image} alt={journal.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-emerald-400 text-xs font-bold uppercase mb-1">{journal.tags[0]}</span>
                        <h4 className="text-white font-bold text-lg">{journal.title}</h4>
                      </div>
                   </div>
                   <h3 className="text-center mt-6 font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                     {journal.fullName}
                   </h3>
                 </motion.a>
               ))}
             </div>
          </div>
        </div>
      </section>
    );
};

// ============================================
// CTA & CONTACT (Desktop)
// ============================================

const CTASection = () => {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-slate-900" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
         <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-bold tracking-[0.2em] mb-8 uppercase">
           JURUSAN PROTEKSI TANAMAN
         </span>
         <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
           Siap Menjadi <span className="italic text-emerald-400">Generasi Emas?</span>
         </h2>
         <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
           Bergabunglah bersama kami untuk menjadi ahli perlindungan tanaman yang inovatif dan berdaya saing global.
         </p>
         
         <motion.a
           href="#"
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="inline-flex items-center gap-4 bg-white text-emerald-900 px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-white/20 transition-all"
         >
           Come Join Us
         </motion.a>
      </div>
    </section>
  );
};

const ContactSection = () => {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest mb-4 block">Hubungi Kami</span>
              <div className="relative inline-block pb-4 mb-8">
                 <h2 className="text-5xl font-serif font-bold text-gray-900 relative z-10">
                   Tetap Terhubung <br/> <span className="italic text-emerald-600">Dengan Kami</span>
                 </h2>
                 <div className="absolute bottom-0 left-0 w-[80%] h-5 z-0 opacity-80">
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
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Punya pertanyaan seputar program studi atau pendaftaran? Tim kami siap membantu kamu.
              </p>
              
              <div className="space-y-6">
                <a href="https://wa.me/6281373525491" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors group">
                   <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle size={32} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-lg">WhatsApp</h4>
                      <p className="text-gray-500">+62 813 7352 5491</p>
                   </div>
                </a>
                
                <a href="mailto:hpt@fp.unila.ac.id" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors group">
                   <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail size={32} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                      <p className="text-gray-500">hpt@fp.unila.ac.id</p>
                   </div>
                </a>
              </div>
           </div>
           
           <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full min-h-[400px]">
              <div className="flex items-start gap-4 mb-8">
                 <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Lokasi Kampus</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Gedung G, Fakultas Pertanian Universitas Lampung,<br/>
                      Jl. Prof. Dr. Ir. Sumantri Brojonegoro No.1, Bandar Lampung
                    </p>
                 </div>
              </div>
              
              {/* Maps Placeholder or Iframe */}
              <div className="w-full h-[300px] bg-slate-100 rounded-2xl overflow-hidden relative">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.417277726514!2d105.24151331476503!3d-5.366472696096574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5f592395b0f%3A0x502b45070f80730!2sFakultas%20Pertanian%20Universitas%20Lampung!5e0!3m2!1sen!2sid!4v1626078000000!5m2!1sen!2sid" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   title="Map"
                 />
              </div>
           </div>
        </div>
      </section>
    );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <img src="/assets/navbar_logos.png" alt="Logo" className="h-16 w-auto mx-auto mb-8 opacity-90" />
        
        <div className="text-emerald-400 font-bold uppercase tracking-[0.15em] mb-8 text-sm max-w-3xl mx-auto">
          <div className="block">Official Promotion Media of the Department of Plant Protection,</div>
          <div className="block">Faculty of Agriculture, Universitas Lampung</div>
        </div>

        <div className="w-24 h-[1px] bg-white/10 mx-auto mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/40 text-sm">
           <p>© {new Date().getFullYear()} Jurusan Proteksi Tanaman, Universitas Lampung</p>
           <div className="hidden md:block w-1.5 h-1.5 bg-emerald-500 rounded-full" />
           <p>Developed by Bihikmi</p>
        </div>
      </div>
    </footer>
  );
};


// Main Desktop Page Component
const DesktopPage = () => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
      const newLenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      setLenis(newLenis);
  
      function raf(time: number) {
        newLenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      return () => {
        newLenis.destroy();
      };
    }, []);

    useEffect(() => {
        if (!lenis) return;
    
        // Handle anchor links for smooth scrolling
        const handleAnchorClick = (e: MouseEvent) => {
          const link = (e.target as HTMLElement).closest('a');
          if (link) {
            const href = link.getAttribute('href');
            if (href?.startsWith('#') && href.length > 1) { 
              e.preventDefault();
              const target = document.querySelector(href);
              if (target) {
                 lenis.scrollTo(target as HTMLElement, { 
                   offset: -100,
                   duration: 1.5,
                   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                 });
              }
            }
          }
        };
    
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
      }, [lenis]);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="sticky top-0 left-0 w-full h-screen z-0">
                <Hero />
            </div>
            <HeroTransition />
            
            <div className="relative z-10 bg-white shadow-2xl">
                {/* Replaced Content with Mobile Components Adapted */}
                <div className="bg-gradient-to-b from-white via-emerald-50/40 via-slate-50/60 to-white">
                    <DosenSection />
                    <AlumniSection />
                    <ScholarshipSection />
                    <HimaprotektaSection />
                    <JournalSection />
                </div>
                <CTASection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    );
};

export default DesktopPage;
