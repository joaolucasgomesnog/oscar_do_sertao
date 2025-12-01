import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Oscar do Sertão ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="Não encontramos a página que você está procurando."
        breadcrumbLinks={breadcrumbLinks}
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
