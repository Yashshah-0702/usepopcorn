import { useState } from "react";

export default function Practice() {
  const [num, setNum] = useState("");
  const [ans, setAns] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleSubmit() {
    if (num.trim() !== "") {
      if (editingIndex !== null) {
        const updatedItems = ans.map((item) =>
          item.id === editingIndex ? { ...item, text: num } : item
        );
        setAns(updatedItems);
        setEditingIndex(null);
      } else {
        const newArr = { id: Date.now(), text: num };
        setAns([...ans, newArr]);
      }
      setNum("");
    }
  }

  function deleteItem(id) {
    const updatedItems = ans.filter((item) => item.id !== id);
    setAns(updatedItems);
  }

  function editItem(id, text) {
    setNum(text);
    setEditingIndex(id);
  }

  return (
    <>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={() => handleSubmit()}>
        {editingIndex !== null ? "Update" : "Submit"}
      </button>
      <ul>
        {ans.map((item) => (
          <li key={item.id}>
            <h1>{item.text}</h1>
            <button onClick={() => editItem(item.id, item.text)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
