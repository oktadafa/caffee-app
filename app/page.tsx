import style from "./main.module.css"
import {IceCoffeeIcon, YoutubeIcon} from "./components/atoms/icons"
import {Coffe2, Coffe3} from "./assets"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className={`${style.landing} relative text-white`}>
        <div className="absolute right-10 bottom-44 flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">Welcome!</h2>
          <h1 className="text-4xl font-semibold">
            We Serve the richest coffee
          </h1>
          <h1 className="text-4xl font-semibold">In the City!</h1>
          <div>
            <button className="bg-secondary px-7 rounded-sm py-1 font-semibold">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div className="w-1/3 h-2 bg-primary" />
          <h1 className="text-3xl font-semibold text-primary">
            Best Our Products
          </h1>
          <div className="w-1/3 h-2 bg-primary" />
        </div>
        <div className="flex justify-center items-center gap-14 mt-5">
          {Array.from({length: 4}).map((item, index) => (
            <button className="flex flex-col items-center" key={index}>
              <div>
                <IceCoffeeIcon />
              </div>
              <p className="text-center text-primary font-semibold">
                Ice Coffee
              </p>
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-x-10 mt-4 mb-8">
          {Array.from({length: 5}).map((item) => (
            <div className="w-52 h-72 rounded-md border-2  px-2 pt-2 border-primary/40 ">
              <div className="bg-primary rounded-md w-full h-48"></div>
              <div className="flex flex-col  gap-y-2 mt-2">
                <div className="flex flex-col">
                  <span className="text-lg leading-5 font-semibold text-primary">
                    Americano
                  </span>
                  <span className="text-xs font-semibold text-primary">
                    Made with special coffee
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-primary">Rp 15.000</span>
                  <button className="text-xs bg-primary px-3 py-1 text-white rounded-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative bg-primary w-full flex items-center justify-center h-52">
          <Image
            src={Coffe2}
            width={330}
            height={270}
            alt="test"
            className="absolute top-0 left-0"
          />
          <div className="flex flex-col justify-center gap-y-3">
            <div className="text-3xl text-white font-semibold">
              Check out our best coffee betans
            </div>
            <div className="flex justify-center">
              <button
                className="bg-secondary text-white text-xs font-semibold px-5 py-3
            "
              >
                Explore Our Products
              </button>
            </div>
          </div>
          <Image
            src={Coffe3}
            width={210}
            height={235}
            alt="test"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>

      <div className="flex justify-center gap-x-7 items-center mt-7">
        {Array.from({length: 4}).map((item) => (
          <div className="flex flex-col gap-y-0.5 items-center">
            <YoutubeIcon />
            <p className="text-xs font-semibold text-primary">Youtube</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-5 mb-10">
        <div className="w-1/3 h-1 bg-primary" />
        <div className="w-1/3 h-1 bg-primary" />
      </div>
      <div className="flex justify-center">
        <span className="text-center text-primary font-semibold w-124">
          "Diseduh dengan penuh gairah, disajikan dengan hati. Temukan biji kopi
          terbaik dan suasana nyaman hanya di Octa Coffee."
        </span>
      </div>
      <div className="text-sm font-bold flex justify-between items-start px-10 mt-5 text-primary">
        <span>oktadafasampang@gmail.com</span>
        <span>+6289-6477-8678</span>
        <div className="flex flex-col">
          <span>Cilacap</span>
          <span className="text-xs font-medium">
            Jl Naga Hitam, Desa Sidasari, Kecamatan Sampang
          </span>
        </div>
      </div>
      <div className="text-center py-3 text-xs border-t border-t-primary mt-5 font-semibold text-primary">
        <span>© 2025 By Okta daffa ramadani | Octa Coffee</span>
      </div>
    </div>
  )
}
