import { Button } from "@/components/ui/button";

const Partners = () => {
  const partners = [
    "KOMINFO",
    "DJP", 
    "KEMENSOS",
    "DUKCAPIL",
    "DISHUB",
    "BPJS Kesehatan",
    "BSSN",
    "Pemerintah Provinsi DKI Jakarta",
    "Pemerintah Kota Surabaya"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mitra Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            HaloGov bekerja sama dengan berbagai lembaga pemerintah nasional dan daerah 
            untuk mendukung transformasi digital layanan publik. Kolaborasi ini memperkuat 
            kepercayaan masyarakat dan memastikan setiap warga dapat mengakses layanan 
            yang adil, transparan, dan efisien.
          </p>
        </div>

        {/* Partners Slider */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
          <div className="flex animate-slide-left hover:animation-pause">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-4 bg-white rounded-lg shadow-md border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-lg font-semibold text-foreground whitespace-nowrap">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap mendigitalisasi layanan publik di daerah Anda?
          </h3>
          <Button size="xl" variant="outline-white">
            Minta Demo Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;