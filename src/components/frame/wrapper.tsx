import {ReactNode} from "react";

export function Wrapper({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div className="container px-6 py-16 mx-auto text-gray-800 dark:text-white">
            {children}
        </div>
    )
}
