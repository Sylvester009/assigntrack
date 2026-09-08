import SideBar from "@/app/components/sidebar";
import { state } from "@/data/data";

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


export default function Assignments() {
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
                            <h2 id="pageTitle">Assignments</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">System records</span>
                                <h1>Assignments</h1>
                                <p className="muted">All assignments across the platform.</p>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="table-wrap">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Assignment</th>
                                            <th>Course</th>
                                            <th>Lecturer</th>
                                            <th>Deadline</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state.assignments.map((a) => (
                                            <tr key={a.id}>
                                                <td>
                                                    <b>{a.title}</b>
                                                </td>
                                                <td>{a.course}</td>
                                                <td>{a.lecturer}</td>
                                                <td>{a.deadline}</td>
                                                <td>{<Badge status={a.status} />}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
