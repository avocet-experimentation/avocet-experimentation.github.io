import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  image: string;
  github: string;
  linkedin: string;
  website: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, image, github, linkedin, website }) => {
  return (
    <div className="bg-transparent rounded-lg p-6 text-center border border-foreground">
      <img 
        src={image} 
        alt={`${name} profile`} 
        className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-foreground mb-4">{name}</h3>
      <div className="flex justify-center space-x-4">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-foreground"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-foreground"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        {!!website.length &&
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground"
          >
            <Globe className="w-6 h-6" />
          </a>
        }
      </div>
    </div>
  );
};

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Gautam Panakkal",
      image: "/gautam.jpg",
      github: "https://github.com/gpanakkal",
      linkedin: "https://www.linkedin.com/in/gautam-panakkal/",
      website: ""
    },
    {
      name: "Adnan Shihabi",
      image: "/api/placeholder/200/200",
      github: "https://github.com/sadonyx",
      linkedin: "https://www.linkedin.com/in/adnanshihabi/",
      website: "https://ashihabi.me"
    },
    {
      name: "Sean Mentele",
      image: "/api/placeholder/200/200",
      github: "https://github.com/SeanM0124",
      linkedin: "https://www.linkedin.com/in/sean-mentele-58481417a/",
      website: ""
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;