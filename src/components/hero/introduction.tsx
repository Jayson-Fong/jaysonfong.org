import Link from "next/link";

export function Introduction() {
    return (
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Jayson <span
                        className="text-blue-500 ">Fong</span></h1>

                    <p className="mt-3 text-gray-600 dark:text-gray-400">Software Engineer and Information Security
                        Enthusiast</p>

                    <Link href={"/blog"}>
                        <button
                            className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Visit
                            Blog
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl"
                     src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"/>
            </div>
        </div>
    )
}