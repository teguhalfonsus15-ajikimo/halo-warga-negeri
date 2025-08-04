import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Activity, FileText, MessageSquare, Building } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: Heart,
      title: "Digitalisasi Bantuan Sosial",
      subtitle: "HaloGov membantu Kemensos menyalurkan bantuan kepada jutaan penerima manfaat",
      gradient: "from-success/20 to-success/5"
    },
    {
      icon: Activity,
      title: "Respons Kesehatan Publik", 
      subtitle: "Pelacakan dan komunikasi cepat selama pandemi COVID-19 dan vaksinasi nasional",
      gradient: "from-destructive/20 to-destructive/5"
    },
    {
      icon: FileText,
      title: "Administrasi Kependudukan",
      subtitle: "Warga mengajukan KTP/KK secara daring melalui integrasi dengan Dukcapil",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: MessageSquare,
      title: "Pelaporan Layanan Publik",
      subtitle: "Evaluasi langsung dari masyarakat terhadap layanan di sekolah, puskesmas, dan fasilitas umum",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Building,
      title: "Smart City & Pemerintahan Daerah",
      subtitle: "Pemerintah kota dan kabupaten menggunakan HaloGov untuk menyampaikan info dan menerima aspirasi warga secara real time",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Studi Kasus Penggunaan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-to-br ${study.gradient} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {study.subtitle}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;