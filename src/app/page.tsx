import Hero from "@components/Hero";

export default function Page(): React.JSX.Element{
    return(
        <main className="relative min-h-screen">
            <Hero />
            <section className="z-0 min-h-screen bg-blue-500"/>
        </main>
    )
}