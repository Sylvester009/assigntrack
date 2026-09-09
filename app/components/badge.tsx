type BadgeProps = {
  status: string;
};


export default function Badge({ status }: BadgeProps) {
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
