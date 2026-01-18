import { useEffect, useState } from "react";
import { createUser, updateUser } from "../api/userApi";

const UserForm = ({ selectedUser, refresh, clear }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {
    if (selectedUser) {
      setForm(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedUser) {
      await updateUser(selectedUser._id, form);
      clear();
    } else {
      await createUser(form);
    }

    setForm({ name: "", email: "", age: "" });
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {selectedUser ? "Update User" : "Add User"}
      </h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
        disabled={!!selectedUser}
      />

      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {selectedUser ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
