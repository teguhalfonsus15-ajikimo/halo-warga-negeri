import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, 
  BarChart3, 
  Zap, 
  Link, 
  Bell, 
  Users 
} from "lucide-react";

const ForGovernment = () => {
  const capabilities = [
    {
      icon: Activity,
      text: "Penerimaan dan pemrosesan pengaduan masyarakat secara real-time"
    },
    {
      icon: BarChart3,
      text: "Dashboard analitik untuk pelaporan dan evaluasi kinerja layanan"
    },
    {
      icon: Zap,
      text: "Otomatisasi permohonan bantuan dan dokumen kependudukan"
    },
    {
      icon: Link,
      text: "Integrasi dengan sistem Dukcapil, Kemensos, BPJS, dan lainnya"
    },
    {
      icon: Bell,
      text: "Notifikasi massal berbasis wilayah dan demografi"
    },
    {
      icon: Users,
      text: "Peningkatan partisipasi publik dan perencanaan berbasis aspirasi warga"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Capabilities List */}
            <div className="space-y-4 animate-fade-in-up">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-md transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-foreground font-medium flex-1">
                          {capability.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Untuk Pemerintah
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                HaloGov mendukung instansi pemerintah dalam menyederhanakan layanan publik, 
                meningkatkan transparansi, dan membangun kepercayaan masyarakat melalui teknologi. 
                Platform ini siap diintegrasikan dengan sistem internal dan dapat diakses oleh 
                seluruh lapisan warga.
              </p>
              <Button size="xl" variant="government" className="mb-8">
                Hubungi Tim HaloGov Untuk Kolaborasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForGovernment;