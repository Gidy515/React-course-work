/*import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profileCards = [
  {
    name: "Gideon Okorie",
    photo: "public/catnft.jpg",
    title: "Software Engineer",
    description:
      "Full-stack Blockchain engineer and security researcher. Skilled in building scalable and secure applications in both web2 and web3 as well as conducting security audits and vulnerability assessments.",
    Skills: ["Rust", "Typescript", "Solidity", "React", "Node.js"],
    emojis: ["💻", "🔒", "🚀"],
  },
];

function App() {
  return (
    <div>
      <Main />
      <ProfileSkills />
    </div>
  );
}

function Main() {
  return (
    <main>
      <ProfileCard
        photo="photos/catnft.jpg"
        name="Gideon Okorie"
        description="Full-stack Blockchain engineer and security researcher. Skilled in
          building scalable and secure applications in both web2 and web3 as
          well as conducting security audits and vulnerability assessments."
      />
    </main>
  );
}

function ProfileCard(props) {
  return (
    <div className="card">
      <div className="photo">
        <img src={props.photo} alt="cat nft" />
      </div>
      <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function ProfileSkills() {
  return (
    <div className="skill">
      <div className="skill-list">
        <h4>Rust</h4>
        <h3>🦀</h3>
      </div>
      <div className="skill-list">
        <h4>Typescript</h4>
        <h3>🚀</h3>
      </div>
      <div className="skill-list">
        <h4>Solidity</h4>
        <h3>⛓️</h3>
      </div>
      <div className="skill-list">
        <h4>React</h4>
        <h3>⚛️</h3>
      </div>
      <div className="skill-list">
        <h4>NodeJs</h4>
        <h3>📘</h3>
      </div>
      <div className="skill-list">
        <h4>Solana Native</h4>
        <h3>☀️</h3>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Rust",
    level: "advanced",
    color: "#2662EA",
    emoji: " ",
  },
  {
    skill: "Typescript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Solidity",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Solana",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <main>
      <ProfileCard />
    </main>
  );
}

function ProfileCard() {
  return (
    <div className="card">
      {/* Image */}
      <Image />

      {/* Data Section */}
      <div className="data">
        <DataSection />
        {/* Skills */}
        <Skilltotal />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div>
      <img className="avatar" src="photos/catnft.jpg" alt="cat nft" />
    </div>
  );
}

function DataSection() {
  return (
    <div>
      <h1>Gideon Okorie</h1>

      <p>
        Full-stack Blockchain engineer and security researcher. Skilled in
        building scalable and secure applications in both web2 and web3 as well
        as conducting security audits and vulnerability assessments.
      </p>
    </div>
  );
}

function Skilltotal() {
  const skill = skills;

  return (
    <div className="skill-list">
      {skill.map((skill) => (
        <Skillset skillObj={skill} key={skill.skill} />
      ))}
      {/*<li className="skill-1"></li>
      <li className="skill-2"></li>
      <li className="skill-3"></li>
      <li className="skill-4"></li>
      <li className="skill-5"></li>*/}
    </div>
  );
}

function Skillset({ skillObj }) {
  return (
    <ul className="skill-list">
      <li className="skill-1" style={{ backgroundColor: skillObj.color }}>
        <span>
          {skillObj.skill}{" "}
          {skillObj.level === "advanced"
            ? "💪"
            : skillObj.level === "intermediate"
            ? "👍"
            : skillObj.level === "beginner"
            ? "👶"
            : "❓"}
        </span>
      </li>
    </ul>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
