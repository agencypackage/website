import Script from "next/script";
import Navbar from "./Navbar";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#00001a]">
      <div>
        <Script
          src="/js/script.js"
          data-domain="ungeivaerksattere.dk"
          strategy="lazyOnload"
        />
        <div style={{background: "radial-gradient(circle, rgba(0,0,26,1) 35%, rgba(1,1,66,1) 100%)"}} className={`${className}`}>
            <Navbar />
            <div className="pt-[90px]">
            {children}
            </div>

        </div>
      </div>
    </div>
  );
}