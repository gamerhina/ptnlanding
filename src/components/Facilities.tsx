
const facilities = [
  { name: "Laboratorium Biologi", img: "/assets/hero_1.jpg", desc: "Peralatan mikroskopi terbaru." },
  { name: "Lab Bioteknologi", img: "/assets/hero_2.jpg", desc: "PCR & Elektroforesis lengkap." },
  { name: "Greenhouse Pintar", img: "/assets/hero_3.jpg", desc: "Kontrol iklim otomatis berbasis IoT." },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-12">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Main Large Card */}
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden relative shadow-glow-blue h-[500px] group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-bold mb-6">
                  Fasilitas World Class
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Praktik dengan <br/>Alat Canggih.
                </h2>
                <p className="text-white/80 max-w-sm">
                  Kami menyediakan lingkungan belajar yang mensimulasikan industri pertanian modern.
                </p>
              </div>

              <div className="relative mt-8 h-48 rounded-3xl overflow-hidden border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img src="/assets/hero_1.jpg" alt="Main Lab" className="w-full h-full object-cover" />
              </div>
          </div>

          {/* Right Column Grid */}
          <div className="flex flex-col gap-6 h-[500px]">
             {facilities.slice(1).map((item, idx) => (
                <div key={idx} className="flex-1 bg-white rounded-[2.5rem] p-6 flex gap-6 items-center shadow-card border border-white hover:border-gray-200 transition-colors relative overflow-hidden group">
                    <div className="w-32 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-text-main mb-1">{item.name}</h3>
                       <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                    
                    {/* Hover Button */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-text-main opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                       →
                    </div>
                </div>
             ))}
             
             {/* Stat Card */}
             <div className="flex-1 bg-text-main rounded-[2.5rem] p-8 flex items-center justify-between text-white shadow-card relative overflow-hidden">
                <div>
                   <div className="text-5xl font-bold mb-1 text-secondary">15+</div>
                   <div className="text-sm text-gray-400">Laboratorium Terintegrasi</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                   <span className="text-2xl">⚡</span>
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default Facilities;
