import Badge from "./badge";

export function assignmentCard(a: { id: any; title: any; course: any; lecturer?: string; deadline: any; status: any; submitted?: string; feedback?: string; grade?: string; }) {
    return (
        <div className="assignment-card" key={a.id}>
            <span className="course-tag">{a.course}</span>
            <h3>{a.title}</h3>
            <p>Complete the assigned academic task and upload your work before the submission deadline.</p>
            <div className="card-meta">
                <span>Due {a.deadline}</span>
                <Badge status={a.status} />
            </div>
            <div className="card-buttons">
                <button className="small-btn alt">Details</button>
                {a.status === "Pending" ? (
                    <button className="small-btn"
                    // onClick="openSubmit(${a.id})"
                    >
                        Submit work
                    </button>
                ) : ""}
            </div>
        </div>);
}