const BooksPageLoading = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F8F5EF] px-6">
            <div className="flex flex-col items-center text-center">

                {/* Spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#172033]/10 border-t-[#C98B3C]" />

                {/* Text */}
                <h2 className="mt-6 text-2xl font-bold text-[#172033]">
                    Loading Books...
                </h2>

                <p className="mt-2 text-sm text-[#172033]/60">
                    Please wait while we prepare your books.
                </p>

            </div>
        </main>
    );
};

export default BooksPageLoading;