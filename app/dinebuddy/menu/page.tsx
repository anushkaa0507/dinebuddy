"use client";

import Header from "@/app/components/Header";
import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="bg-background-light text-slate-900 font-display">
    <Header />

      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
          alt="Restaurant"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 flex flex-col justify-end p-10">
          <span className="text-primary font-bold uppercase text-xs">
            Est. 1994
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            A Symphony of Flavors
          </h2>

          <p className="text-slate-300 mt-4 max-w-lg">
            Indulge in a curated selection of artisanal dishes.
          </p>
        </div>
      </section>

      <nav className="flex gap-4 px-6 lg:px-20 py-10 overflow-x-auto">
        {["Signature Dishes", "Wine Selection", "Main Course", "Desserts"].map(
          (cat) => (
            <button
              key={cat}
              className="whitespace-nowrap px-8 py-3 rounded-full bg-slate-200 hover:bg-primary hover:text-white transition text-sm font-bold"
            >
              {cat}
            </button>
          )
        )}
      </nav>
      <section className="px-6 lg:px-20 pb-20">
        <h3 className="text-3xl font-bold mb-10">Signature Dishes</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition"
            >
              <div className="h-60 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <span className="text-primary font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
type MenuItem = {
  name: string;
  price: string;
  desc: string;
  image: string;
};
const menuItems: MenuItem[] = [
  {
    name: "Truffle Forest Risotto",
    price: "$32",
    desc: "Wild mushrooms, parmesan, and black truffle oil.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    name: "Herb-Crusted Lamb",
    price: "$45",
    desc: "Garden herb crust with rosemary jus.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    name: "Pan-Seared Scallops",
    price: "$38",
    desc: "Served over pea purée with pancetta.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae",
  },
];