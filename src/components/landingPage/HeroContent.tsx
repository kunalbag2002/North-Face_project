import { ShoppingBag } from "lucide-react";
import WrapButton from "../ui/wrap-button";

const HeroContent = () => {
  return (
    <>
    <div className="flex flex-col items-center py-16 bg-[url('/mountain-bg.jpg')] bg-black/25 bg-blend-darken bg-cover bg-center">

      <h3 className="mt-20 leading-0 text-4xl font-bold">
        Equipments crafted for
      </h3>
      <h1 className="text-white/100 mt-5 text-[5.4rem] font-bold">POWER OF NATURE </h1>
      <WrapButton href="https://www.thenorthface.com/en-gb" className="mt-25">
        <ShoppingBag />
        Shop Now
      </WrapButton>
      
      <p className=" mt-5 text-white/100 text-xl">
        Introducing our new global platform to embolden{" "}
        <span className="font-bold">the next outdoor generation</span>
      </p>
    </div>
    </>
  );
};

export default HeroContent;
