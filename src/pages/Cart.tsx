
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      name: "VIP Üyelik",
      price: 49.99,
      duration: "30 gün"
    },
    {
      name: "Özel Kıyafet Paketi",
      price: 24.99,
      type: "Kozmetik"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="flex items-center gap-2 mb-8">
          <ShoppingCart className="h-8 w-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-gradient">Sepetim</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.name} className="glass-panel">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-purple-300">{item.name}</h3>
                    <p className="text-sm text-white/70">
                      {item.duration || item.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-purple-300">{item.price} TL</p>
                    <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      Kaldır
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-panel h-fit">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">Sipariş Özeti</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-white/70">
                <span>Ara Toplam</span>
                <span>{total.toFixed(2)} TL</span>
              </div>
              <hr className="border-purple-500/20" />
              <div className="flex justify-between text-lg font-medium text-purple-300">
                <span>Toplam</span>
                <span>{total.toFixed(2)} TL</span>
              </div>
              <Button className="w-full trinova-gradient">
                Ödemeye Geç
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Cart;
