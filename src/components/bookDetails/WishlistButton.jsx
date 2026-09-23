"use client";

import React, { useContext } from "react";
import { BooksContexts } from "@/context/BooksContext";

const WishlistButton = ({ book }) => {
    const context = useContext(BooksContexts);

    if (!context) {
        throw new Error(
            "WishlistButton must be used inside BooksContext"
        );
    }

    const { wishlistBooks, setWishlistBooks } = context;

    const handleWishlistBook = () => {
        const alreadyWishlisted = wishlistBooks.some(
            (wishlistBook) => wishlistBook.bookId === book.bookId
        );

        if (alreadyWishlisted) {
            alert("This book is already in your wishlist");
            return;
        }

        setWishlistBooks([...wishlistBooks, book]);

        alert("Book added to wishlist");
    };

    return (
        <button
            onClick={handleWishlistBook}
            className="rounded-lg border border-[#172033]/20 bg-white px-7 py-3 font-semibold text-[#172033] transition duration-300 hover:border-[#C98B3C] hover:bg-[#F8F5EF]"
        >
            Wish List
        </button>
    );
};

export default WishlistButton;