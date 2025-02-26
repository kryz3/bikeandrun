import CountdownTimer from "./components/countdown";

const description =
  "Le Bike & Run de L'Institut Mines Télécom Evry (IMT) et l'Institut Polytechnique de Paris (IP Paris) est une course en binôme à pieds et à vélo, organisé sur deux parcours: un parcours \"Découverte\" d'environ 7km et un parcours \"Avancé\" d'environ 15km, à travers les villes d'Evry-Courcouronnes et de Soisy-sur-Seine, et il traversera aussi la forêt de Sénart. La participation est ouverte aux étudiants de l'IMT Evry (Télécom SudParis et Institut Mines Télécom Business School), de l'Université d'Evry, et des écoles de l'IP Paris (Campus de Palaiseau, l'Ecole des Ponts, etc.).";

export const metadata = {
  title: "Accueil - Bike&Run",
};

export default function Home() {
  return (
    <div className="">
      <section className="h-[80vh] flex place-items-center">
        <div className="m-10 w-full">
          <CountdownTimer targetDate="2025-04-10T14:29:59" />
        </div>
      </section>
    </div>
  );
}
