function Stats() {
  const stats = [
    { number: "5,000+", label: "Issues Reported" },
    { number: "4,200+", label: "Issues Resolved" },
    { number: "1,500+", label: "Active Citizens" },
    { number: "95%", label: "Resolution Rate" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center bg-slate-50 rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {stat.number}
            </h2>

            <p className="mt-3 text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;