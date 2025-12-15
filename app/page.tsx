import style from "./main.module.css";
import { IceCoffeeIcon } from "./components/atoms/icons";
export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed justify-between items-center top-0 pt-3 px-10 left-0 right-0 flex z-10 text-white">
        <h1 className="text-3xl font-semibold">Octa Coffee</h1>
        <div>
          <ul className="flex gap-x-10">
            <li>Home</li>
            <li>Menu</li>
            <li>Our</li>
            <li>Store</li>
          </ul>
        </div>
        <button className="bg-secondary px-7 rounded-sm py-1">Login</button>
      </nav>
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
        <div className="flex justify-center items-center gap-8 mt-5">
          {Array.from({ length: 4 }).map((item, index) => (
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
        <div className="flex justify-center gap-x-4">
          {Array.from({ length: 4 }).map((item) => (
            <div className="w-52 h-72 rounded-md border-2  px-2 pt-2 border-primary/40 ">
              <div className="bg-primary rounded-md w-full h-48"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
