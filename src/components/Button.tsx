
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
    id?: string;
    title: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    containerClass: string;
}

export default function Button({ id, title, leftIcon, rightIcon, containerClass }: ButtonProps): React.JSX.Element{
    return(
        <div id={id} className={clsx("group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-dark-500", containerClass)}>
            {leftIcon}
            <span className="relative incline-flex overflow-hidden font-general text-xs">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                    {title}
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    {title}
                </div>
            </span>
            {rightIcon}
        </div>
    )
}