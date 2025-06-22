
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20 p-2">
              <div className="w-72 h-72 rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/0NLy6LDG/a.jpg" 
                  alt="Anubhav Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a first-year B.Tech student at Walchand College of Engineering, currently pursuing a degree in Computer Science and Engineering. I have a deep interest in <span className="text-primary font-semibold">Cybersecurity</span>, <span className="text-primary font-semibold">Artificial Intelligence</span>, and <span className="text-primary font-semibold">Data Science</span>, alongside a growing passion for Web Development.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My long-term vision is to become a recognized name in the tech world, known for impactful contributions and innovative solutions. I've completed C and C++, and I am actively practicing Data Structures and Algorithms (DSA) while participating in coding contests to improve my problem-solving skills.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am committed to continuous growth through hands-on projects and collaborations, always looking for opportunities to learn and create meaningful technology.
            </p>
            
            <Card className="bg-secondary/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-4 text-primary">Educational Background</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Current</span>
                    <span className="text-muted-foreground">B.Tech CSE, WCE (1st year completed)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">12th Grade</span>
                    <span className="text-muted-foreground">Stannislaus Knowledge Campus - 87.50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">10th Grade</span>
                    <span className="text-muted-foreground">St. Francis High School - 88.80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">MHT-CET</span>
                    <span className="text-muted-foreground">99.264 percentile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">JEE</span>
                    <span className="text-muted-foreground">78.69 percentile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
