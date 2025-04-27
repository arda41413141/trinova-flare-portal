
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="flex items-center gap-2 mb-8">
          <User className="h-8 w-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-gradient">Profilim</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-panel h-fit">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <User className="h-12 w-12 text-purple-300" />
              </div>
              <CardTitle className="text-xl text-purple-300">Kullanıcı123</CardTitle>
              <p className="text-white/70">Üye</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Profili Düzenle
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300">İstatistikler</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                  <p className="text-2xl font-bold text-purple-300">156</p>
                  <p className="text-sm text-white/70">Toplam Oyun</p>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                  <p className="text-2xl font-bold text-purple-300">3,420</p>
                  <p className="text-sm text-white/70">Puan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300">Envanter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70">Henüz hiç eşya yok</p>
                <Button className="trinova-gradient">
                  Mağazayı Ziyaret Et
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
