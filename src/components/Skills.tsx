
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    { skill: "C", level: 85 },
    { skill: "C++", level: 80 },
    { skill: "JavaScript", level: 75 },
    { skill: "HTML/CSS", level: 90 },
    { skill: "DSA", level: 70 },
    { skill: "Problem Solving", level: 75 },
  ];

  const softSkills = [
    { name: "Leadership", level: 85 },
    { name: "Team Management", level: 80 },
    { name: "Communication", level: 90 },
    { name: "Fast Learning", level: 95 },
  ];

  const chartConfig = {
    level: {
      label: "Proficiency",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Radar Chart - Technical Skills */}
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-poppins font-semibold text-primary">
                Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
                <RadarChart data={technicalSkills}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Radar
                    name="Proficiency"
                    dataKey="level"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Progress Bars - Soft Skills */}
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
