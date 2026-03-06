import { Link } from "react-router";

export function Account() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center">
      <div className="w-full max-w-md bg-card rounded-lg border border-border p-8 shadow-lg text-center">
        <h2 className="mb-4">Page Compte</h2>
        <p className="text-muted-foreground mb-6">
          Vous devez être connecté pour accéder à cette page.
        </p>
        <Link
          to="/auth"
          className="inline-block bg-primary text-primary-foreground py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
        >
          Se connecter
        </Link>
      </div>
    </div>
  );
}
