import Header from "../components/Header";

export default function Home() {
    return (
        <main className="bg-[#070724] h-screen">
            <div className="bg-[url('./assets/background-stars.svg')] bg-cover bg-center h-screen">
                <section className="
                    px-5 py-5
                    ">
                    <Header />
                </section>
            </div>
        </main>
    )
}