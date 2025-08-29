function Interests() {
  const interests = [
    {
      title: "Artificial Intelligence",
      description: "Exploring AI, machine learning, and how technology shapes the future.",
      icon: "🤖",
    },
    {
      title: "Open Source",
      description: "Contributing to open-source projects and learning from the community.",
      icon: "🌍",
    },
    {
      title: "Design",
      description: "Passionate about UI/UX design and creating clean, user-friendly experiences.",
      icon: "🎨",
    },
    {
      title: "Entrepreneurship",
      description: "Interested in startups, innovation, and building impactful products.",
      icon: "🚀",
    },
  ];

  return (
    <section className="interests">
      <h2>My Interests</h2>
      <p>Here are some areas I'm curious and passionate about.</p>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-card">
            <span className="icon">{interest.icon}</span>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;