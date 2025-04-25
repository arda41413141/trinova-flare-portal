
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { HelpCircle, MessageSquare, MessageCircle } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "Sunucuya nasıl bağlanabilirim?",
      answer: "play.trinovastudios.com IP adresi ile sunucumuza bağlanabilirsiniz."
    },
    {
      question: "VIP paketleri nasıl aktif edebilirim?",
      answer: "Satın aldığınız VIP paketi otomatik olarak hesabınıza tanımlanacaktır."
    },
    {
      question: "Oyun içi ödemeleri nasıl yapabilirim?",
      answer: "Kredi kartı, banka kartı veya diğer ödeme yöntemleriyle güvenle ödeme yapabilirsiniz."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Destek Merkezi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="h-8 w-8" />
              <h2 className="text-2xl font-semibold">Canlı Destek</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Destek ekibimiz size yardımcı olmak için hazır. Hemen bağlanın!
            </p>
            <Button className="w-full">
              <MessageCircle className="mr-2 h-5 w-5" />
              Canlı Desteğe Bağlan
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="h-8 w-8" />
              <h2 className="text-2xl font-semibold">Ticket Oluştur</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Sorununuzu detaylı bir şekilde anlatın, en kısa sürede dönüş yapalım.
            </p>
            <Button className="w-full">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ticket Oluştur
            </Button>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Sık Sorulan Sorular</h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="glass-panel py-8">
        <div className="container text-center text-white/60">
          <p>© 2025 Trinova Studios. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Support;
