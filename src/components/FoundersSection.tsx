
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const founders = [
  {
    name: "4esermedia",
    role: "Kurucu",
    avatar: "/lovable-uploads/e21f366f-22fc-4811-850a-e2671175bca8.png"
  },
  {
    name: "Hazerux",
    role: "Kurucu",
    avatar: "/lovable-uploads/e21f366f-22fc-4811-850a-e2671175bca8.png"
  },
  {
    name: "ZeldW",
    role: "Kurucu",
    avatar: "/lovable-uploads/e21f366f-22fc-4811-850a-e2671175bca8.png"
  },
  {
    name: "deadLySin41",
    role: "Kurucu",
    avatar: "/lovable-uploads/e21f366f-22fc-4811-850a-e2671175bca8.png"
  }
];

const FoundersSection = () => {
  return (
    <section className="py-20 bg-black/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Kurucu Üyeler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {founders.map((founder) => (
            <div key={founder.name} className="glass-panel p-6 rounded-lg text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={founder.avatar} alt={founder.name} />
                <AvatarFallback>{founder.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2 text-purple-200">{founder.name}</h3>
              <p className="text-purple-400/70">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
