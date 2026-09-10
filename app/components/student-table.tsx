import { state } from "@/data/data";
import Badge from "./badge";

function initials(name: string) {
    return name
        .split(" ")
        .map((x) => x[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
}

export function studentTable() {
    return (
        <div className="table-wrap">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Current assignment</th>
                        <th>Status</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {state.students.map((s) => (
                        <tr key={s.name}>
                            <td>
                                <div className="student-cell">
                                    <div className="avatar">{initials(s.name)}</div>
                                    <b>{s.name}</b>
                                </div>
                            </td>
                            <td>{s.assignment}</td>
                            <td>{<Badge status={s.status} />}</td>
                            <td>{s.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}