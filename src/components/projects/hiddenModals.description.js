import React, {useState, useEffect} from "react";

export default function HiddenModalDescription(props) {
    const [descriptions] = useState(props);

    function getList() {
        return descriptions.description.map((description, index) => <li key={index}>{description}</li>)
    }

    return (
        <div className="modal-description">
            <ul>{getList()}</ul>
        </div>
    );
}
