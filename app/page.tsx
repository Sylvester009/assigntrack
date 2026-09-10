import { state } from "@/data/data";
import AssignmentRow from "./components/assignment-row";
import Badge from "./components/badge";
import Link from "next/link";
import { AlertCircle, ArrowRight, Check, Clipboard, Clock } from "lucide-react";
import { getTime } from "@/utils/time";


export default function Dashboard() {
  const [ greetings, day, month, date, year ] = getTime();


  return (
    <>
      <div className="welcome">
        <div>
          <span className="top-label">{day}, {month} {date}, {year}</span>
          <h1>{greetings}, Samuel.</h1>
          <p className="muted">Here is what is happening with your assignments.</p>
        </div>
        <Link href="./assignments" className="primary-btn flex items-center gap-3">
          View assignments
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="stat-head">TOTAL ASSIGNMENTS <span><Clipboard className="w-4 h-4" /></span></div>
          <div className="stat-num">26</div><div className="stat-change">This semester</div>
        </div>
        <div className="stat">
          <div className="stat-head">SUBMITTED <span><Check className="w-4 h-4" /></span></div>
          <div className="stat-num">26</div><div className="stat-change">60% completion</div>
        </div>
        <div className="stat">
          <div className="stat-head">PENDING <span>
            <Clock className="w-4 h-4" /></span>
          </div>
          <div className="stat-num">{state.assignments.filter((a) => a.status === "Pending").length}</div>
          <div className="stat-change">Keep them moving</div>
        </div>
        <div className="stat">
          <div className="stat-head">
            LATE
            <span>
              <AlertCircle className="w-4 h-4" />
            </span>
          </div>
          <div className="stat-num">{state.assignments.filter((a) => a.status === "Late").length}</div>
          <div className="stat-change text-red-400!">Needs attention</div>
        </div>
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
    </>
  );
}
