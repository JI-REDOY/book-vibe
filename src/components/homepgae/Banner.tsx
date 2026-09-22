import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/assets/right-side.png";

const Banner = () => {
    return (
        <section className="bg-[#F8F5EF]">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-14 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:px-6 lg:py-24">

                {/* Left Content */}
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C98B3C]">
                        Discover your next favorite book
                    </p>

                    <h1 className="text-4xl font-bold leading-tight text-[#172033] sm:text-5xl lg:text-6xl">
                        Books to freshen up
                        <span className="block text-[#C98B3C]">
                            your bookshelf
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#172033]/70 lg:mx-0">
                        Find inspiring stories, useful knowledge, and books that make
                        every reading moment special.
                    </p>

                    {/* Desktop Button */}
                    <Link
                        href="/books"
                        className="mt-7 hidden items-center rounded-lg bg-[#172033] px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#C98B3C] lg:inline-flex"
                    >
                        View The List
                        <span className="ml-2 text-lg">→</span>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="mt-10 flex w-full flex-col items-center lg:mt-0 lg:w-1/2">

                    <Image
                        src={bannerImg}
                        alt="Book"
                        width={420}
                        height={520}
                        priority
                        className="w-[230px] drop-shadow-2xl sm:w-[280px] lg:w-[360px]"
                    />

                    {/* Mobile Button */}
                    <Link
                        href="/books"
                        className="mt-6 inline-flex items-center rounded-lg bg-[#172033] px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#C98B3C] lg:hidden"
                    >
                        View The List
                        <span className="ml-2 text-lg">→</span>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Banner;