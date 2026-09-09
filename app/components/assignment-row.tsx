import Badge from "./badge";

type assignmentProps = {
  assignment: any;
  action: boolean;
};

export default function AssignmentRow({ assignment, action = false }: assignmentProps) {
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
