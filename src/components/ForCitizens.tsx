import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  MessageSquare, 
  FileText, 
  Bell, 
  AlertTriangle, 
  Smartphone,
  Shield
} from "lucide-react";

const ForCitizens = () => {
  const benefits = [
    {
      icon: Heart,
      text: "Ajukan bantuan sosial (PKH, BPNT, BLT) langsung dari ponsel"
    },
    {
      icon: MessageSquare,
      text: "Laporkan masalah layanan publik di puskesmas, sekolah, atau kelurahan"
    },
    {
      icon: FileText,
      text: "Cek status NIK, kartu keluarga, atau dokumen kependudukan"
    },
    {
      icon: Bell,
      text: "Ikuti informasi bencana, vaksinasi, dan program pemerintah terbaru"
    },
    {
      icon: AlertTriangle,
      text: "Terima notifikasi langsung dari pemerintah daerah Anda"
    },
    {
      icon: Smartphone,
      text: "Gunakan WhatsApp atau Telegram untuk komunikasi dua arah"
    },
    {
      icon: Shield,
      text: "Laporkan korupsi atau penyalahgunaan dana publik secara anonim"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Untuk Warga
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                HaloGov memberikan akses mudah dan cepat kepada berbagai layanan publik 
                hanya melalui ponsel Anda. Tidak perlu lagi antre atau datang ke kantor 
                pelayanan. Semua tersedia secara daring, aman, dan gratis.
              </p>
              <Button size="xl" variant="hero" className="mb-8">
                Mulai Gunakan HaloGov Sekarang
              </Button>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-md transition-all duration-300 border-border/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-foreground font-medium flex-1">
                          {benefit.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCitizens;