
import { Link } from "react-router-dom";
import { MessageCircle, Users, FileText, ShieldAlert } from "lucide-react";

interface GameModeItemProps {
  title: string;
  description: string;
  link: string;
}

const GameModeItem = ({ title, description, link }: GameModeItemProps) => (
  <Link to={link} className="block p-2 hover:bg-purple-500/10 rounded-md">
    <div className="font-medium text-purple-300">{title}</div>
    <div className="text-sm text-purple-300/70">{description}</div>
  </Link>
);

const gameModes = [
  {
    title: "SMP",
    description: "Survival Multiplayer deneyimi",
    link: "/"
  },
  {
    title: "LifeSteal",
    description: "Her öldürme bir kalp kazandırır",
    link: "/"
  },
  {
    title: "Crystal PvP",
    description: "End Crystal savaşları",
    link: "/"
  },
  {
    title: "Skyblock",
    description: "Gökyüzünde hayatta kalma",
    link: "/"
  },
  {
    title: "Fantezi Survival",
    description: "Büyülü yeteneklerle hayatta kal",
    link: "/"
  }
];

export const GameModesContent = () => (
  <ul className="grid gap-3">
    {gameModes.map((mode) => (
      <li key={mode.title}>
        <GameModeItem {...mode} />
      </li>
    ))}
  </ul>
);

interface CommunityLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

const CommunityLink = ({ icon, title, description, href, external = false }: CommunityLinkProps) => {
  if (external) {
    return (
      <a href={href} target="_blank" className="block p-2 hover:bg-purple-500/10 rounded-md">
        <div className="font-medium text-purple-300 flex items-center">
          {icon}
          {title}
        </div>
        <div className="text-sm text-purple-300/70">{description}</div>
      </a>
    );
  }
  
  return (
    <Link to={href} className="block p-2 hover:bg-purple-500/10 rounded-md">
      <div className="font-medium text-purple-300 flex items-center">
        {icon}
        {title}
      </div>
      <div className="text-sm text-purple-300/70">{description}</div>
    </Link>
  );
};

export const CommunityContent = () => (
  <ul className="grid gap-3">
    <li>
      <CommunityLink
        icon={<MessageCircle className="h-4 w-4 mr-2" />}
        title="Discord"
        description="Topluluğumuza katıl"
        href="https://discord.com"
        external
      />
    </li>
    <li>
      <CommunityLink
        icon={<FileText className="h-4 w-4 mr-2" />}
        title="Destek"
        description="Yardım ve destek"
        href="/support"
      />
    </li>
    <li>
      <CommunityLink
        icon={<Users className="h-4 w-4 mr-2" />}
        title="Forum"
        description="Topluluk forumu"
        href="/forum"
      />
    </li>
    <li>
      <CommunityLink
        icon={<ShieldAlert className="h-4 w-4 mr-2" />}
        title="Kurallar"
        description="Sunucu kuralları"
        href="/rules"
      />
    </li>
  </ul>
);
