
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Server, Shield, Award, Headphones, Clock } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { value: "10,000+", label: "Kayıtlı Oyuncu", icon: Users },
    { value: "99.9%", label: "Çalışma Süresi", icon: Clock },
    { value: "24/7", label: "Destek", icon: Headphones },
    { value: "5+", label: "Sunucu", icon: Server }
  ];
  
  const features = [
    { 
      title: "Eşsiz Oyun Deneyimi", 
      description: "Özel geliştirdiğimiz pluginler ve modlar ile benzersiz bir Minecraft deneyimi sunuyoruz.",
      icon: Award
    },
    { 
      title: "Güçlü Altyapı", 
      description: "Son teknoloji sunucu donanımlarımız ile lag olmadan kesintisiz oyun deneyimi.",
      icon: Server
    },
    { 
      title: "Güvenli Ortam", 
      description: "Profesyonel yönetim ekibimiz ve anti-hile sistemlerimiz ile güvenli bir oyun ortamı.",
      icon: Shield
    }
  ];
  
  return (
    <section className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gradient">Trinova Studios Hakkında</h2>
        <p className="text-center text-purple-300/80 max-w-3xl mx-auto mb-12">
          Türkiye'nin en büyük Minecraft sunucularından biri olarak, oyunculara benzersiz deneyimler sunmak için sürekli çalışıyoruz.
        </p>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel p-4 rounded-lg text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-purple-200">{stat.value}</p>
              <p className="text-xs text-purple-400/80">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">{feature.title}</h3>
              <p className="text-purple-200/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Sunucumuzun Hikayesi</h3>
              <p className="text-purple-200/80 leading-relaxed">
                2023 yılında kurulan Trinova Studios, Minecraft tutkunları için benzersiz bir oyun deneyimi sunmayı hedefleyen bir topluluk projesi olarak doğdu. Bugün, binlerce aktif oyuncusuyla Türkiye'nin en büyük Minecraft sunucularından biri haline geldi.
              </p>
              <p className="text-purple-200/80 leading-relaxed mt-4">
                Başlangıçta küçük bir ekip olarak yola çıktık, ancak oyunculara en iyi deneyimi sunma tutkumuz ve topluluk desteğiyle hızla büyüdük. Her geçen gün yeni özellikler, oyun modları ve etkinliklerle sunucumuzu geliştirmeye devam ediyoruz.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Sunucu Özellikleri</h3>
              <ul className="space-y-3 text-purple-200/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Yüksek performanslı sunucu altyapısı (24/7 aktif)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Özel geliştirilmiş plugin ve modlar
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Anti-hile sistemi ve güvenli oyun ortamı
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Benzersiz ekonomi sistemi ve mini oyunlar
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Neden Biz?</h3>
              <div className="space-y-4 text-purple-200/80">
                <p>
                  Trinova Studios olarak amacımız, oyunculara unutulmaz bir Minecraft deneyimi yaşatmak. Düzenli güncellenen içeriklerimiz, özel etkinliklerimiz ve profesyonel yönetim ekibimizle her zaman en iyisini sunuyoruz.
                </p>
                <p>
                  Topluluğumuz, yeni başlayanlardan deneyimli oyunculara kadar herkes için bir şeyler sunar. Haftalık turnuvalar, özel etkinlikler ve sezon sonu ödülleri ile oyuncularımızı sürekli aktif tutuyoruz.
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-300">Sunucu Performansı</span>
                    <span className="text-purple-300">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-300">Kullanıcı Memnuniyeti</span>
                    <span className="text-purple-300">96%</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-300">İçerik Kalitesi</span>
                    <span className="text-purple-300">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Topluluk Değerlerimiz</h3>
              <ul className="space-y-3 text-purple-200/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Saygılı ve dostça oyun ortamı
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Aktif moderasyon ve hızlı destek
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Oyuncu görüşlerine değer veren yönetim
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Sürekli gelişen ve yenilenen içerik
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="trinova-gradient text-lg px-8 py-6">
            Hemen Katıl
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
