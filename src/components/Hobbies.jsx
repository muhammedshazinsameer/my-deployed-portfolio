function Hobbies() {
  const hobbies = [
    {
      title: "Reading",
      description: "Exploring fiction, non-fiction, and tech blogs to keep learning.",
      icon: "📚",
    },
    {
      title: "Gaming",
      description: "Enjoying strategy and adventure games to unwind and stay sharp.",
      icon: "🎮",
    },
    {
      title: "Traveling",
      description: "Discovering new cultures, cuisines, and beautiful places worldwide.",
      icon: "✈️",
    },
    {
      title: "Music",
      description: "Listening to and creating music for inspiration and relaxation.",
      icon: "🎵",
    },
  ];

  return (
    <section className="hobbies">
      <h2>My Hobbies</h2>
      <p>Here are some activities I enjoy outside of work and coding.</p>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <span className="icon">{hobby.icon}</span>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;