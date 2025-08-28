import  { useState, useRef, useEffect } from "react";
import "./EditableText.css";
import { API } from "../utils";
import axios from 'axios'
export default function EditableText({ text: initialText, className, onUpdate ,compont="",field=""}) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setIsEditing(false);
        setInputValue(text);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [text]);

  const handleSubmit = async () => {
    try {
      await axios.post(`${API}/update-section`,{
        value:inputValue,
        component:compont,
        field:field
      });
      setText(inputValue);
      onUpdate?.(inputValue);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update text");
    }
  };

  return (
    <div className="editable-text-container">
      <p className={className} dangerouslySetInnerHTML={{
        __html:text
      }}></p>
      <button className="edit-btn" onClick={() => setIsEditing(true)}>
        ✏️
      </button>

      {isEditing && (
        <div ref={overlayRef} className="overlay-panel">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows={3}
            className="overlay-textarea"
          />
          <div className="overlay-actions">
            <button onClick={() => setIsEditing(false)} className="cancel-btn">
              Cancel
            </button>
            <button onClick={handleSubmit} className="save-btn">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

