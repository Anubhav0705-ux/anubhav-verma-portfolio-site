
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    { name: "C", level: 85 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "DSA", level: 70 },
    { name: "Problem Solving", level: 75 },
  ];

  const softSkills = [
    { name: "Leadership", level: 85 },
    { name: "Team Management", level: 80 },
    { name: "Communication", level: 90 },
    { name: "Fast Learning", level: 95 },
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-poppins font-semibold text-primary">
                Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={animated ? skill.level : 0} className="h-2.5 bg-secondary" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-poppins font-semibold text-primary">
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={animated ? skill.level : 0} className="h-2.5 bg-secondary" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
