import React from "react";
import MemberCard from "./MemberCard";

function App() {
  const teamMembers = [
    { name: "Alice", role: "Frontend Developer", avatar: "alice.jpg" },
    { name: "Bob", role: "Backend Developer", avatar: "bob.jpg" },
    { name: "Charlie", role: "UI/UX Designer", avatar: "charlie.jpg" },
  ];
  return (
    <>
      <div className=' bg-red-400 h-screen'>
        <h1 className='text-4xl text-center py-6 font-bold'>CodeVerse Studio</h1>
        <div className="flex gap-20 flex-warp justify-center">
          {teamMembers.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
