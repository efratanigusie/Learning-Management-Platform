import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Users"
          value="165"
          bg="bg-blue-600"
        />
        <StatCard
          title="Total Classes"
          value="25"
          bg="bg-orange-500"
        />
        <StatCard
          title="Subjects"
          value="15"
          bg="bg-teal-500"
        />
        <StatCard
          title="Attendance"
          value="97%"
          bg="bg-yellow-500"
        />
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3">Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Activity</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-3">Amber</td>
                <td>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    ADMIN
                  </span>
                </td>
                <td>On</td>
                <td>Reset a user's password</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Eden</td>
                <td>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    TUTOR
                  </span>
                </td>
                <td>On</td>
                <td>Registered a new student</td>
              </tr>

              <tr>
                <td className="py-3">Sarah</td>
                <td>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    STUDENT
                  </span>
                </td>
                <td>Active</td>
                <td>Created Grade 10-A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 className="text-lg font-semibold">
            Attendance Monitoring
          </h3>
          <p className="text-gray-500 mt-2">
            Track class attendance
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 className="text-lg font-semibold">
            View Activity Logs
          </h3>
          <p className="text-gray-500 mt-2">
            Review system activities
          </p>
        </div>
      </div>
    </div>
  );
}
