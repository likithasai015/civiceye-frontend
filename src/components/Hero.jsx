import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-emerald-500 text-white py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Building Smarter Cities Together
        </h1>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
          Report civic issues and help improve your community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/report">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              📢 Report an Issue
            </button>
          </Link>

          <Link to="/community-map">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              📍 Explore Community Map
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;