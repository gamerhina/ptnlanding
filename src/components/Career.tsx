import { motion } from 'framer-motion';
import { Briefcase, Building2, FlaskConical, Globe } from 'lucide-react';

const careers = [
  {
    title: "Perusahaan Pestisida",
    desc: "Menjadi ahli formulasi atau konsultan teknis di perusahaan multinasional besar.",
    icon: Building2,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Startup Agritech",
    desc: "Mengembangkan teknologi pertanian presisi dan solusi digital untuk petani modern.",
    icon: Globe,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Lembaga Pemerintah",
    desc: "Badan Karantina, Dinas Pertanian, hingga Kementerian sebagai pengambil kebijakan.",
    icon: Briefcase,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Penelitian (R&D)",
    desc: "Mengembangkan varietas tahan hama dan metode pengendalian hayati yang inovatif.",
    icon: FlaskConical,
    color: "bg-purple-100 text-purple-600"
  },
];

const Career = () => {
  return (
    <section id="career" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-20 relative">
           <h2 className="text-4xl md:text-5xl font-display font-bold text-text-light dark:text-text-dark relative z-10 leading-tight">
             Peluang Karier & <br />
             <span className="relative inline-block text-accent-purple dark:text-accent-green">
               Masa Depan Luas
             </span>
           </h2>
           <p className="mt-6 text-text-light/60 dark:text-text-dark/60 max-w-2xl text-lg">
             Lulusan kami tersebar di berbagai sektor strategis, memberikan kontribusi nyata bagi ketahanan pangan nasional.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {careers.map((job, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1 }}
               whileHover={{ y: -5 }}
               className="group flex flex-col md:flex-row items-center md:items-start p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl transition-all duration-300"
             >
                <div className={`w-16 h-16 ${job.color} rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                   <job.icon size={32} />
                </div>
                <div className="text-center md:text-left">
                   <h3 className="text-xl font-bold font-display text-text-light dark:text-text-dark mb-2">{job.title}</h3>
                   <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed text-sm">{job.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Career;
