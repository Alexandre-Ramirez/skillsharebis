import { Link } from 'react-router';
import { User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-primary text-primary-foreground border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-foreground text-primary rounded-lg flex items-center justify-center">
            <span className="font-bold">SS</span>
          </div>
          <span className="text-xl font-bold">SkillShare</span>
        </Link>

        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <User className="w-6 h-6" />
          {user && <span>{user.username}</span>}
        </Link>
      </div>
    </header>
  );
}
