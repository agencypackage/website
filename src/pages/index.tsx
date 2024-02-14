import Layout from "@/components/Layout";
import Hero from "@/components/hero";
import Component from "@/components/logoslider";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Component />
      <Pricing />
    </Layout>
  );
}
