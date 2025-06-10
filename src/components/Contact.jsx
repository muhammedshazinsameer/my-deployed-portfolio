import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "portfolio@example.com",
      link: "mailto:portfolio@example.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "San Francisco, CA",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/example"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/example"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com/example"
    }
  ]

  return (
    <section className="section">
      <h2>Get In Touch</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
        I'm always open to discussing new opportunities and interesting projects.
      </p>
      
      <div className="contact-info">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-card">
            <h3>
              {info.icon}
              {info.title}
            </h3>
            {info.link ? (
              <a 
                href={info.link} 
                style={{ color: '#667eea', textDecoration: 'none' }}
              >
                {info.content}
              </a>
            ) : (
              <p>{info.content}</p>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Follow Me</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#667eea',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#764ba2'}
              onMouseOut={(e) => e.target.style.color = '#667eea'}
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact