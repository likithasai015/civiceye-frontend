import { FaCamera, FaMapMarkerAlt, FaChartLine, FaBuilding } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaCamera size={40} />,
      title: "AI Issue Detection",
      description: "Automatically identifies civic issues from uploaded photos."
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "GPS-Based Reporting",
      description: "Capture the exact location of the issue."
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Real-Time Tracking",
      description: "Track complaint status from submission to resolution."
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Authority Dashboard",
      description: "Municipal authorities can efficiently manage issues."
    }
  ];

  return (
    <section className="py-20 px-10 bg-slate-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Civic Eye?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition"
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;