import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IBook } from '@/types/book.types';

const BookCard = ({ book }: { book: IBook }) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-[#172033]/10 bg-[#faf7f1] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

            {/* Image */}
            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#172033]/5 p-6">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={240}
                    height={300}
                    className="h-full w-auto object-contain drop-shadow-xl transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-[#172033] px-3 py-1.5 text-xs font-semibold text-white">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-sm">
                    <span className="text-[#C98B3C]">★</span>
                    <span className="text-sm font-bold text-[#172033]">
                        {book.rating}
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className="p-6">

                {/* Book Name */}
                <h2 className="line-clamp-1 text-xl font-bold text-[#172033] transition-colors duration-300 group-hover:text-[#C98B3C]">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-[#172033]/60">
                    by {book.author}
                </p>

                {/* Book Info */}
                <div className="mt-5 flex items-center justify-between border-t border-[#172033]/10 pt-4">

                    <div>
                        <p className="text-xs uppercase tracking-wide text-[#172033]/50">
                            Pages
                        </p>
                        <p className="mt-1 font-semibold text-[#172033]">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wide text-[#172033]/50">
                            Published
                        </p>
                        <p className="mt-1 font-semibold text-[#172033]">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wide text-[#172033]/50">
                            Publisher
                        </p>
                        <p className="mt-1 max-w-[100px] truncate font-semibold text-[#172033]">
                            {book.publisher}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link
                    href={`/books/${book.bookId}`}
                    className="mt-6 flex w-full items-center justify-center rounded-lg bg-[#172033] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#C98B3C]"
                >
                    View Details
                    <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;