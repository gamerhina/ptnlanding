import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Coins, TrendingUp, Users } from 'lucide-react';

const bentoItems = [
  {
    title: "Tahan Krisis",
    desc: "Bidang agrikultur terbukti paling tangguh menghadapi ketidakpastian ekonomi.",
    icon: ShieldCheck,
    size: "col-span-12 md:col-span-8",
    bg: "bg-blue-50",
    text: "text-blue-900",
    iconColor: "text-blue-600"
  },
  {
    title: "Teknologi AI",
    desc: "Integrasi drone dan sensor dalam diagnosa hama.",
    icon: Cpu,
    size: "col-span-12 md:col-span-4",
    bg: "bg-white",
    text: "text-text-main",
    iconColor: "text-secondary"
  },
  {
    title: "Biaya Terjangkau",
    desc: "Investasi pendidikan terbaik dengan ROI tinggi.",
    icon: Coins,
    size: "col-span-12 md:col-span-4",
    bg: "bg-white",
    text: "text-text-main",
    iconColor: "text-yellow-600"
  },
  {
    title: "Prospek Luas",
    desc: "Karir di instansi pemerintah, swasta, hingga entrepreneur.",
    icon: TrendingUp,
    size: "col-span-12 md:col-span-4",
    bg: "bg-primary text-white", // Featured cell
    text: "text-white",
    iconColor: "text-white/80"
  },
  {
    title: "Jaringan Luas",
    desc: "Alumni tersebar di seluruh Indonesia.",
    icon: Users,
    size: "col-span-12 md:col-span-4",
    bg: "bg-white",
    text: "text-text-main",
    iconColor: "text-green-600"
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-12">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-card border border-white relative overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Kenapa Harus PTN?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            Alasan Memilih Masa Depan <span className="text-primary italic">Di Sini.</span>
          </h2>
          <p className="text-text-muted text-lg">
            Kombinasi sempurna antara ilmu pengetahuan alam klasik dan teknologi modern untuk keberlanjutan bumi.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-12 gap-6">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`${item.size} ${item.bg} rounded-[2rem] p-8 flex flex-col justify-between min-h-[240px] border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden`}
            >
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/0 transition-all pointer-events-none" />
               
               <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${item.bg === 'bg-white' ? 'bg-gray-50' : 'bg-white/20'}`}>
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  {item.size.includes('col-span-8') && (
                     <div className="hidden md:block bg-white/50 px-3 py-1 rounded-full text-xs font-bold text-blue-800">
                        Top Choice
                     </div>
                  )}
               </div>

               <div>
                 <h3 className={`text-2xl font-bold mb-2 ${item.text}`}>{item.title}</h3>
                 <p className={`text-lg opacity-80 ${item.text}`}>{item.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
