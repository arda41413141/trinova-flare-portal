
import { Button } from "@/components/ui/button";

const GameModes = () => {
  const gameModes = [
    {
      title: "SMP",
      description: "Survival Multiplayer deneyimini arkadaşlarınızla yaşayın. Güvenli ticaret, ekonomi sistemi ve topluluk etkinlikleriyle zenginleştirilmiş bir oyun modu.",
      features: ["Ekonomi sistemi", "PvP korumalı bölgeler", "Özel eşyalar", "Haftalık etkinlikler"],
      icon: "🏰"
    },
    {
      title: "LifeSteal",
      description: "Her öldürdüğünüz oyuncudan bir kalp çalın! Hayatta kalma mücadelesinde stratejinizi belirleyin ve en güçlü oyuncu olun.",
      features: ["Kalp çalma sistemi", "Özel büyü sistemi", "PvP alanları", "Sezonluk ödüller"],
      icon: "❤️"
    },
    {
      title: "Crystal PvP",
      description: "End Crystal'ları kullanarak PvP yapın! Hızlı refleksler ve stratejik düşünme gerektiren zorlu bir oyun modu.",
      features: ["Crystal savaş sistemi", "Özel arena haritaları", "Turnuvalar", "Sıralama sistemi"],
      icon: "💎"
    },
    {
      title: "Skyblock",
      description: "Küçük bir ada ile başlayıp kendi imparatorluğunuzu kurun. Özel adalar, görevler ve benzersiz oyun mekanikleri ile eğlenceli bir deneyim.",
      features: ["Özel ada sistemleri", "Seviye sistemi", "Görev sistemi", "Ada yarışmaları"],
      icon: "🏝️"
    },
    {
      title: "Fantezi Survival",
      description: "Büyülü yetenekler, özel eşyalar ve fantastik yaratıklarla dolu bir dünyada hayatta kalın.",
      features: ["Özel büyü sistemi", "Fantastik yaratıklar", "Özel silahlar", "Zindan sistemi"],
      icon: "⚔️"
    }
  ];

  return (
    <section className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Oyun Modları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameModes.map((mode) => (
            <div key={mode.title} className="glass-panel p-6 rounded-lg hover:border-purple-500/30 transition-colors">
              <div className="text-4xl mb-4">{mode.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-300">{mode.title}</h3>
              <p className="text-purple-200/80 mb-4">{mode.description}</p>
              <ul className="space-y-2 mb-6">
                {mode.features.map((feature) => (
                  <li key={feature} className="text-purple-300/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="trinova-gradient w-full">
                Şimdi Oyna
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
