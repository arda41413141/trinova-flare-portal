
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, CreditCard, Gift } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const { toast } = useToast();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const removeFromCart = (id: number) => {
    const newItems = cartItems.filter(item => item.id !== id);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
    toast({
      title: "Ürün sepetten kaldırıldı",
      description: "Ürün başarıyla sepetten kaldırıldı.",
    });
  };

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  const handleCheckout = () => {
    toast({
      title: "Sipariş alındı",
      description: "Siparişiniz başarıyla oluşturuldu. Teşekkür ederiz!",
    });
    setCartItems([]);
    localStorage.setItem("cart", "[]");
  };

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
            {cartItems.length === 0 ? (
              <Card className="glass-panel p-8 text-center">
                <p className="text-purple-300">Sepetiniz boş</p>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card key={item.id} className="glass-panel">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-purple-300">{item.name}</h3>
                      <p className="text-sm text-white/70">
                        {item.type === "vip" ? "VIP Paketi" : item.category}
                      </p>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      <p className="text-lg font-medium text-purple-300">{item.price} TL</p>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <Card className="glass-panel h-fit">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">Ödeme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Kredi/Banka Kartı
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gift-card" id="gift-card" />
                    <Label htmlFor="gift-card" className="flex items-center gap-2">
                      <Gift className="h-4 w-4" />
                      Hediye Kartı
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-2">
                    <Input placeholder="Kart Numarası" />
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </div>
                    <Input placeholder="Kart Sahibinin Adı" />
                  </div>
                )}

                {paymentMethod === "gift-card" && (
                  <Input placeholder="Hediye Kartı Kodu" />
                )}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-white/70">
                  <span>Ara Toplam</span>
                  <span>{total.toFixed(2)} TL</span>
                </div>
                <hr className="border-purple-500/20" />
                <div className="flex justify-between text-lg font-medium text-purple-300">
                  <span>Toplam</span>
                  <span>{total.toFixed(2)} TL</span>
                </div>
                <Button 
                  className="w-full trinova-gradient"
                  disabled={cartItems.length === 0}
                  onClick={handleCheckout}
                >
                  Ödemeyi Tamamla
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Cart;
