
import CountdownTimer from "./components/countdown";
import AnimatedText from "./components/animatedText"; // Import new component
import Image from "next/image";

const description =
  "Le Bike & Run de L'Institut Mines Télécom Evry (IMT) et l'Institut Polytechnique de Paris (IP Paris) est une course en binôme à pieds et à vélo, organisé sur deux parcours: un parcours \"Découverte\" d'environ 7km et un parcours \"Avancé\" d'environ 15km, à travers les villes d'Evry-Courcouronnes et de Soisy-sur-Seine, et il traversera aussi la forêt de Sénart. La participation est ouverte aux étudiants de l'IMT Evry (Télécom SudParis et Institut Mines Télécom Business School), de l'Université d'Evry, et des écoles de l'IP Paris (Campus de Palaiseau, l'Ecole des Ponts, etc.).";

export const metadata = {
  title: "Accueil - Bike&Run",
};

export default function Home() {
  const logos = [
    {
      src: "/logos/forum.png",
      alt: "Forum",
      description: "Forum des Télécommunications",
      href: "https://forumdestelecommunications.fr",
    },
    {
      src: "/logos/tsp.png",
      alt: "TSP",
      description: "Telecom SudParis",
      href: "https://www.telecom-sudparis.eu",
    },
    {
      src: "/logos/imt.png",
      alt: "IMT",
      description: "Institut Mines Telecom Business School",
      href: "https://www.imt-bs.eu",
    },
    {
      src: "/logos/xtreme.png",
      alt: "Xtrem",
      description: "Xtreme",
      href: "https://bde-imtbs-tsp.fr/fr/xtreme/",
    },
  ];

  return (
    <div>
      <section className="h-[90vh] flex place-items-center">
        <div className="m-10 w-full">
          <CountdownTimer targetDate="2025-04-10T14:29:59" />
        </div>
      </section>
      <section className="h-[100vh] flex items-center justify-center bg-bnr-bleu text-[#171717] px-4">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="bg-[#f8f8f8] p-6 md:p-10 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
            <AnimatedText
              text={description}
              className="text-base md:text-lg leading-relaxed font-semibold text-gray-800"
            />
          </div>
        </div>
      </section>

      <section className="h-[100vh] flex items-center justify-center bg-bnr-rose text-[#171717] px-4">
        <div className="container mx-auto text-center">
          <Image
            src="/logos/logo.png"
            alt="Main Logo"
            width={200}
            height={80}
            className="mx-auto mb-6 sm:w-[250px] sm:h-auto md:w-[300px] md:h-auto"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {logos.map((logo, index) => (
              <a href={logo.href}>
              <div
                key={index}
                className="flex flex-col items-center p-3 sm:p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={60}
                  className="mb-3 sm:w-[80px] sm:h-auto"
                />
                <p className="text-gray-700 text-xs sm:text-sm font-bold text-center">
                  {logo.description}
                </p>
              </div></a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
