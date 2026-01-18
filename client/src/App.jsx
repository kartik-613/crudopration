import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "./api/userApi";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          MERN CRUD App
        </h1>

        <UserForm
          selectedUser={selectedUser}
          refresh={fetchUsers}
          clear={() => setSelectedUser(null)}
        />

        <UserList
          users={users}
          onDelete={handleDelete}
          onEdit={(user) => setSelectedUser(user)}
        />
      </div>
    </div>
  );
};

export default App;
