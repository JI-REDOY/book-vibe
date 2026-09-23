import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/book.types";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";

const getBook = async (id: string): Promise<IBook> => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const books: IBook[] = await res.json();

    const book = books.find(
        (book) => book.bookId === Number(id)
    );

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
        <main className="min-h-screen bg-[#F8F5EF] px-5 py-10 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Back Button */}
                <Link
                    href="/books"
                    className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#172033] transition duration-300 hover:text-[#C98B3C]"
                >
                    <span className="text-lg">←</span>
                    Back to All Books
                </Link>

                {/* Main Details Card */}
                <div className="overflow-hidden rounded-3xl border border-[#172033]/10 bg-white shadow-[0_15px_50px_rgba(23,32,51,0.08)]">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= IMAGE SECTION ================= */}
                        <div className="flex min-h-[520px] items-center justify-center bg-[#F8F5EF] px-6 py-12 sm:px-10 lg:min-h-[650px]">

                            <div className="relative flex h-[440px] w-full max-w-[350px] items-center justify-center rounded-3xl border border-[#C98B3C]/15 bg-white p-8 shadow-[0_20px_40px_rgba(23,32,51,0.08)]">

                                {/* Decorative Shapes */}
                                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#C98B3C]/10" />

                                <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-[#172033]/5" />

                                <div className="absolute left-6 top-6 h-2 w-12 rounded-full bg-[#C98B3C]" />

                                {/* Book Image */}
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    fill
                                    priority
                                    className="relative z-10 object-contain p-10 drop-shadow-[0_18px_18px_rgba(23,32,51,0.22)] transition duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* ================= BOOK DETAILS ================= */}
                        <div className="p-7 sm:p-10 lg:p-12">

                            {/* Category */}
                            <span className="inline-flex rounded-full bg-[#C98B3C]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#C98B3C]">
                                {book.category}
                            </span>

                            {/* Book Name */}
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

                                <div className="flex items-center gap-2 rounded-xl bg-[#F8F5EF] px-4 py-2.5">
                                    <span className="text-xl text-[#C98B3C]">
                                        ★
                                    </span>

                                    <span className="font-bold text-[#172033]">
                                        {book.rating}
                                    </span>
                                </div>

                                <span className="text-sm text-[#172033]/50">
                                    Reader Rating
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
                            <div className="mt-9 flex flex-wrap gap-3">

                                <ReadButton book={book} />

                                <WishlistButton book={book} />

                            </div>
                        </div>
                    </div>

                    {/* ================= BOOK INFORMATION ================= */}
                    <div className="border-t border-[#172033]/10 bg-[#FDFBF7] p-7 sm:p-10">

                        <div className="mb-7">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C98B3C]">
                                More Information
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-[#172033]">
                                Book Information
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            {/* Total Pages */}
                            <div className="rounded-2xl border border-[#172033]/8 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                                <p className="text-sm text-[#172033]/50">
                                    Total Pages
                                </p>

                                <p className="mt-2 text-2xl font-bold text-[#172033]">
                                    {book.totalPages}
                                </p>
                            </div>

                            {/* Publisher */}
                            <div className="rounded-2xl border border-[#172033]/8 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                                <p className="text-sm text-[#172033]/50">
                                    Publisher
                                </p>

                                <p className="mt-2 text-base font-bold leading-6 text-[#172033]">
                                    {book.publisher}
                                </p>
                            </div>

                            {/* Publishing Year */}
                            <div className="rounded-2xl border border-[#172033]/8 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                                <p className="text-sm text-[#172033]/50">
                                    Published
                                </p>

                                <p className="mt-2 text-2xl font-bold text-[#172033]">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            {/* Book ID */}
                            <div className="rounded-2xl border border-[#172033]/8 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                                <p className="text-sm text-[#172033]/50">
                                    Book ID
                                </p>

                                <p className="mt-2 text-2xl font-bold text-[#172033]">
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