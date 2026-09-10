import { state } from "@/data/data";
import AssignmentRow from "./components/assignment-row";
import Badge from "./components/badge";
import Link from "next/link";
import { AlertCircle, ArrowRight, Check, Clipboard, Clock } from "lucide-react";


export default function Dashboard() {
  const hours = new Date().getHours();
  const dayCount = new Date().getDay();
  const monthCount = new Date().getMonth();
  const date = new Date().getDate();
  const year = new Date().getFullYear();

  let greetings = "";
  let day = "";
  let month = "";

  if (hours < 12) {
    greetings = "Good morning";
  } else if (hours < 18) {
    greetings = "Good afternoon";
  } else {
    greetings = "Good evening";
  }

  switch (dayCount) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "D-day"

  }

  switch (monthCount) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default:
      month = "U - Month";
  }



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
