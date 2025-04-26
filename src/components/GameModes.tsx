
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sword, Heart, Globe, Map, Award, Medal, Users, Clock } from "lucide-react";

const GameModes = () => {
  const gameModes = [
    {
      title: "SMP",
      description: "Survival Multiplayer deneyimini arkadaşlarınızla yaşayın. Güvenli ticaret, ekonomi sistemi ve topluluk etkinlikleriyle zenginleştirilmiş bir oyun modu.",
      features: ["Ekonomi sistemi", "PvP korumalı bölgeler", "Özel eşyalar", "Haftalık etkinlikler"],
      stats: [
        { value: "5000+", label: "Aktif Oyuncu" },
        { value: "12 GB", label: "RAM" },
        { value: "2.5 TB", label: "Harita" }
      ],
      icon: Globe,
      color: "from-purple-600 to-blue-600",
      image: "bg-[url('/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png')]"
    },
    {
      title: "LifeSteal",
      description: "Her öldürdüğünüz oyuncudan bir kalp çalın! Hayatta kalma mücadelesinde stratejinizi belirleyin ve en güçlü oyuncu olun.",
      features: ["Kalp çalma sistemi", "Özel büyü sistemi", "PvP alanları", "Sezonluk ödüller"],
      stats: [
        { value: "2400+", label: "Aktif Oyuncu" },
        { value: "8 GB", label: "RAM" },
        { value: "1.2 TB", label: "Harita" }
      ],
      icon: Heart,
      color: "from-red-600 to-pink-600",
      image: "bg-[url('/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png')]"
    },
    {
      title: "Crystal PvP",
      description: "End Crystal'ları kullanarak PvP yapın! Hızlı refleksler ve stratejik düşünme gerektiren zorlu bir oyun modu.",
      features: ["Crystal savaş sistemi", "Özel arena haritaları", "Turnuvalar", "Sıralama sistemi"],
      stats: [
        { value: "1800+", label: "Aktif Oyuncu" },
        { value: "6 GB", label: "RAM" },
        { value: "0.5 TB", label: "Harita" }
      ],
      icon: Sword,
      color: "from-blue-600 to-cyan-600",
      image: "bg-[url('/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png')]"
    },
    {
      title: "Skyblock",
      description: "Küçük bir ada ile başlayıp kendi imparatorluğunuzu kurun. Özel adalar, görevler ve benzersiz oyun mekanikleri ile eğlenceli bir deneyim.",
      features: ["Özel ada sistemleri", "Seviye sistemi", "Görev sistemi", "Ada yarışmaları"],
      stats: [
        { value: "3500+", label: "Aktif Oyuncu" },
        { value: "10 GB", label: "RAM" },
        { value: "1.8 TB", label: "Harita" }
      ],
      icon: Map,
      color: "from-green-600 to-emerald-600",
      image: "bg-[url('/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png')]"
    },
    {
      title: "Fantezi Survival",
      description: "Büyülü yetenekler, özel eşyalar ve fantastik yaratıklarla dolu bir dünyada hayatta kalın. Klasik minecraft deneyiminin çok ötesinde.",
      features: ["Özel büyü sistemi", "Fantastik yaratıklar", "Özel silahlar", "Zindan sistemi"],
      stats: [
        { value: "2200+", label: "Aktif Oyuncu" },
        { value: "8 GB", label: "RAM" },
        { value: "1.5 TB", label: "Harita" }
      ],
      icon: Award,
      color: "from-amber-600 to-orange-600",
      image: "bg-[url('/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png')]"
    }
  ];

  const serverStats = [
    { value: "15,000+", label: "Toplam Oyuncu", icon: Users },
    { value: "99.9%", label: "Çalışma Süresi", icon: Clock },
    { value: "32 GB", label: "Ortalama RAM", icon: Globe },
    { value: "5+", label: "Oyun Modu", icon: Medal }
  ];

  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Oyun Modları
          </h2>
          <p className="text-lg text-purple-300/80 max-w-2xl mx-auto">
            Trinova Studios'da her oyuncu tipine uygun eşsiz oyun modları bulunur. İster rekabetçi PvP, ister sakin bir survival oyunu, istersen yaratıcılığını konuşturabileceğin bir mod arayışında ol, burada senin için bir yer var.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {serverStats.map((stat, index) => (
            <div key={index} className="glass-panel p-4 rounded-lg text-center border border-purple-500/20">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-purple-200">{stat.value}</p>
              <p className="text-xs text-purple-400/80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Game Modes Detailed Cards */}
        <div className="space-y-12">
          {gameModes.map((mode, index) => (
            <div 
              key={mode.title} 
              className={`glass-panel overflow-hidden rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all ${index % 2 ? 'md:flex-row-reverse' : ''} md:flex`}
            >
              <div className={`w-full md:w-1/3 bg-cover bg-center h-64 md:h-auto ${mode.image} bg-purple-900`}>
                <div className={`w-full h-full bg-gradient-to-br ${mode.color} opacity-50`}></div>
              </div>

              <div className="w-full md:w-2/3 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${mode.color}`}>
                    <mode.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-purple-300">{mode.title}</h3>
                </div>

                <p className="text-purple-200/80 mb-6 text-lg">{mode.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {mode.stats.map((stat, idx) => (
                    <div key={idx} className="bg-purple-900/20 p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-purple-200">{stat.value}</p>
                      <p className="text-xs text-purple-400/80">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Separator className="my-6 bg-purple-500/20" />

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Özellikler:</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {mode.features.map((feature) => (
                      <li key={feature} className="text-purple-300/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className={`bg-gradient-to-r ${mode.color} hover:opacity-90 transition-opacity`}>
                  Şimdi Oyna
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Yeni Oyun Modları Geliyor!</h3>
          <p className="text-purple-200/70 mb-8 max-w-xl mx-auto">
            Ekibimiz sürekli olarak yeni ve heyecan verici oyun modları geliştirmektedir. Güncel duyurular için Discord sunucumuzu takip edin.
          </p>
          <Button className="trinova-gradient">
            Discord'a Katıl
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameModes;
