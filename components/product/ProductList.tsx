import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://www.uberprints.com/content/products/flat/800x800/haf170_1_wht.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://ih1.redbubble.net/image.864706929.8157/ssrco,pullover_hoodie,mens_01,fafafa:ca443f4786,front,square_close_portrait,x1000.u3.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$29.99</span>
        </div>
        <div className="text-sm text-gray-500">Product Description</div>
        <button className="rounded-2xl ring-1 w-max ring-black text text-black py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://www.uberprints.com/content/products/flat/800x800/haf170_1_wht.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://ih1.redbubble.net/image.864706929.8157/ssrco,pullover_hoodie,mens_01,fafafa:ca443f4786,front,square_close_portrait,x1000.u3.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$29.99</span>
        </div>
        <div className="text-sm text-gray-500">Product Description</div>
        <button className="rounded-2xl ring-1 w-max ring-black text text-black py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://www.uberprints.com/content/products/flat/800x800/haf170_1_wht.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://ih1.redbubble.net/image.864706929.8157/ssrco,pullover_hoodie,mens_01,fafafa:ca443f4786,front,square_close_portrait,x1000.u3.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$29.99</span>
        </div>
        <div className="text-sm text-gray-500">Product Description</div>
        <button className="rounded-2xl ring-1 w-max ring-black text text-black py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://www.uberprints.com/content/products/flat/800x800/haf170_1_wht.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://ih1.redbubble.net/image.864706929.8157/ssrco,pullover_hoodie,mens_01,fafafa:ca443f4786,front,square_close_portrait,x1000.u3.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "

          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$29.99</span>
        </div>
        <div className="text-sm text-gray-500">Product Description</div>
        <button className="rounded-2xl ring-1 w-max ring-black text text-black py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}
