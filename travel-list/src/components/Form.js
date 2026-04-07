import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); // controlled element in react, the value of the input field is controlled by the state variable "description", and any changes to the input field will update the state variable through the onChange event handler

  const [quantity, setQuantity] = useState(1); // controlled element in react, the value of the select field is controlled by the state variable "quantity", and any changes to the select field will update the state variable through the onChange event handler

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; // if a description is not inputed (""), return nothing. i.e don't submit the form and do nothing even if the user clicks the "Add" button without inputing a description, the form will not submit and nothing will happen

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem); // this line (function call)

    setDescription(""); // sets the description back to an empty string, so the input field is cleared after submitting
    setQuantity(1); // sets the quantity back to 1, so the select field is reset to its default value after submitting
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for your 🤩 trip </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={
          (e) =>
            setDescription(
              e.target.value
            ) /*the setDescription here is updating the description variable from the useState, meaning it can take an input from the user and is controlled by react and not the DOM*/
        }
      />
      <button>Add</button>
    </form>
  );
}
