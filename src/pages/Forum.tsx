
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Forum = () => {
  const forumCategories = [
    {
      title: "Duyurular",
      description: "Önemli sunucu duyuruları",
      topics: 15,
      posts: 45
    },
    {
      title: "Yardım & Destek",
      description: "Sorunlarınız için destek alın",
      topics: 28,
      posts: 124
    },
    {
      title: "Öneriler",
      description: "Sunucu için önerilerinizi paylaşın",
      topics: 32,
      posts: 167
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-gradient">Forum</h1>
          </div>
          <Button className="trinova-gradient">
            Yeni Konu Oluştur
          </Button>
        </div>

        <div className="grid gap-4">
          {forumCategories.map((category) => (
            <Card key={category.title} className="glass-panel">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{category.description}</p>
                <div className="flex gap-4 text-sm text-purple-300/60">
                  <span>{category.topics} Konu</span>
                  <span>{category.posts} Mesaj</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Forum;
