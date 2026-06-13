function AdminDashboard() {
  const complaints = [
    {
      id: "CE-2026-001",
      issue: "Pothole",
      location: "MG Road",
      status: "Submitted",
    },
    {
      id: "CE-2026-002",
      issue: "Garbage Overflow",
      location: "Indiranagar",
      status: "In Progress",
    },
    {
      id: "CE-2026-003",
      issue: "Broken Streetlight",
      location: "Whitefield",
      status: "Resolved",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">Total Complaints</h2>
          <p className="text-3xl font-bold text-blue-600">125</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">In Progress</h2>
          <p className="text-3xl font-bold text-yellow-500">38</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">Resolved</h2>
          <p className="text-3xl font-bold text-green-600">87</p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Complaint ID</th>
              <th className="p-4 text-left">Issue</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4">{complaint.id}</td>

                <td className="p-4">{complaint.issue}</td>

                <td className="p-4">{complaint.location}</td>

                <td className="p-4">{complaint.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;