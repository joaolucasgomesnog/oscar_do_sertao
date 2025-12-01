"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Highlight = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 768, // Tablet
                settings: {
                    slidesToShow: 1,
                    centerMode: false, // Disable centerMode on smaller screens
                },
            },
            {
                breakpoint: 480, // Mobile
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center max-w-[125rem] mx-auto">
                        <div
                            className="col-span-5 py-0 px-7"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2>Sinta um pouco da energia da última edição</h2>
                            <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-404 pt-7 pb-11">
                                Reviva os melhores momentos do nosso evento anterior através deste vídeo emocionante que captura a energia, a inovação e a colaboração que definem nossa comunidade.
                            </p>
                            <div className="flex items-center flex-wrap gap-30">
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">50+</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Homenageados
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">250+</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Convidados
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">50+</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Empresas envolvidas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-7 year_slider px-7"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <iframe
                                height="400"
                                className="md:w-[50rem] w-full border border-solid border-border dark:border-dark_border rounded-22"
                                src="https://www.youtube.com/embed/7G_umqVyuMw?controls=0&modestbranding=0&rel=0&mute=0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>


                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    // Render your YouTube popup modal here
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-darkmode rounded-lg sm:m-0 m-4">
                            <div className="overlay flex items-center justify-between border-b border-solid border-border dark:border-dark_border p-5 z-50 dark:border-darkborder">
                                <h3 className="text-secondary dark:text-white">Video</h3>
                                <button
                                    onClick={closeModal}
                                    className="bg-[url('/images/highlight/closed.svg')] bg-no-repeat bg-contain w-5 h-5 inline-block dark:invert"
                                ></button>
                            </div>
                            <iframe
                                height="400"
                                className="p-4 md:w-[50rem] w-full"
                                src="https://www.youtube.com/embed/7G_umqVyuMw"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Highlight;
