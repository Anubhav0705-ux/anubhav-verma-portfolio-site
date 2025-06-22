
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "🎯 Number Guessing Game",
      description: "A console-based interactive game developed using C++. The program randomly generates a number within a specified range, and the user must guess it with feedback given after each attempt (too high, too low, or correct).",
      technologies: ["C++"],
      keyLearnings: "This was my first project in C++. It helped me understand how to structure logic clearly and work with user input/output. It also improved my comfort with loops and conditions.",
      keyConcepts: ["Random number generation", "Loops", "Conditional logic", "Input/output handling"]
    },
    {
      title: "🛒 Amazon Clone Website",
      description: "A static front-end clone of Amazon's homepage, closely mimicking its layout and styling. This project helped me understand how large-scale websites manage structure, spacing, navigation, and responsiveness.",
      technologies: ["HTML", "CSS"],
      keyLearnings: "Mastered CSS Flexbox and Grid for layout design, improved attention to design details, practiced structuring complex pages.",
      keyConcepts: ["Responsive Design", "CSS Flexbox", "CSS Grid", "Layout Structure"]
    },
    {
      title: "🎵 Spotify Clone",
      description: "A dynamic clone of the Spotify interface featuring a basic audio player. The project simulates a mini version of the platform where users can play/pause songs from a list.",
      technologies: ["HTML", "CSS", "JavaScript"],
      keyLearnings: "Gained hands-on experience with DOM manipulation, event listeners, and linking visual components with functional JS code. This project built a strong foundation in interactive front-end development.",
      keyConcepts: ["DOM Manipulation", "Event Listeners", "Audio APIs", "Interactive UI"]
    },
    {
      title: "🧮 Calculator Web App",
      description: "A fully functional calculator built for basic arithmetic operations (addition, subtraction, multiplication, division). The design is minimalistic and user-friendly, offering both button and keyboard input support.",
      technologies: ["HTML", "CSS", "JavaScript"],
      keyLearnings: "Enhanced logic-building ability, practiced modular code structure, and created a real-world utility tool using core front-end technologies.",
      keyConcepts: ["Arithmetic Logic", "Event Handling", "Modular Code", "User Interface Design"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-semibold text-primary">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Key Concepts:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.keyConcepts.map((concept, conceptIndex) => (
                      <Badge key={conceptIndex} variant="outline" className="text-xs border-muted">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-sm mb-2 text-primary">What I Learned:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.keyLearnings}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
