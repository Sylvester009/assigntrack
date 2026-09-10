import AssignmentRow from "@/app/components/assignment-row";
import { state } from "@/data/data";
import { getTime } from "@/utils/time";

export default function Dashboard() {
    const [greetings, _day, _month, _date, _year] = getTime();
    return (
        <>
            <div className="welcome">
                <div>
                    <span className="top-label">Lecturer workspace</span>
                    <h1>{greetings}, Dr. Adeyemi.</h1>
                    <p className="muted">Monitor your assignments and student submissions.</p>
                </div>
                <button className="primary-btn">+ Create assignment</button>
            </div>
            <div className="stats">
                <div className="stat">
                    <div className="stat-head">ACTIVE ASSIGNMENTS</div>
                    <div className="stat-num">8</div>
                    <div className="stat-change">Across 3 courses</div>
                </div>
                <div className="stat">
                    <div className="stat-head">SUBMITTED</div>
                    <div className="stat-num">42</div>
                    <div className="stat-change">82% of expected</div>
                </div>
                <div className="stat">
                    <div className="stat-head">PENDING</div>
                    <div className="stat-num">7</div>
                    <div className="stat-change">Students remaining</div>
                </div>
                <div className="stat">
                    <div className="stat-head">LATE</div>
                    <div className="stat-num">2</div>
                    <div className="stat-change text-red-800">Requires follow-up</div>
                </div>
            </div>
            <div className="grid-2">
                <div className="panel">
                    <div className="panel-head">
                        <h3>Recent assignments</h3>
                        <button className="text-btn">Manage</button>
                    </div>
                    {state.assignments
                        .slice(0, 4)
                        .map((a) => <AssignmentRow
                            key={a.id}
                            assignment={a}
                            action={true}
                        />)
                    }
                </div>
                <div className="panel">
                    <div className="panel-head">
                        <h3>Submission overview</h3>
                    </div>
                    <div className="chart">
                        {[52, 68, 45, 81, 72, 92, 62].map((x, i) =>
                        (
                            <div className="bar-group" key={`chart${x}`}>
                                <div className="bar h-5">
                                </div>
                                <span className="bar-label">
                                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
