import React from "react";

export default function AdminBoard() {
    return (
        <div className="admin">
            <h1>Hello Admin</h1>
            <ul className="btn-group">
                <li className="btn btn-primary">Areas table</li>
                <li className="btn btn-primary">Categories table</li>
                <li className="btn btn-primary">Job Providers table</li>
                <li className="btn btn-primary">Job listing table</li>
            </ul>
        </div>
    );
}