
import EmblaCarousel from "../components/carousel";

export const metadata = {
    title: "Partenaires - Bike&Run",
  };

export default function Partenaires() {
    const OPTIONS = {}
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <div className="h-[95vh] place-items-center items-center flex justify-center">
            <div  className="sd:w-full w-4/5"><EmblaCarousel slides={SLIDES} options={OPTIONS}/></div>
           
        
        </div>
    )
}