

const Alumni = () => {
    // Basic placeholder for marquee or grid
  return (
    <section id="alumni" className="py-12">
       <div className="bg-text-main text-white rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center shadow-card">
           
           <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-bold mb-8">
                   Bergabung dengan <span className="text-secondary">5,000+ Alumni</span> Sukses.
               </h2>
               <p className="text-lg text-white/70 mb-10">
                   Jaringan alumni kami yang kuat siap membantu karir Anda melesat lebih cepat.
               </p>
                <button className="bg-white text-text-main px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-glow-blue">
                    Lihat Kisah Mereka
                </button>
           </div>
           
           {/* Background decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full" />

       </div>
    </section>
  );
};

export default Alumni;
