import AboutData from "@/components/About/About";
import ContactData from "@/components/Contact/Contact";
import FaqData from "@/components/FAQ/Faq";
import HomePageBanner from "@/components/common/HomeBanner/HomeBanner";

export default function Home() {
  return (
    <main>
      <HomePageBanner />
      <AboutData />
      <FaqData />
      <ContactData />
    </main>
  );
}
