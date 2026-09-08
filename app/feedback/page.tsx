import { state } from "@/data/data";
import SideBar from "../components/sidebar";


type BadgeProps = {
    status: string;
};


function Badge({ status }: BadgeProps) {
    const cls =
        status === "Submitted" || status === "Reviewed"
            ? "success"
            : status === "Late"
                ? "danger"
                : status === "Pending" || status === "Awaiting review"
                    ? "warning"
                    : "neutral";

    return <span className={`badge ${cls}`}>{status}</span>;
}


export default function Feedback() {
    return (
        <>
            <div id="toast" className="toast"></div>

            <div id="app" className="app">
                <SideBar />

                <main className="main">
                    <header className="topbar">
                        <button id="mobileMenu" className="icon-btn">☰</button>
                        <div>
                            <span className="top-label">Academic workspace</span>
                            <h2 id="pageTitle">Feedback</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">Lecturer comments</span>
                                <h1>Feedback</h1>
                                <p className="muted">Review feedback attached to your submissions.</p>
                            </div>
                        </div>{state.assignments
                            .filter((a) => a.feedback)
                            .map(
                                (a) => (
                                    <div className="panel mb-3" key={a.id}>
                                        <div className="panel-head">
                                            <div>
                                                <h3>{a.title}</h3>
                                                <span className="muted">{a.course} • Grade {a.grade}</span>
                                            </div><Badge status="Reviewed" /></div>
                                        <div className="feedback-box"><b>Lecturer feedback</b>
                                            <p>{a.feedback}</p>
                                        </div>
                                    </div>
                                ))
                        }
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
    );
}
