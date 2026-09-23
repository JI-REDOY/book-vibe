
"use client";

import React, { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Label,
    Tooltip,
    type BarShapeProps,
    type LabelProps,
} from "recharts";

import { BooksContexts } from "@/context/BooksContext";

const colors = [
    "#172033",
    "#C98B3C",
    "#172033",
    "#C98B3C",
    "#172033",
    "#C98B3C",
    "#172033",
];

// ==============================
// Triangle Bar Path
// ==============================
const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
) => {
    return `M${x},${y + height}
        C${x + width / 3},${y + height}
        ${x + width / 2},${y + height / 3}
        ${x + width / 2},${y}
        C${x + width / 2},${y + height / 3}
        ${x + (2 * width) / 3},${y + height}
        ${x + width},${y + height}
        Z`;
};

// ==============================
// Custom Triangle Bar
// ==============================
const TriangleBar = (props: BarShapeProps) => {
    const {
        x,
        y,
        width,
        height,
        index,
    } = props;

    const color =
        colors[(index ?? 0) % colors.length];

    return (
        <path
            d={getPath(
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            )}
            stroke={color}
            fill={color}
            strokeWidth={props.isActive ? 5 : 0}
            style={{
                transition: "stroke-width 0.3s ease-out",
            }}
        />
    );
};

// ==============================
// Custom Label
// ==============================
const CustomColorLabel = (props: LabelProps) => {
    const fill =
        colors[(props.index ?? 0) % colors.length];

    return (
        <Label
            {...props}
            fill={fill}
        />
    );
};

// ==============================
// Main Component
// ==============================
const ReadBooks = () => {
    const context = useContext(BooksContexts);

    if (!context) {
        throw new Error(
            "ReadBooks must be used inside BooksContext"
        );
    }

    const { readBooks } = context;

    // ==============================
    // Convert books data for chart
    // ==============================
    const data = readBooks.map((book) => ({
        name: book.bookName,
        pages: book.totalPages,
    }));

    // ==============================
    // Total Pages
    // ==============================
    const totalPages = readBooks.reduce(
        (total, book) => total + book.totalPages,
        0
    );

    return (
        <main className="min-h-screen bg-[#F8F5EF] px-6 py-12 sm:px-10 lg:px-12">

            <div className="mx-auto max-w-6xl">

                {/* ================= HEADER ================= */}
                <div className="mb-10 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C98B3C]">
                        Reading Statistics
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                        Read Books
                    </h1>

                    <p className="mx-auto mt-3 max-w-xl text-[#172033]/60">
                        Track the books you have read and
                        explore your reading progress.
                    </p>

                </div>

                {/* ================= STATS ================= */}
                {readBooks.length > 0 && (
                    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {/* Total Books */}
                        <div className="rounded-2xl border border-[#172033]/10 bg-white p-6 shadow-sm">

                            <p className="text-sm text-[#172033]/50">
                                Total Read Books
                            </p>

                            <p className="mt-2 text-3xl font-bold text-[#172033]">
                                {readBooks.length}
                            </p>

                        </div>

                        {/* Total Pages */}
                        <div className="rounded-2xl border border-[#172033]/10 bg-white p-6 shadow-sm">

                            <p className="text-sm text-[#172033]/50">
                                Total Pages
                            </p>

                            <p className="mt-2 text-3xl font-bold text-[#C98B3C]">
                                {totalPages}
                            </p>

                        </div>

                    </div>
                )}

                {/* ================= CHART ================= */}
                <div className="rounded-3xl border border-[#172033]/10 bg-white p-5 shadow-sm sm:p-8">

                    {readBooks.length > 0 ? (

                        <div className="w-full overflow-x-auto">

                            <BarChart
                                style={{
                                    width: "100%",
                                    maxWidth: "900px",
                                    height: "500px",
                                    margin: "0 auto",
                                }}
                                responsive
                                data={data}
                                margin={{
                                    top: 30,
                                    right: 20,
                                    left: 10,
                                    bottom: 80,
                                }}
                            >

                                {/* Grid */}
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#172033"
                                    opacity={0.1}
                                />

                                {/* Tooltip */}
                                <Tooltip
                                    cursor={{
                                        fill: "#F8F5EF",
                                    }}
                                    contentStyle={{
                                        borderRadius: "12px",
                                        border: "1px solid #17203320",
                                        backgroundColor: "#ffffff",
                                    }}
                                />

                                {/* X Axis */}
                                <XAxis
                                    dataKey="name"
                                    angle={-25}
                                    textAnchor="end"
                                    height={90}
                                    tick={{
                                        fill: "#172033",
                                        fontSize: 12,
                                    }}
                                    axisLine={{
                                        stroke: "#172033",
                                        opacity: 0.2,
                                    }}
                                />

                                {/* Y Axis */}
                                <YAxis
                                    width="auto"
                                    tick={{
                                        fill: "#172033",
                                        fontSize: 12,
                                    }}
                                    axisLine={{
                                        stroke: "#172033",
                                        opacity: 0.2,
                                    }}
                                />

                                {/* Triangle Bars */}
                                <Bar
                                    dataKey="pages"
                                    name="Pages"
                                    shape={TriangleBar}
                                    activeBar
                                >

                                    <LabelList
                                        content={CustomColorLabel}
                                        position="top"
                                    />

                                </Bar>

                            </BarChart>

                        </div>

                    ) : (

                        /* ================= EMPTY STATE ================= */
                        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                            <div className="text-5xl">
                                📚
                            </div>

                            <h2 className="mt-5 text-xl font-bold text-[#172033]">
                                No Read Books Yet
                            </h2>

                            <p className="mt-2 max-w-md text-sm leading-6 text-[#172033]/60">
                                Add some books to your Read list.
                                Your reading statistics will appear here.
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </main>
    );
};

export default ReadBooks;

