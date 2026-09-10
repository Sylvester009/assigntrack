import SideBar from "@/app/components/sidebar";


export default function Courses() {
    return (
        <>

            <div className="welcome">
                <div>
                    <span className="top-label">Administration</span>
                    <h1>Courses</h1>
                    <p className="muted">Maintain course records used by assignments.</p>
                </div>
                <button className="primary-btn">+ Add new</button>
            </div>
            <div className="panel">
                <div className="empty">
                    <h3>32 active courses</h3>
                    <p>Management table and CRUD operations would connect to the database in the full implementation.</p>
                </div>
            </div>

        </>
    );
}
