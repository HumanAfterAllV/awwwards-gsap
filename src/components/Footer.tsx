import Link from "next/link";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

type SocialLinks = {
    href: string;
    icon: React.ReactNode;
}

export default function Footer(): React.JSX.Element{

    const socialLinks: SocialLinks[] = [
        { href: "https://discord.com", icon: <FaDiscord /> },
        { href: "https://twitter.com", icon: <FaTwitter /> },
        { href: "https://youtube.com", icon: <FaYoutube /> },
        { href: "https://medium.com", icon: <FaMedium /> },
    ]
    return(
        <footer className="w-screen bg-[#] py-4 px-4 text-black">
            <div className="container mx-auto flex flex-col items-center ">
                <p>©Nova 2024. All rights reserved</p>
            </div>
            <div className="flex justify-center gap-4 md:justify-start">
                {socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </footer>
    )
}