import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import ImageGuard from "@/components/shop/ImageGuard";
import { Analytics } from "@vercel/analytics/next";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ImageGuard />
      <Navbar />
      {children}
      <Analytics />
      <Footer />
    </>
  );
}
