import React, { useState } from 'react';
import './about.css';

const teamMembers = [
  {
    image: '/images/about-image/h1-team3.jpeg',
    name: 'Mujeeb ul Hassan',
    designation: 'CMD',
    bio: (
      <div>
        <p><strong>Mujeeb ul Hassan</strong> is a visionary filmmaker and multi-talented artist with over 18 years of experience in the Indian film industry. He has been a major part of many feature films, ads, music videos, and corporate videos as a director, producer, and singer, consistently performing in the motion pictures and digital media world.</p>

        <p><strong>His filmography includes acclaimed Bollywood titles such as:</strong><br />
        Dekh Bhai Dekh (2009)<br />
        Mantostaan (2017)<br />
        Rabbi (2017)<br />
        Side A & Side B (2018)<br />
        San 84 Justice (2021)<br />
        Camp Decent (2025, upcoming)</p>

        <p>His upcoming Hindi Bollywood Feature film <strong>Nikaah 2</strong> and international projects <strong>The Tacoma Story</strong>, a cross-cultural feature film set to be shot in the USA.</p>

        <p>In addition to his accomplishments as a filmmaker, Mujeeb is also a gifted singer. His debut track, “Harjaiyaan,” released under Zee Music Company, received a heart-wrenching response on YouTube, with over 1.7 million views. He has also released other songs like “Tanhai” and “Laagi Choote Na.”</p>

        <p>Mujeeb has been a regular participant at the Cannes Film Festival, promoting his films and works worldwide. His films <strong>Mantostaan</strong> and <strong>Rabbi</strong> have won awards at international film festivals, including the Chicago Film Festival, Singapore Film Festival, Philippines Film Festival, and Jaipur International Film Festival.</p>

        <p><strong>His versatility, creativity, and passion for storytelling continue to shape VMAA’s artistic vision and growth.</strong></p>
      </div>
    )
  },
  {
    image: '/images/about-image/h1-team4.jpeg',
    name: 'Abhinav Baghel',
    designation: 'Managing Director (MD)',
    bio: (
      <div>
        <p><strong>Abhinav Baghel</strong> is an Indian entrepreneur and director with a background in information technology and software development. He is associated with several companies in the IT and other sectors.</p>

        <p>Abhinav Baghel is a highly driven IT professional and creative strategist, bringing a youthful energy and forward-thinking mindset to VMAA Entertainment. With a strong background in information technology and digital media, Abhinav is responsible for overseeing operations, project execution, and technological integration within the company.</p>

        <p><strong>His expertise in digital transformation and strategic planning</strong> has been instrumental in streamlining workflows and positioning VMAA as a tech-savvy and future-ready entertainment brand.</p>

        <p>His upcoming Hindi Bollywood Feature film <strong>Nikaah 2</strong> and international projects <strong>The Tacoma Story</strong>, a cross-cultural feature film set to be shot in the USA and songs like “Tanhai” and “Laagi Choote Na.” as a Producer.</p>
      </div>
    )
  },
  {
    image: '/images/about-image/h1-team1.jpeg',
    name: 'Dr. Vinay Bhardwaj',
    designation: 'Managing Director (MD)',
    bio: (
      <div>
        <p><strong>Dr. Vinay Bhardwaj</strong> is a seasoned academician and a respected Associate Professor of History at Sri Aurobindo College (Morning), University of Delhi. With a robust academic background, including an M.A. from Agra University and an M.Phil. from Meerut University, he is currently pursuing a Ph.D.</p>

        <p>Dr. Bhardwaj has also attained certifications in Journalism, Health & Nutrition, and Artificial Intelligence & Machine Learning. His areas of interest encompass Later Medieval and Modern Indian History.</p>

        <p>At VMAA Entertainment, Dr. Bhardwaj brings his extensive experience in education and administration to oversee all administrative and operational decisions with professionalism and integrity.</p>

        <p><strong>His leadership ensures that all our projects are grounded in strong ethical practices, well-structured processes, and compliance with industry standards.</strong></p>
      </div>
    )
  },
  {
    image: '/images/about-image/h1-team2.jpeg',
    name: 'Dr. Asif Siddiqui',
    designation: 'Director',
    bio: (
      <div>
        <p><strong>Dr. Asif Siddiqui</strong>, a practicing medical professional, is one of the foundational pillars of VMAA Entertainment.</p>

        <p>With his extensive network and strong reputation across both government and non-government sectors, he provides strategic support and valuable connections that help the company expand its outreach.</p>

        <p><strong>His insight, integrity, and guidance have been instrumental in strengthening VMAA’s credibility and growth across sectors.</strong></p>

        <p>At VMAA Entertainment LLP, our diverse and experienced team is dedicated to delivering compelling stories and exceptional production services that resonate with audiences worldwide.</p>
      </div>
    )
  },
];

const ScrollingSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div
      className="scrolling-section-wrapper"
      style={{
        backgroundImage: `url('/images/about-image/background4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0px',
      }}
    >
      <p className="intro-text">The Story About</p>

      <div className="scrolling-text-wrapper">
        <div className="scrolling-text">
          CREATIVITY • STRATEGY • BRANDING • INNOVATION • CREATIVITY • STRATEGY • BRANDING • INNOVATION •
        </div>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} onClick={() => setSelectedMember(member)}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMember.name} – {selectedMember.designation}</h2>
            {selectedMember.bio}
            <button onClick={() => setSelectedMember(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollingSection;