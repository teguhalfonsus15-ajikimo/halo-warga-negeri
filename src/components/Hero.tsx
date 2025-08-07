import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Users, BarChart3, Shield } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "544.000", label: "Pesan siar masyarakat terkirim" },
    { value: "528.409.802", label: "Balasan pesan diproses melalui berbagai kanal" },
    { value: "92.183.440", label: "Tampilan halaman aplikasi PWA" },
    { value: "112+ Juta", label: "Pengguna aktif di seluruh Indonesia" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Satu platform untuk{" "}
            <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              menghubungkan
            </span>{" "}
            warga dan pemerintah
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
            HaloGov memudahkan akses untuk layanan publik dan komunikasi langsung 
            dengan instansi pemerintah — kapan saja, di mana saja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" variant="outline-white" className="group">
              Gunakan HaloGov di Aplikasi
              <span className="ml-2 text-sm text-white/70">(Coming Soon)</span>
            </Button>
            <Button size="xl" variant="outline-white" className="group">
              <MessageCircle className="w-5 h-5" />
              Gunakan HaloGov di WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline-white" className="group">
              <MessageCircle className="w-5 h-5" />
              Gunakan HaloGov di Telegram
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-accent-glow">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute bottom-10 left-10 opacity-20">
        <Users className="w-16 h-16" />
      </div>
      <div className="absolute top-1/3 right-10 opacity-20">
        <Shield className="w-12 h-12" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-20">
        <BarChart3 className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Hero;