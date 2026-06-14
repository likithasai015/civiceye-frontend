import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">
        Civic Eye
      </h1>

      <div className="flex items-center gap-8">
        <a href="/" className="hover:text-blue-600">Home</a>
        <Link to="/report" className="hover:text-blue-600">Report Issue</Link>
        <Link to="/track" className="hover:text-blue-600">
  Track Complaint
</Link>
        <Link to="/map" className="hover:text-blue-600">
  Community Map
</Link>
        <Link to="/admin" className="hover:text-blue-600">
  Admin
</Link>    
        <Link to="/login" className="hover:text-blue-600">Login</Link>

        <Link to="/register">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
    Get Started
  </button>
</Link>
      </div>
    </nav>
  );
}

export default Navbar;