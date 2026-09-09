import { ReactNode } from "react";
import Header from "./components/header";
import SideBar from "./components/sidebar";

interface StudentLayoutProps {
    children: ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
    return (
        <>
            <div id="toast" className="toast"></div>
            <div id="app" className="app">
                <SideBar />
                <main className="main">
                    <Header />
                    <section id="content" className="content">
                        {children}
                    </section>
                </main>
            </div>

            <div id="modal" className="modal hidden">
                <div className="modal-backdrop"></div>
                <div className="modal-card">
                    <button className="modal-close" id="modalClose">×</button>
                    <div id="modalContent"></div>
                </div>
            </div>
        </>
    )
}