'use client'
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black text-white h-screen flex flex-col gap-3 justify-center items-center">
      <h2>Not Found</h2>
      <Image
        src={
          "https://img.freepik.com/free-vector/404-error-background-with-orange-piece-flat-style_23-2147761281.jpg?w=740&t=st=1715232204~exp=1715232804~hmac=a5463ba6cfed4bd6f5980da75db15904c666d9223c5b61b310a264ff9dfcaa6c"
        }
        alt="errorImage"
        width={350}
        height={350}
        className="object-contain max-w-sm md:max-w-md  h-96"
      />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}