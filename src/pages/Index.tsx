import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import GameModes from "@/components/GameModes";
import FoundersSection from "@/components/FoundersSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-purple-900/40 z-10" />
          <img 
            src="/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png"
            alt="Trinova Studios Background"
            className="absolute w-full h-full object-cover opacity-20"
          />
          <div className="container relative z-20 text-center">
            <img 
              src="/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png"
              alt="Trinova Studios Logo"
              className="w-48 h-48 mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Trinova Studios
            </h1>
            <p className="text-xl md:text-2xl text-purple-200/80 mb-8 max-w-2xl mx-auto">
              Minecraft dünyasının en iyi sunucusuna hoş geldiniz
            </p>
            <div className="flex justify-center gap-4">
              <Button className="trinova-gradient text-lg px-8 py-6">
                Şimdi Oyna
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-purple-500/50 hover:bg-purple-500/10" asChild>
                <Link to="/store">Mağazayı Keşfet</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AboutUs />

        {/* Game Modes Section */}
        <GameModes />

        {/* Founders Section */}
        <FoundersSection />

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
        <div className="container text-center text-purple-200/60">
          <p>© 2025 Trinova Studios. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
