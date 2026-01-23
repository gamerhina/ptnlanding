import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

const staff = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `Dr. Dosen ${i + 1}`,
  field: i % 3 === 0 ? "Entomologi" : i % 3 === 1 ? "Fitopatologi" : "Ilmu Hama",
  image: `https://i.pravatar.cc/300?img=${i + 20}` 
}));

const Faculty = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="faculty" className="py-12">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-card border border-white">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-secondary font-bold uppercase tracking-widest text-sm">
              <GraduationCap size={16} />
              <span>Tenaga Pengajar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main">
              Dosen & Ahli Kami
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
               onClick={scrollLeft} 
               className="p-4 bg-gray-50 border border-gray-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
               aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
               onClick={scrollRight} 
               className="p-4 bg-gray-50 border border-gray-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
               aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-12 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {staff.map((person) => (
            <motion.div 
              key={person.id}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-[2rem] p-4 snap-center group cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 border border-gray-100 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-80 w-full rounded-[1.5rem] overflow-hidden mb-4 relative">
                 <img 
                   src={person.image} 
                   alt={person.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                   {person.field}
                 </div>
              </div>
              
              <div className="px-2 pb-2 text-center">
                 <h3 className="text-xl font-bold text-text-main mb-1">{person.name}</h3>
                 <p className="text-text-muted text-sm">Lektor Kepala</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
