import React, { useState } from "react";
import "../Components/Notes.css";

export default function Notes() {
  const localNotes = localStorage.getItem("notes");
  const [notes, setNotes] = useState(localNotes);

  const handleChangeNotes = (e) => {
    localStorage.setItem("notes", e.target.value);
    setNotes(e.target.value);
  };

  return (
    <div>
      <div className="notesDivH1">
        <h1>All Notes</h1>
      </div>
      <div className="notesDivP1">
        <textarea
          cols="30"
          rows="11"
          placeholder="This is how I am going to learn
          MERN Stack in next 3 months."
          onChange={handleChangeNotes}
          value={notes}
        ></textarea>
      </div>
    </div>
  );
}
