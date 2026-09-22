import React from "react";
import BookCard from "@/components/shared/BookCard";

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await res.json();

    return data;
};

const BooksPage = async () => {
    const books = await getBooks();

    return (
        <main className="min-h-screen bg-[#F8F5EF] px-6 py-12 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C98B3C]">
                        Explore Our Collection
                    </p>

                    <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">
                        All Books
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-[#172033]/65">
                        Explore our collection of books and find your next
                        favorite read.
                    </p>
                </div>

                {/* All Books */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book: any) => (
                        <BookCard
                            key={book.bookId}
                            book={book}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default BooksPage;