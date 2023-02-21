import React from "react";

export default function Areas() {

    let areas = [
        { id: 1, name: "Area 1" },
        { id: 2, name: "Area 2" },
        { id: 3, name: "Area 3" },
        { id: 4, name: "Area 4" },
        { id: 5, name: "Area 5" },
    ];

    

    return (
        <div className="areas-table">
            <h1>Areas table</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.map((area) => (
                        <tr key={area.id}>
                            <td>{area.id}</td>
                            <td>{area.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-area-form">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="areaName" placeholder="Enter area name" />
                    </div>
                    <button type="submit" className="btn btn-primary center">Add area</button>
                </form>
            </div>
        </div>
    );
}