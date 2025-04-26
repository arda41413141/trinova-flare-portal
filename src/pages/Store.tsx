
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import { Package2, Star, Shield, Sword, Crown, Heart, Users } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const Store = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const cosmetics = [
    {
      name: "Işıklı Kılıç",
      price: "29.99",
      description: "Özel ışık efektli kılıç, karanlıkta parlayan özelliği ile oyuncuları büyüler.",
      category: "Silahlar",
      rarity: "Nadir",
      icon: Sword
    },
    {
      name: "Renkli Zırh Seti",
      price: "49.99",
      description: "RGB efektli özel zırh seti, düşmanlarınıza karşı hem güçlü hem de şık.",
      category: "Zırhlar",
      rarity: "Efsanevi",
      icon: Shield
    },
    {
      name: "Ejderha Kanatları",
      price: "39.99",
      description: "Uçuş efektli ejderha kanatları, gökyüzünde süzülürken herkesin dikkatini çekecek.",
      category: "Aksesuarlar",
      rarity: "Nadir",
      icon: Crown
    },
    {
      name: "Altın Pet",
      price: "24.99",
      description: "Altın renkli evcil hayvan, size eşlik ederken çeşitli bonuslar sağlar.",
      category: "Evcil Hayvanlar",
      rarity: "Sık",
      icon: Heart
    },
    {
      name: "Elmas Partikül",
      price: "19.99",
      description: "Elmas parçacık efekti, her adımınızda elmas parıltıları bırakır.",
      category: "Efektler",
      rarity: "Yaygın",
      icon: Star
    },
    {
      name: "VIP Rozet Paketi",
      price: "15.99",
      description: "Sohbette ve skorboardda özel VIP rozetleri ile statünüzü gösterin.",
      category: "Rozetler",
      rarity: "Sık",
      icon: Users
    }
  ];

  const filteredCosmetics = filter === "all" 
    ? cosmetics 
    : cosmetics.filter(item => item.category === filter);

  const categories = ["all", ...new Set(cosmetics.map(item => item.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold text-gradient">Kozmetik Mağaza</h1>
          <p className="text-purple-300/80">Oyun deneyiminizi özelleştirmek için benzersiz kozmetik ürünlerimizi keşfedin.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-xl font-bold text-purple-300 mb-4">Filtreler</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-purple-200 mb-2">Kategoriler</h3>
                <RadioGroup 
                  value={filter} 
                  onValueChange={setFilter}
                  className="flex flex-col gap-2"
                >
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value={category} 
                        id={category}
                        className="border-purple-400 text-purple-400" 
                      />
                      <label 
                        htmlFor={category} 
                        className="text-sm font-medium capitalize cursor-pointer text-purple-200"
                      >
                        {category === "all" ? "Tüm Ürünler" : category}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <Separator className="bg-purple-500/20" />
              
              <div>
                <h3 className="font-medium text-purple-200 mb-2">Sıralama</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Toggle className="text-xs" variant="outline">Fiyat: Artan</Toggle>
                  <Toggle className="text-xs" variant="outline">Fiyat: Azalan</Toggle>
                  <Toggle className="text-xs" variant="outline">Popülerlik</Toggle>
                  <Toggle className="text-xs" variant="outline">Yeni Ürünler</Toggle>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCosmetics.map((item, index) => (
              <Card key={index} className="glass-panel border-purple-500/20 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900/80 to-purple-800/50 p-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-700/50 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-purple-300" />
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-purple-200">{item.name}</h2>
                      <span className="text-xs px-2 py-1 rounded bg-purple-700/40 text-purple-300">{item.rarity}</span>
                    </div>
                    <p className="text-xs text-purple-400/70">{item.category}</p>
                  </div>
                  
                  <p className="text-sm text-purple-300/70">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-purple-100">{item.price}₺</p>
                    <Button className="trinova-gradient">
                      <Star className="mr-2 h-4 w-4 text-white" />
                      Satın Al
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="glass-panel py-8">
        <div className="container text-center text-purple-200/60">
          <p>© 2025 Trinova Studios. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Store;
