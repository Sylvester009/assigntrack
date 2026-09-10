import SideBar from "@/app/components/sidebar";

export default function Dashboard() {
    return (
        <>

            <div className="welcome">
                <div>
                    <span className="top-label">Administration</span>
                    <h1>System overview</h1>
                    <p className="muted">Manage users, courses and assignment records.</p>
                </div>
            </div>
            <div className="stats">
                <div className="stat">
                    <div className="stat-head">STUDENTS</div>
                    <div className="stat-num">124</div>
                    <div className="stat-change">+8 this semester</div>
                </div>
                <div className="stat">
                    <div className="stat-head">LECTURERS</div>
                    <div className="stat-num">18</div>
                    <div className="stat-change">Active accounts</div>
                </div>
                <div className="stat">
                    <div className="stat-head">COURSES</div>
                    <div className="stat-num">32</div>
                    <div className="stat-change">Across departments</div>
                </div>
                <div className="stat">
                    <div className="stat-head">ASSIGNMENTS</div>
                    <div className="stat-num">247</div>
                    <div className="stat-change">Records in system</div>
                </div>
            </div>
            <div className="grid-2">
                <div className="panel">
                    <div className="panel-head">
                        <h3>System activity</h3>
                    </div>
                    {["New student account registered", "Assignment created for CSC 204", "Submission received from Daniel Ade", "Feedback posted for CSC 208"].map((x, i) => (
                        <div className="assignment-row" key={`activity ${x}`}>
                            <div className="assignment-info">
                                <strong>{x}</strong>
                                <span>{i + 1} hour{i ? "s" : ""} ago</span>
                            </div>
                            <span className="badge neutral">Activity</span>
                        </div>))}
                </div>
                <div className="panel">
                    <div className="panel-head">
                        <h3>Submission health</h3>
                    </div>
                    <div className="progress-wrap">
                        <div className="progress-label">
                            <span>On-time submissions</span>
                            <b>84%</b>
                        </div>
                        <div className="progress"><i className="width:84%"></i></div>
                    </div>
                    <div className="progress-wrap">
                        <div className="progress-label">
                            <span>Late submissions</span><b>9%</b>
                        </div>
                        <div className="progress">
                            <i className="width:9%"></i>
                        </div>
                    </div>
                    <div className="progress-wrap">
                        <div className="progress-label">
                            <span>Unsubmitted</span><b>7%</b>
                        </div>
                        <div className="progress">
                            <i className="width:7%"></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
