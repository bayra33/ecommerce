"use client";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link"; // Import Link from next/link

export const Goods = () => {
  const categories: string[] = ["Малгай", "сны сав", "T-shirt", "Hoodie", "Tee", "Цүнх"];
  const sizes: string[] = ["XS", "S", "M", "L", "XL"]; // Add appropriate sizes
  
  interface Product {
    name: string;
    price: string;
    image: string;
    link: string; // Add link property to the Product interface
  }

  const products: Product[] = [
    { name: "Малгай", price: "120'000₮", image: "promt.png", link: "/product1" },
    { name: "сны сав", price: "120'000₮", image: "promt.png", link: "/product2" },
    { name: "T-shirt", price: "120'000₮", image: "promt.png", link: "/product3" },
    { name: "Hoodie", price: "120'000₮", image: "promt.png", link: "/product4" },
    { name: "Tee", price: "120'000₮", image: "promt.png", link: "/product5" },
    { name: "Цүнх", price: "120'000₮", image: "promt.png", link: "/product6" },
  ];

  // Component to display product cards
  const ProductCard = ({ name, price, image, link }: Product) => (
    <div className="flex flex-col">
      <Link href={link}>
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105"
          src={image}
          alt={name}
        />
      </Link>
      <p>{name}</p>
      <p className="font-semibold">{price}</p>
    </div>
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1039px] flex justify-between">
        {/* Left Sidebar */}
        <div>
          {/* Categories */}
          <div>
            <p className="font-semibold mt-12">Ангилал</p>
            <div className="flex flex-col gap-2 mt-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`category-${index}`} />
                  <label
                    htmlFor={`category-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="font-semibold mt-12">Хэмжээ</p>
            <div className="flex flex-col gap-2 mt-4">
              {sizes.map((size, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`size-${index}`} />
                  <label
                    htmlFor={`size-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col mb-12">
          {Array.from({ length: Math.ceil(products.length / 2) }).map((_, rowIndex) => (
            <div className="flex mt-12 gap-2" key={rowIndex}>
              {products.slice(rowIndex * 3, (rowIndex + 1) * 3).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
