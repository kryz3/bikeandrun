
export const metadata = {
  title: "Inscription - Bike&Run",
};

export default function Inscription() {

  return (

    <>
      <iframe
        id="haWidget"
        allowtransparency="true"
        src="https://www.helloasso.com/associations/forum-des-telecommunications-imt-bs-et-tsp/evenements/bike-and-run/widget"
        className="h-[750px] w-full background: transparent"
        style={{ backgroundColor: "transparent" }}
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
    </>
  );
}
