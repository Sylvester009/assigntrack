import { state } from "@/data/data";
import SideBar from "./components/sidebar";


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

export default function Dashboard() {
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
              <h2 id="pageTitle">Dashboard</h2>
            </div>
            <div className="top-actions">
              <button className="icon-btn" id="notificationBtn">♢</button>
              <div className="avatar avatar-top" id="topAvatar">SO</div>
            </div>
          </header>
          <section id="content" className="content">
            <div className="welcome"><div><span className="top-label">Thursday, September 3, 2026</span><h1>Good evening, Samuel.</h1><p className="muted">Here is what is happening with your assignments.</p></div><button className="primary-btn">View assignments →</button></div>
            <div className="stats">
              <div className="stat"><div className="stat-head">TOTAL ASSIGNMENTS <span>▤</span></div><div className="stat-num">26</div><div className="stat-change">This semester</div></div>
              <div className="stat"><div className="stat-head">SUBMITTED <span>✓</span></div><div className="stat-num">26</div><div className="stat-change">60% completion</div></div>
              <div className="stat"><div className="stat-head">PENDING <span>◷</span></div><div className="stat-num">{state.assignments.filter((a) => a.status === "Pending").length}</div><div className="stat-change">Keep them moving</div></div>
              <div className="stat"><div className="stat-head">LATE <span>!</span></div><div className="stat-num">{state.assignments.filter((a) => a.status === "Late").length}</div><div className="stat-change text-red-400">Needs attention</div></div>
            </div>
            <div className="grid-2">
              <div className="panel"><div className="panel-head"><h3>Upcoming assignments</h3><button className="text-btn">View all</button></div>
                {state.assignments
                  .filter(a => a.status !== "Submitted")
                  .slice(0, 4)
                  .map((a) => (
                    <AssignmentRow
                      key={a.id}
                      assignment={a}
                      action={true}
                    />
                  ))}
              </div>
              <div className="panel">
                <div className="panel-head">
                  <h3>Submission progress</h3>
                </div>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span>Overall completion</span><b>${Math.round((26 / 9) * 100)}%</b>
                  </div>
                  <div className="progress"><i className="width:${(submitted / total) * 100}%"></i>
                  </div>
                </div>
                <div className="mt-7">{["Submitted", "Pending", "Late"].map((s) => (<div key={s} className="assignment-row">
                  <div className="assignment-info">
                    <strong>{s}</strong>
                  </div>
                  <div><Badge status={s} /> <span className="muted">{state["assignments"].filter((a) => a.status === s).length}</span>
                  </div>
                </div>))}
                </div>
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
