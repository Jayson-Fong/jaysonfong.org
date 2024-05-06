import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <Link href="/" className="text-gray-800 dark:text-white">
                    Jayson Fong
                </Link>

                <p className="text-sm text-gray-600 dark:text-gray-300">© Jayson Fong 2024.</p>

                <div className="flex -mx-2">
                    <Link href="https://github.com/Jayson-Fong/jaysonfong.org" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                        Fork me on GitHub!
                    </Link>
                </div>
            </div>
        </footer>
    );
}