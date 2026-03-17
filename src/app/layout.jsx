import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "../context/CartProvider";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yatun Khaijan",
    template: "%s | Yatun Khaijan",
  },
  description: "Best Fast food in Noakhali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="px-5 py-2 flex justify-between items-center gap-5 bg-stone-800 shadow-xl fixed top-0 left-0 right-0 z-50">
          <Link href="/">
            {/* <img src="/logo.png" alt="" className="w-[90px]" /> */}
            <Image
              src={"/logo.png"}
              alt="logo"
              width={120}
              height={30}
              className="w-30"
            />
          </Link>
          <div className="space-x-5">
            <Link
              prefetch={false}
              className="px-4 py-2 bg-black text-white rounded-md cursor-pointer hover:shadow-lg hover:shadow-white duration-200"
              href="/foods"
            >
              Foods
            </Link>
            <Link
              className="px-4 py-2 bg-black text-white rounded-md cursor-pointer hover:shadow-lg hover:shadow-white duration-200"
              href="/reviews"
            >
              Reviews
            </Link>
          </div>
        </header>
        <main className="px-5 py-8 mt-20 bg-stone-500">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
