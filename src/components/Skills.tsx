
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "JavaScript"],
      color: "bg-blue-500/10 text-blue-400 border-blue-400/30"
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "bg-green-500/10 text-green-400 border-green-400/30"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "Complex Analysis", "Problem Solving"],
      color: "bg-purple-500/10 text-purple-400 border-purple-400/30"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Team Management", "Communication", "Fast Learning"],
      color: "bg-orange-500/10 text-orange-400 border-orange-400/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-semibold text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
