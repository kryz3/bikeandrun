export const metadata = {
  title: "404 - Bike&Run",
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]  text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">
        Oups ! La page que vous cherchez n'existe pas.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-bnr-rose rounded-lg text-white font-semibold hover:bg-bnr-bleu transition"
      >
        Retour à l'accueil
      </a>
    </div>
  );
}
