import SideBar from "@/app/components/sidebar";

export default function Report() {
    return (
        <>

            <div className="welcome">
                <div>
                    <span className="top-label">Analytics</span>
                    <h1>Reports</h1>
                    <p className="muted">A simple overview of submission activity.</p>
                </div>
                <button className="primary-btn">Generate report</button>
            </div>
            <div className="grid-2">
                <div className="panel">
                    <div className="panel-head">
                        <h3>Submission rate</h3>
                    </div>
                    <div className="chart">
                        {[61, 73, 70, 88, 79, 91, 84].map((x, i) => (
                            <div className="bar-group" key={`charts-${x}`}>
                                <div className="bar height:${x}%">
                                </div>
                                <span className="bar-label">W{i + 1}</span>
                            </div>))}
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-head">
                        <h3>Status summary</h3>
                    </div>
                    {[
                        ["Submitted", "84%"],
                        ["Late", "9%"],
                        ["Unsubmitted", "7%"],
                    ]
                        .map(
                            (x) =>
                            (
                                <div className="assignment-row" key={`analytics${x}`}>
                                    <strong>{x[0]}</strong><b>{x[1]}</b>
                                </div>),
                        )
                    }
                </div>
            </div>

        </>
    );
}
