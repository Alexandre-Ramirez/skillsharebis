import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { LogOut, Coins, User as UserIcon } from 'lucide-react';

export function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">Mon compte</h1>

        <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-6">
          <div className="flex items-center gap-4 pb-6 border-b border-border">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl">Bienvenue, {user.username}</h2>
              <p className="text-muted-foreground">Membre de SkillShare</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-muted-foreground">Pseudo</label>
              <div className="mt-1 px-4 py-3 bg-muted rounded-md">
                {user.username}
              </div>
            </div>

            <div>
              <label className="text-muted-foreground flex items-center gap-2">
                <Coins className="w-4 h-4" />
                Balance de jetons
              </label>
              <div className="mt-1 px-4 py-3 bg-muted rounded-md flex items-center justify-between">
                <span className="text-2xl font-bold">{user.balance}</span>
                <span className="text-muted-foreground">jetons</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <button
              onClick={handleLogout}
              className="w-full bg-destructive text-destructive-foreground px-4 py-3 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
