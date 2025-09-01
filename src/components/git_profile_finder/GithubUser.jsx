import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

export default function Git_profile() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("google");
  const [userdata, setUserData] = useState(null);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);
  const handleSubmit = () => {
    fetchGithubUserData();
  };

  return (
    <>
      <>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-start py-8 px-4">
          <div className="container max-w-4xl flex flex-col items-center justify-center gap-8 w-full">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                GitHub Profile Finder
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Discover amazing GitHub developers and their contributions
              </p>
            </div>

            {/* Search Section */}
            <div className="input-wrapper flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-2xl">
              <div className="relative w-full md:w-3/4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search-user"
                  placeholder="Enter GitHub username..."
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full pl-10 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/20"
                />
              </div>
              <button
                className="w-full md:w-auto px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={handleSubmit}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search
                </span>
              </button>
            </div>

            {/* Results Section */}
            {userdata !== null ? (
              <div className="w-full animate-fadeIn">
                <GithubUser user={userdata} />
              </div>
            ) : null}
          </div>
        </div>
      </>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
