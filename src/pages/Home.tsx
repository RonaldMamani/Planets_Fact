import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
    return (
        <main className="bg-[#070724] ">
            <div className="bg-[url('./assets/background-stars.svg')] bg-cover bg-center ">
                <section className="
                    px-5 py-6
                    ">
                    <Header />
                    <Outlet />
                </section>
            </div>
        </main>
    )
}