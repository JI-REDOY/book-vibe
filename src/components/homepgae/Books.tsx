import React from "react";
import Link from "next/link";
import Image from "next/image";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/book.types";

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await res.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="bg-white px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C98B3C]">
                        Trending Books : {booksData.length}
                    </p>

                    <h1 className="text-3xl font-bold leading-tight text-[#172033] sm:text-4xl lg:text-5xl">
                        Check out some of our
                        <span className="block text-[#C98B3C]">
                            most popular books
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-[#172033]/70 lg:mt-5 lg:text-lg">
                        Find inspiring stories, useful knowledge, and books that
                        make every reading moment special.
                    </p>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {booksData.slice(0, 6).map((book: IBook) => {
                        return <BookCard key={book.bookId} book={book} />
                    })}

                </div>

            </div>
            <div className="flex justify-center mt-10">
                <Link
                    href="/books"
                    className="inline-flex items-center rounded-lg bg-[#172033] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#C98B3C]"
                >
                    View All Books
                    <span className="ml-2 text-lg">→</span>
                </Link>
            </div>
        </section>
    );
};

export default Books;