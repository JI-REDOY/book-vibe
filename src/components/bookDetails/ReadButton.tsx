"use client";

import React, { useContext } from "react";
import { IBook } from "@/types/book.types";
import { BooksContexts } from "@/context/BooksContext";

const ReadButton = ({ book }: { book: IBook }) => {
    const context = useContext(BooksContexts);

    if (!context) {
        throw new Error("ReadButton must be used inside BooksContext");
    }

    const { readBooks, setReadBooks } = context;

    const handleReadBook = () => {
        const alreadyRead = readBooks.some(
            (readBook) => readBook.bookId === book.bookId
        );

        if (alreadyRead) {
            alert("This book is already in your read list");
            return;
        }

        setReadBooks([...readBooks, book]);

        alert("Book added to read list");
    };

    return (
        <button
            onClick={handleReadBook}
            className="rounded-lg bg-[#172033] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#C98B3C]"
        >
            Read
        </button>
    );
};

export default ReadButton;