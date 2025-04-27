
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListTodo } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="flex items-center gap-2 mb-8">
          <ListTodo className="h-8 w-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-gradient">Sunucu Kuralları</h1>
        </div>

        <div className="grid gap-6">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">1. Genel Kurallar</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70 space-y-2">
              <p>• Diğer oyunculara saygılı davranın</p>
              <p>• Uygunsuz içerik paylaşımı yasaktır</p>
              <p>• Hile kullanımı kesinlikle yasaktır</p>
              <p>• Spam yapmak yasaktır</p>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">2. Oyun Kuralları</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70 space-y-2">
              <p>• Bug kullanımı yasaktır</p>
              <p>• AFK kalmak yasaktır</p>
              <p>• Takım arkadaşlarına zarar vermek yasaktır</p>
              <p>• Haksız avantaj sağlamak yasaktır</p>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">3. Sohbet Kuralları</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70 space-y-2">
              <p>• Küfür ve hakaret yasaktır</p>
              <p>• Reklam yapmak yasaktır</p>
              <p>• Caps lock kullanımı yasaktır</p>
              <p>• Din, dil, ırk ayrımı yapmak yasaktır</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Rules;
