
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Trinova Studios Hakkında</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Sunucumuzun Hikayesi</h3>
              <p className="text-white/80 leading-relaxed">
                2023 yılında kurulan Trinova Studios, Minecraft tutkunları için benzersiz bir oyun deneyimi sunmayı hedefleyen bir topluluk projesi olarak doğdu. Bugün, binlerce aktif oyuncusuyla Türkiye'nin en büyük Minecraft sunucularından biri haline geldi.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Sunucu Özellikleri</h3>
              <ul className="space-y-3 text-white/80">
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
              <div className="space-y-4 text-white/80">
                <p>
                  Trinova Studios olarak amacımız, oyunculara unutulmaz bir Minecraft deneyimi yaşatmak. Düzenli güncellenen içeriklerimiz, özel etkinliklerimiz ve profesyonel yönetim ekibimizle her zaman en iyisini sunuyoruz.
                </p>
                <p>
                  Topluluğumuz, yeni başlayanlardan deneyimli oyunculara kadar herkes için bir şeyler sunar. Haftalık turnuvalar, özel etkinlikler ve sezon sonu ödülleri ile oyuncularımızı sürekli aktif tutuyoruz.
                </p>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Topluluk Değerlerimiz</h3>
              <ul className="space-y-3 text-white/80">
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
