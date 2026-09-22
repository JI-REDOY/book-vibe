import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/book.types";

const getBook = async (id: string): Promise<IBook> => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const books: IBook[] = await res.json();

    const book = books.find((book) => book.bookId === Number(id));

    if (!book) {
        throw new Error("Book not found");
    }

    return book;
};

const BookDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const book = await getBook(id);

    return (
        <main className="min-h-screen bg-[#F8F5EF] px-6 py-12 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Back Button */}
                <Link
                    href="/books"
                    className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#172033] transition hover:text-[#C98B3C]"
                >
                    ← Back to All Books
                </Link>

                {/* Main Card */}
                <div className="overflow-hidden rounded-3xl border border-[#172033]/10 bg-white shadow-[0_15px_50px_rgba(23,32,51,0.08)]">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Book Image Section */}
                        <div className="flex items-center justify-center bg-[#F8F5EF] px-8 py-12 sm:px-12 lg:min-h-[620px]">

                            <div className="relative flex h-[460px] w-full max-w-[360px] items-center justify-center rounded-2xl border border-[#C98B3C]/15 bg-white p-8 shadow-[0_15px_35px_rgba(23,32,51,0.08)]">

                                {/* Decorative Circle */}
                                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#C98B3C]/10" />

                                <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-[#172033]/5" />

                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    fill
                                    className="relative z-10 object-contain p-8 drop-shadow-[0_15px_15px_rgba(23,32,51,0.20)]"
                                />
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="p-7 sm:p-10 lg:p-12">

                            {/* Category */}
                            <span className="inline-block rounded-full bg-[#C98B3C]/10 px-4 py-2 text-sm font-semibold text-[#C98B3C]">
                                {book.category}
                            </span>

                            {/* Title */}
                            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#172033] sm:text-4xl">
                                {book.bookName}
                            </h1>

                            {/* Author */}
                            <p className="mt-3 text-base text-[#172033]/60">
                                Written by{" "}
                                <span className="font-semibold text-[#172033]">
                                    {book.author}
                                </span>
                            </p>

                            {/* Rating */}
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex items-center gap-2 rounded-lg bg-[#F8F5EF] px-4 py-2">
                                    <span className="text-xl text-[#C98B3C]">
                                        ★
                                    </span>

                                    <span className="font-bold text-[#172033]">
                                        {book.rating}
                                    </span>
                                </div>

                                <span className="text-sm text-[#172033]/50">
                                    Book Rating
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="my-7 h-px bg-[#172033]/10" />

                            {/* Review */}
                            <div>
                                <h2 className="text-xl font-bold text-[#172033]">
                                    About This Book
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[#172033]/65">
                                    {book.review}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-7">
                                <h2 className="mb-3 text-lg font-bold text-[#172033]">
                                    Tags
                                </h2>

                                <div className="flex flex-wrap gap-2">
                                    {book.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-[#C98B3C]/20 bg-[#F8F5EF] px-4 py-2 text-xs font-medium text-[#172033]"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-3">

                                <button className="rounded-lg bg-[#172033] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#C98B3C]">
                                    Read
                                </button>

                                <button className="rounded-lg border border-[#172033]/20 bg-white px-7 py-3 font-semibold text-[#172033] transition duration-300 hover:border-[#C98B3C] hover:bg-[#F8F5EF]">
                                    Wish List
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="border-t border-[#172033]/10 bg-[#FDFBF7] p-7 sm:p-10">

                        <div className="mb-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C98B3C]">
                                Details
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-[#172033]">
                                Book Information
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            {/* Pages */}
                            <div className="rounded-xl border border-[#172033]/8 bg-white p-5">
                                <p className="text-sm text-[#172033]/50">
                                    Total Pages
                                </p>

                                <p className="mt-2 text-xl font-bold text-[#172033]">
                                    {book.totalPages}
                                </p>
                            </div>

                            {/* Publisher */}
                            <div className="rounded-xl border border-[#172033]/8 bg-white p-5">
                                <p className="text-sm text-[#172033]/50">
                                    Publisher
                                </p>

                                <p className="mt-2 text-base font-bold text-[#172033]">
                                    {book.publisher}
                                </p>
                            </div>

                            {/* Year */}
                            <div className="rounded-xl border border-[#172033]/8 bg-white p-5">
                                <p className="text-sm text-[#172033]/50">
                                    Published
                                </p>

                                <p className="mt-2 text-xl font-bold text-[#172033]">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            {/* Book ID */}
                            <div className="rounded-xl border border-[#172033]/8 bg-white p-5">
                                <p className="text-sm text-[#172033]/50">
                                    Book ID
                                </p>

                                <p className="mt-2 text-xl font-bold text-[#172033]">
                                    #{book.bookId}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;