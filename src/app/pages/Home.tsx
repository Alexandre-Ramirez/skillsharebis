import { useAuth } from '../context/AuthContext';

interface Service {
  id: string;
  seller: string;
  description: string;
  price: number;
}

const mockServices: Service[] = [
  {
    id: '1',
    seller: 'Marie Dubois',
    description: 'Création de sites web professionnels avec React et Tailwind',
    price: 50,
  },
  {
    id: '2',
    seller: 'Jean Martin',
    description: 'Cours de guitare pour débutants et intermédiaires',
    price: 15,
  },
  {
    id: '3',
    seller: 'Sophie Laurent',
    description: 'Design graphique et création de logos',
    price: 30,
  },
  {
    id: '4',
    seller: 'Pierre Moreau',
    description: 'Consulting en marketing digital et SEO',
    price: 40,
  },
  {
    id: '5',
    seller: 'Emma Bernard',
    description: 'Traduction français-anglais pour documents professionnels',
    price: 25,
  },
  {
    id: '6',
    seller: 'Lucas Petit',
    description: 'Développement d\'applications mobiles iOS et Android',
    price: 60,
  },
];

export function Home() {
  const { user } = useAuth();

  const handleBuy = (service: Service) => {
    if (!user) {
      alert('Veuillez vous connecter pour acheter un service');
      return;
    }
    if (user.balance < service.price) {
      alert('Solde insuffisant');
      return;
    }
    alert(`Service "${service.description}" acheté pour ${service.price} jetons`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6">Services disponibles</h1>

      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left">Vendeur</th>
                <th className="px-6 py-3 text-left">Description du service</th>
                <th className="px-6 py-3 text-left">Prix (jetons)</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockServices.map((service) => (
                <tr key={service.id} className="hover:bg-accent/50 transition-colors">
                  <td className="px-6 py-4">{service.seller}</td>
                  <td className="px-6 py-4">{service.description}</td>
                  <td className="px-6 py-4">{service.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleBuy(service)}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                    >
                      Acheter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
