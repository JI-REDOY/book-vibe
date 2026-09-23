"use client";

import React, { createContext, useState } from "react";
import { IBook } from "@/types/book.types";

interface BooksContextType {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlistBooks: IBook[];
    setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContexts = createContext<BooksContextType | null>(null);

const BooksContext = ({ children }: { children: React.ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlistBooks, setWishlistBooks] = useState<IBook[]>([]);

    return (
        <BooksContexts.Provider
            value={{
                readBooks,
                setReadBooks,
                wishlistBooks,
                setWishlistBooks,
            }}
        >
            {children}
        </BooksContexts.Provider>
    );
};

export default BooksContext;