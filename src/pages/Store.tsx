
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Package2, Star } from "lucide-react";

const Store = () => {
  const cosmetics = [
    {
      name: "Işıklı Kılıç",
      price: "29.99",
      description: "Özel ışık efektli kılıç",
      category: "Silahlar"
    },
    {
      name: "Renkli Zırh Seti",
      price: "49.99",
      description: "RGB efektli özel zırh seti",
      category: "Zırhlar"
    },
    {
      name: "Ejderha Kanatları",
      price: "39.99",
      description: "Uçuş efektli ejderha kanatları",
      category: "Aksesuarlar"
    },
    {
      name: "Altın Pet",
      price: "24.99",
      description: "Altın renkli evcil hayvan",
      category: "Evcil Hayvanlar"
    },
    {
      name: "Elmas Partikül",
      price: "19.99",
      description: "Elmas parçacık efekti",
      category: "Efektler"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Kozmetik Mağaza</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cosmetics.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package2 className="h-8 w-8 text-green-500" />
                <div>
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </div>
              <p className="mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">{item.price}₺</p>
                <Button>
                  <Star className="mr-2 h-5 w-5" />
                  Satın Al
                </Button>
              </div>
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

export default Store;
