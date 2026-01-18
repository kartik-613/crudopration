const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      {users.length === 0 && (
        <p className="text-gray-500">No users found</p>
      )}

      {users.map((user) => (
        <div
          key={user._id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">
              {user.email} | Age: {user.age}
            </p>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onEdit(user)}
              className="px-3 py-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(user._id)}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
