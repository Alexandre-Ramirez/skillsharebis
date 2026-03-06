export function Home() {
  const services = [
    {
      id: 1,
      name: "Cours de guitare",
      description: "Apprentissage de la guitare acoustique pour débutants et intermédiaires",
      tokens: 50,
    },
    {
      id: 2,
      name: "Dépannage informatique",
      description: "Aide à la résolution de problèmes informatiques, installation de logiciels",
      tokens: 30,
    },
    {
      id: 3,
      name: "Cours de cuisine française",
      description: "Initiation à la cuisine française traditionnelle",
      tokens: 45,
    },
    {
      id: 4,
      name: "Cours de yoga",
      description: "Sessions de yoga pour tous niveaux, relaxation et bien-être",
      tokens: 35,
    },
    {
      id: 5,
      name: "Aide au jardinage",
      description: "Conseils et aide pratique pour l'entretien de votre jardin",
      tokens: 25,
    },
    {
      id: 6,
      name: "Cours de photographie",
      description: "Techniques de base et avancées de photographie numérique",
      tokens: 40,
    },
    {
      id: 7,
      name: "Réparation vélo",
      description: "Entretien et réparation de vélos, changement de pièces",
      tokens: 20,
    },
    {
      id: 8,
      name: "Cours de langues",
      description: "Cours d'anglais et d'espagnol, conversation et grammaire",
      tokens: 55,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6">Services disponibles</h1>
      <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-3 text-left">Nom</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Prix (jetons)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={service.id}
                className={index !== services.length - 1 ? "border-b border-border" : ""}
              >
                <td className="px-6 py-4">{service.name}</td>
                <td className="px-6 py-4 text-muted-foreground">{service.description}</td>
                <td className="px-6 py-4">{service.tokens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
