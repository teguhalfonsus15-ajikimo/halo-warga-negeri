import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  MessageSquare, 
  BarChart3, 
  Heart, 
  AlertTriangle, 
  Shield,
  Users,
  AlertCircle,
  Lock,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Akses satu pintu untuk berbagai layanan pemerintah pusat & daerah",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Laporkan dan nilai kualitas layanan publik (sekolah, puskesmas, fasilitas umum)",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Analitik waktu nyata untuk instansi pemerintah",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Ajukan bantuan sosial (DTKS, PKH, BPNT) secara digital",
      color: "text-success"
    },
    {
      icon: AlertTriangle,
      title: "Notifikasi dini untuk bencana, kesehatan, dan informasi darurat",
      color: "text-destructive"
    },
    {
      icon: Shield,
      title: "Cek status vaksinasi & hasil tes COVID-19",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Kirim pesan massal ke warga dalam satu wilayah",
      color: "text-primary"
    },
    {
      icon: AlertCircle,
      title: "Laporkan dugaan korupsi atau penyalahgunaan dana publik",
      color: "text-destructive"
    },
    {
      icon: Lock,
      title: "Perlindungan data pribadi dan keamanan terjamin",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Gratis dan mudah diakses melalui ponsel",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            HaloGov dapat digunakan untuk...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 ${feature.color} flex-shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium leading-relaxed">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;