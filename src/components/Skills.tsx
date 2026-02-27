
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    { name: "C", value: 85 },
    { name: "C++", value: 80 },
    { name: "JavaScript", value: 75 },
    { name: "HTML5/CSS3", value: 90 },
    { name: "DSA", value: 70 },
    { name: "Problem Solving", value: 75 },
  ];

  const COLORS = [
    "hsl(200, 60%, 50%)",
    "hsl(220, 60%, 55%)",
    "hsl(45, 80%, 55%)",
    "hsl(150, 50%, 45%)",
    "hsl(280, 50%, 55%)",
    "hsl(10, 65%, 55%)",
  ];

  const chartConfig = Object.fromEntries(
    technicalSkills.map((s, i) => [s.name, { label: s.name, color: COLORS[i] }])
  );

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
            <CardContent>
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={technicalSkills}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={95}
                    strokeWidth={2}
                    stroke="hsl(var(--card))"
                  >
                    {technicalSkills.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
              {/* Legend */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
                {technicalSkills.map((skill, i) => (
                  <div key={skill.name} className="flex items-center gap-2 text-sm">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: COLORS[i] }}
                    />
                    <span className="text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
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
