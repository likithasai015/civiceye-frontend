function TrackComplaint() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">

      <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Track Complaint
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Enter Complaint ID (e.g., CE-2026-001)"
            className="w-full border p-4 rounded-lg"
          />

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
          >
            Track Status
          </button>

          <div className="bg-slate-100 p-8 rounded-2xl">

            <h2 className="text-2xl font-bold text-center mb-6">
              Complaint Status
            </h2>

            <div className="space-y-4 text-center">

              <p className="text-green-600 font-semibold">
                ✓ Submitted
              </p>

              <p className="text-green-600 font-semibold">
                ✓ Verified
              </p>

              <p className="text-yellow-600 font-semibold">
                ⏳ In Progress
              </p>

              <p className="text-gray-400 font-semibold">
                ⬜ Resolved
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TrackComplaint;