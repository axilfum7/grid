import {HeroImg} from "../assets/images"
import { Button } from "../components"

const Hero = () => {
  return (
    <section className="bg-[#F9FFF5] py-20">
      <div className="containers flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#8BAC3E] leading-tight">
            Good Food Us <br /> Good Mood
          </h1>

          <p className="text-gray-500 mt-6 mb-8 leading-relaxed">
            I would think that conserving our natural resources should be a conservative position:
            Not to waste food, and not to throw away a lot of the food that we buy.
          </p>

          <div className="flex gap-4">
            <Button title="Daftar Sekarang" />
            <Button
              title="About Us"
              extraClass="!bg-[#F2F2F2] !text-black"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src={HeroImg}
            alt="Food"
            className="w-112.5 lg:w-137.5"
          />
          
        </div>


      </div>
    </section>
  )
}

export default Hero
