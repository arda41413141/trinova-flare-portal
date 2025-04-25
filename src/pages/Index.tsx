import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container relative z-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Trinova Studios
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Minecraft dünyasının en iyi sunucusuna hoş geldiniz
            </p>
            <div className="flex justify-center gap-4">
              <Button className="trinova-gradient text-lg px-8 py-6">
                Şimdi Oyna
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Mağazayı Keşfet
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AboutUs />

        {/* Features Section */}
        <section className="py-20 bg-black/40">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">VIP Paketler</h3>
                <p className="text-white/70">
                  Özel ayrıcalıklar ve benzersiz özellikler ile VIP deneyimini yaşayın
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Bakiye Yükle</h3>
                <p className="text-white/70">
                  Güvenli ödeme yöntemleri ile hesabınıza bakiye yükleyin
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">7/24 Destek</h3>
                <p className="text-white/70">
                  Profesyonel destek ekibimiz her zaman yanınızda
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="glass-panel py-8">
        <div className="container text-center text-white/60">
          <p>© 2025 Trinova Studios. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
