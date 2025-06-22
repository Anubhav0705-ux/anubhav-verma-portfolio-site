
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <CardTitle className="text-2xl font-poppins font-semibold text-primary">Front-End Developer Intern</CardTitle>
                  <p className="text-xl text-foreground mt-1">CodeAlpha</p>
                </div>
                <Badge variant="secondary" className="self-start">
                  June 1 – July 1
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Contributed to front-end project development using HTML, CSS, and JavaScript. Gained practical exposure 
                to structured project work and improved UI design abilities in a simulated industry environment. This 
                experience enhanced my understanding of collaborative development workflows and professional coding standards.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'UI Design', 'Team Collaboration'].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
