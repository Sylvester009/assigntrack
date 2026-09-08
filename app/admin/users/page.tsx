import SideBar from "@/app/components/sidebar";


type BadgeProps = {
    status: string;
};

type assignmentProps = {
    assignment: any;
    action: boolean;
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

function AssignmentRow({ assignment, action = false }: assignmentProps) {
    return (
        <div className="assignment-row">
            <div className="assignment-info">
                <strong>{assignment.title}</strong>

                <span>
                    {assignment.course} • {assignment.lecturer}
                </span>
            </div>

            <div className="row-right">
                <span className="deadline">
                    Due {assignment.deadline}
                </span>

                <Badge status={assignment.status} />

                {action && assignment.status === "Pending" && (
                    <button
                        className="text-btn"
                    // onClick={() => onsubmit(assignment.id)}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}


export default function Users() {
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
                            <h2 id="pageTitle">Users</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">Administration</span>
                                <h1>Users</h1>
                                <p className="muted">Manage registered students, lecturers and administrators.</p>
                            </div>
                            <button className="primary-btn">+ Add new</button>
                        </div>
                        <div className="panel">
                            <div className="empty">
                                <h3>124 students • 18 lecturers • 2 administrators</h3>
                                <p>Management table and CRUD operations would connect to the database in the full implementation.</p>
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
