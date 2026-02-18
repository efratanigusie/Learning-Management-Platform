export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Users</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">John Doe</td>
              <td>john@mail.com</td>
              <td>Admin</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
