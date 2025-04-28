
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const VIP = () => {
  const { toast } = useToast();

  const vipPackages = [
    {
      name: "VIP",
      price: "49.99",
      features: [
        "Özel VIP Chatı",
        "Renkli Mesaj Yazma",
        "VIP Eşyaları",
        "Haftalık Ödüller",
      ]
    },
    {
      name: "VIP+",
      price: "99.99",
      features: [
        "VIP Özellikleri",
        "Özel Efektler",
        "Kostüm Değiştirme",
        "Günlük Ödüller",
        "2x Tecrübe Puanı"
      ]
    },
    {
      name: "MVP",
      price: "199.99",
      features: [
        "VIP+ Özellikleri",
        "Özel Uçuş Efektleri",
        "MVP Tagı",
        "Sınırsız Kostüm",
        "3x Tecrübe Puanı"
      ]
    },
    {
      name: "MVP+",
      price: "299.99",
      features: [
        "MVP Özellikleri",
        "Özel Katil Efektleri",
        "Özel Lobi Efektleri",
        "4x Tecrübe Puanı",
        "VIP Sunucu Erişimi"
      ]
    },
    {
      name: "MVP++",
      price: "499.99",
      features: [
        "MVP+ Özellikleri",
        "Özel Rank",
        "Tüm Kozmetikler",
        "5x Tecrübe Puanı",
        "Priority Destek"
      ]
    }
  ];

  const addToCart = (pkg: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      ...pkg,
      id: Date.now(),
      type: "vip"
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    toast({
      title: "VIP paketi sepete eklendi",
      description: `${pkg.name} paketi başarıyla sepete eklendi.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">VIP Paketleri</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vipPackages.map((pkg, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-3xl font-semibold mb-4">{pkg.price}₺</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" onClick={() => addToCart(pkg)}>Sepete Ekle</Button>
            </Card>
          ))}
        </div>
      </main>

      <footer className="glass-panel py-8">
        <div className="container text-center text-white/60">
          <p>© 2025 Trinova Studios. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default VIP;
