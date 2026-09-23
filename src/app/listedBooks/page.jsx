"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BooksContexts } from "@/context/BooksContext";

const ListedBooks = () => {
    const context = useContext(BooksContexts);

    const [activeTab, setActiveTab] = useState("read");
    const [sortBy, setSortBy] = useState("");

    if (!context) {
        throw new Error(
            "ListedBooks must be used inside BooksContext"
        );
    }

    const { readBooks, wishlistBooks } = context;

    // Active tab অনুযায়ী books নেওয়া
    const books =
        activeTab === "read"
            ? readBooks
            : wishlistBooks;

    // Sorting
    const sortedBooks = [...books].sort((a, b) => {
        if (sortBy === "rating-high") {
            return b.rating - a.rating;
        }

        if (sortBy === "rating-low") {
            return a.rating - b.rating;
        }

        if (sortBy === "pages-high") {
            return b.totalPages - a.totalPages;
        }

        if (sortBy === "pages-low") {
            return a.totalPages - b.totalPages;
        }

        if (sortBy === "year-new") {
            return b.yearOfPublishing - a.yearOfPublishing;
        }

        if (sortBy === "year-old") {
            return a.yearOfPublishing - b.yearOfPublishing;
        }

        return 0;
    });

    return (
        <main className="min-h-screen bg-[#F8F5EF] px-6 py-12 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C98B3C]">
                        Your Collection
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                        Listed Books
                    </h1>

                    <p className="mx-auto mt-3 max-w-xl text-[#172033]/60">
                        Keep track of the books you want to read and the
                        books you have already read.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex justify-center">
                    <div className="flex rounded-xl border border-[#172033]/10 bg-white p-1.5 shadow-sm">

                        <button
                            onClick={() => setActiveTab("read")}
                            className={`rounded-lg px-7 py-3 text-sm font-semibold transition ${
                                activeTab === "read"
                                    ? "bg-[#172033] text-white"
                                    : "text-[#172033]/60 hover:text-[#172033]"
                            }`}
                        >
                            Read Books
                            <span className="ml-2">
                                ({readBooks.length})
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab("wish")}
                            className={`rounded-lg px-7 py-3 text-sm font-semibold transition ${
                                activeTab === "wish"
                                    ? "bg-[#C98B3C] text-white"
                                    : "text-[#172033]/60 hover:text-[#172033]"
                            }`}
                        >
                            Wish List
                            <span className="ml-2">
                                ({wishlistBooks.length})
                            </span>
                        </button>

                    </div>
                </div>

                {/* Sort Section */}
                <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#172033]/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="text-sm font-semibold text-[#172033]">
                            {sortedBooks.length}{" "}
                            {sortedBooks.length === 1 ? "Book" : "Books"}
                        </p>

                        <p className="text-xs text-[#172033]/50">
                            Sort your collection
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="sort"
                            className="text-sm font-medium text-[#172033]/60"
                        >
                            Sort By
                        </label>

                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="cursor-pointer rounded-lg border border-[#172033]/15 bg-[#F8F5EF] px-4 py-2.5 text-sm font-semibold text-[#172033] outline-none transition focus:border-[#C98B3C] focus:ring-2 focus:ring-[#C98B3C]/10"
                        >
                            <option value="">
                                Default
                            </option>

                            <option value="rating-high">
                                Rating: High to Low
                            </option>

                            <option value="rating-low">
                                Rating: Low to High
                            </option>

                            <option value="pages-high">
                                Pages: High to Low
                            </option>

                            <option value="pages-low">
                                Pages: Low to High
                            </option>

                            <option value="year-new">
                                Year: Newest First
                            </option>

                            <option value="year-old">
                                Year: Oldest First
                            </option>
                        </select>
                    </div>
                </div>

                {/* Books */}
                <div className="space-y-5">

                    {sortedBooks.length > 0 ? (
                        sortedBooks.map((book) => (
                            <div
                                key={book.bookId}
                                className="group overflow-hidden rounded-2xl border border-[#172033]/10 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row">

                                    {/* Image */}
                                    <div className="flex h-56 w-full shrink-0 items-center justify-center rounded-xl bg-[#F8F5EF] p-5 sm:h-48 sm:w-36">
                                        <Image
                                            src={book.image}
                                            alt={book.bookName}
                                            width={130}
                                            height={170}
                                            className="h-full w-auto object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col justify-between">

                                        <div>

                                            {/* Category */}
                                            <span className="inline-block rounded-full bg-[#C98B3C]/10 px-3 py-1 text-xs font-semibold text-[#C98B3C]">
                                                {book.category}
                                            </span>

                                            {/* Book Name */}
                                            <h2 className="mt-3 text-xl font-bold text-[#172033] sm:text-2xl">
                                                {book.bookName}
                                            </h2>

                                            {/* Author */}
                                            <p className="mt-1 text-sm text-[#172033]/60">
                                                By{" "}
                                                <span className="font-semibold text-[#172033]">
                                                    {book.author}
                                                </span>
                                            </p>

                                            {/* Info */}
                                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#172033]/65">

                                                <span>
                                                    ⭐ {book.rating}
                                                </span>

                                                <span>
                                                    📖 {book.totalPages} pages
                                                </span>

                                                <span>
                                                    📅 {book.yearOfPublishing}
                                                </span>

                                            </div>

                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-5 flex items-center justify-between gap-3">

                                            <div className="flex flex-wrap gap-2">

                                                {book.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-[#172033]/10 px-3 py-1 text-xs text-[#172033]/60"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}

                                            </div>

                                            <Link
                                                href={`/books/${book.bookId}`}
                                                className="shrink-0 rounded-lg bg-[#172033] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#C98B3C]"
                                            >
                                                Details
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        /* Empty State */
                        <div className="rounded-2xl border border-dashed border-[#172033]/20 bg-white px-6 py-16 text-center">

                            <div className="text-4xl">
                                📚
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-[#172033]">
                                No books here yet
                            </h2>

                            <p className="mt-2 text-sm text-[#172033]/60">
                                {activeTab === "read"
                                    ? "Books you mark as Read will appear here."
                                    : "Books you add to your Wish List will appear here."}
                            </p>

                            <Link
                                href="/books"
                                className="mt-6 inline-block rounded-lg bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C98B3C]"
                            >
                                Explore Books
                            </Link>

                        </div>
                    )}

                </div>
            </div>
        </main>
    );
};

export default ListedBooks;
