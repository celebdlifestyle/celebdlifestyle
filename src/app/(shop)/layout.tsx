import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import ImageGuard from "@/components/shop/ImageGuard";

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
      <Footer />
    </>
  );
}
