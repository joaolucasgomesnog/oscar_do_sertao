import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
                    <div className="col-span-6">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
                        >
                            Te aguardamos 23 de maio
                        </p>
                        <h1
                            className="py-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            Conheça os idealizadores
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
                        >
                            Um casal visionário que transformou sonhos em realidade, criando um espaço onde a inovação e a criatividade se encontram para moldar o futuro.
                        </p>
                        <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
                            <Link
                                href="/"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
                            >
                                <span className="!flex !items-center gap-14">
                                    Saiba mais
                                </span>
                            </Link>
                            <Link
                                href="/"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                className="btn_outline btn-2 hover-outline-slide-down group"
                            >
                                <span className="!flex !items-center gap-14">
                                    <FaWhatsapp className="w-6 h-6 inline-block group-hover:text-white transition-all duration-0.4s"/>
                                    Entre em contato
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="col-span-6  lg:flex  items-center gap-3"
                    >
                        <Image
                            src="/images/hero/idealizadores.png"
                            alt="hero"
                            width={0}
                            height={0}
                            quality={100}
                            layout="responsive"
                            sizes="100vh"
                            className="w-full h-full object-cover"
                        />

                        {/* <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32">
                            <Image
                                src="/images/hero/maria.png"
                                alt="hero"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="w-full h-full"
                            />
                            <div className="bg-Aquamarine rounded-22 shadow-hero-box py-4 px-5 absolute top-24 -right-20 xl:inline-block hidden">
                                <p className="text-lg font-bold text-green-800">Márcia Almeida</p>
                                <p className="text-base font-medium text-green-800 text-center">
                                    Coordenadora
                                    
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
