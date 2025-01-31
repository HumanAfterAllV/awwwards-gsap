import Hero from "@components/Hero";
import About from "@components/About";

export default function Page(): React.JSX.Element{
    return(
        <main className="relative min-h-screen">
            <Hero />
            <About />
        </main>
    )
}