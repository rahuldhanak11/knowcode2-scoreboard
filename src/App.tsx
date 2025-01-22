import React, { useState } from 'react';

interface Team {
  id: number;
  name: string;
  criteria1: number;
  criteria2: number;
  criteria3: number;
  criteria4: number;
  criteria5: number;
}

function App() {
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: 'Creeper Squad', criteria1: 85, criteria2: 92, criteria3: 80, criteria4: 75, criteria5: 88 },
    { id: 2, name: 'Diamond Miners', criteria1: 78, criteria2: 88, criteria3: 90, criteria4: 84, criteria5: 80 },
    { id: 3, name: 'Redstone Engineers', criteria1: 95, criteria2: 90, criteria3: 85, criteria4: 92, criteria5: 88 },
    { id: 4, name: 'Nether Knights', criteria1: 82, criteria2: 85, criteria3: 80, criteria4: 78, criteria5: 85 }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calculateTotalScore = (team: Team) => {
    return team.criteria1 + team.criteria2 + team.criteria3 + team.criteria4 + team.criteria5;
  };

  return (
    <div className="min-h-screen bg-[#1D1F21] bg-opacity-70 flex items-center justify-center p-16 relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full max-w-8xl backdrop-blur-lg bg-white/10 rounded-lg shadow-2xl relative">
        {/* Title */}
        <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-center">
          <h1 className="text-6xl text-[#fff] flex items-center gap-3">
            knowcode 2.0 Scoreboard
          </h1>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center bg-[#fff] px-4 py-2 rounded-full w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
              className="bg-transparent text-black w-full text-xl outline-none placeholder-[#E1E1E1]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="pr-10 pl-10 pb-10">
          <table className="w-full text-2xl">
            <thead>
              <tr className="border-b-4 border-[#8C8C8C]">
                <th className="p-4 text-left text-[#fff] flex items-center gap-3 font-light">
                  Team Name
                </th>
                <th className="p-4 text-center text-[#fff] font-light">
                  Criteria 1
                </th>
                <th className="p-4 text-center text-[#fff] font-light">
                  Criteria 2
                </th>
                <th className="p-4 text-center text-[#fff] font-light">
                  Criteria 3
                </th>
                <th className="p-4 text-center text-[#fff] font-light">
                  Criteria 4
                </th>
                <th className="p-4 text-center text-[#fff] font-light">
                  Criteria 5
                </th>
                <th className="p-4 text-center text-[#FFB640] font-light">
                  Total Score
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTeams.map((team, index) => (
                <tr
                  key={team.id}
                  className={`border-b-2 border-[#8A8A8A] hover:bg-[#3A3A3A] transition-colors duration-900 animate-fade-slide-in delay-${index}`}
                >
                  <td className="p-6 text-[#E1E1E1] text-2xl">{team.name}</td>
                  <td className="p-6 text-center text-[#E1E1E1] text-2xl">
                    <span className="bg-[#373737] px-4 py-2 rounded">{team.criteria1}</span>
                  </td>
                  <td className="p-6 text-center text-[#E1E1E1] text-2xl">
                    <span className="bg-[#373737] px-4 py-2 rounded">{team.criteria2}</span>
                  </td>
                  <td className="p-6 text-center text-[#E1E1E1] text-2xl">
                    <span className="bg-[#373737] px-4 py-2 rounded">{team.criteria3}</span>
                  </td>
                  <td className="p-6 text-center text-[#E1E1E1] text-2xl">
                    <span className="bg-[#373737] px-4 py-2 rounded">{team.criteria4}</span>
                  </td>
                  <td className="p-6 text-center text-[#E1E1E1] text-2xl">
                    <span className="bg-[#373737] px-4 py-2 rounded">{team.criteria5}</span>
                  </td>
                  <td className="p-6 text-center text-[#E1E1E1] text-2xl">
                    <span className="bg-[#373737] px-4 py-2 rounded text-[#FFB640]">
                      {calculateTotalScore(team)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
