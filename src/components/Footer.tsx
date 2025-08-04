import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const links = [
    "Untuk Warga",
    "Untuk Pemerintah", 
    "Mitra Kami",
    "Studi Kasus",
    "Minta Demo",
    "Lokasi & Kontak"
  ];

  const socialLinks = [
    "Twitter",
    "LinkedIn", 
    "Instagram",
    "YouTube"
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              HaloGov
            </h3>
            <p className="text-white/80 leading-relaxed max-w-md">
              Platform resmi yang menghubungkan warga dan pemerintah untuk 
              layanan publik yang lebih baik, transparan, dan mudah diakses.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Media Sosial
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">
            © 2024 HaloGov. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;