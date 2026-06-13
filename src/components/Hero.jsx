function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-emerald-600 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Building Smarter Cities Together
        </h1>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
          Report civic issues and help improve your community. these are only good in hero
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            🚨 Report an Issue
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
            📍 Explore Community Map
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;