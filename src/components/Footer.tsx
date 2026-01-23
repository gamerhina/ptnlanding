import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white rounded-t-[2.5rem] mt-12 mx-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
        
        <div className="text-center lg:text-left">
           <span className="font-bold text-xl tracking-tight text-text-main">PTN<span className="text-primary">.</span></span>
           <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-[0.05em] mt-3 leading-relaxed w-full">
             <div className="block w-full">Official Promotion Media of the Department of Plant Protection,</div>
             <div className="block w-full">Faculty of Agriculture, Universitas Lampung</div>
           </div>
           <p className="text-sm text-text-muted mt-2">© {new Date().getFullYear()} Proteksi Tanaman UNILA.</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-text-muted">
           <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
           <li><a href="#" className="hover:text-primary transition-colors">Program</a></li>
           <li><a href="#" className="hover:text-primary transition-colors">Dosen</a></li>
           <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
        </ul>

        <div className="flex gap-4">
           {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
           ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
