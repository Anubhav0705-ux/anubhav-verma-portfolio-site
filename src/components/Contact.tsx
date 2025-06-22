
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "anubhavverma0705@gmail.com",
      link: "mailto:anubhavverma0705@gmail.com"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 7387286923",
      link: "tel:+917387286923"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/anubhav-verma-877847329",
      link: "https://linkedin.com/in/anubhav-verma-877847329"
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@anubhavverma4941",
      link: "https://instagram.com/anubhavverma4941"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-3">
                  <div className="text-3xl mb-2">{contact.icon}</div>
                  <CardTitle className="text-lg font-poppins font-semibold text-primary">
                    {contact.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {contact.link !== "#" ? (
                    <Button 
                      variant="link" 
                      className="text-muted-foreground hover:text-primary p-0 h-auto font-normal text-sm"
                      onClick={() => window.open(contact.link, '_blank')}
                    >
                      {contact.value}
                    </Button>
                  ) : (
                    <span className="text-muted-foreground text-sm">{contact.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Prefer to send a message directly?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
              onClick={() => window.open('mailto:anubhavverma0705@gmail.com', '_blank')}
            >
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
