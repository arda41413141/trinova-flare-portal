
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log("Register attempt:", { email, password, username });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <img 
              src="/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png" 
              alt="Trinova Studios" 
              className="h-16 w-16 mx-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-purple-300">
            Hesap Oluştur
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Zaten hesabın var mı?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300">
              Giriş yap
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <Button type="submit" className="w-full trinova-gradient">
            <UserPlus className="mr-2 h-5 w-5" />
            Kayıt Ol
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
