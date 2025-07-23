import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import instashopLogo from "@/assets/instashop-logo.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      name: "Instashop",
      description: "منصة التسوق الإلكتروني الرائدة في المنطقة",
      logo: instashopLogo,
      category: "E-commerce",
      services: ["تصميمات سوشيال ميديا", "كتابة محتوي", "اعلانات", "ماركتينج كامبين"],
      website: "https://instashop.com",
      color: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-scale">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground animate-slide-up">معرض</span>{" "}
            <span className="text-primary animate-glow animate-pulse-glow">أعمالنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            نفتخر بالمشاريع التي نفذناها لعملائنا والنتائج المتميزة التي حققناها معاً
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id}
              className={`group overflow-hidden border-none bg-gradient-to-br ${item.color} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-scale hover-scale hover-glow`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 animate-float">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-2xl p-6 shadow-lg flex items-center justify-center hover-scale transition-all duration-300">
                      <img 
                        src={item.logo} 
                        alt={`${item.name} Logo`}
                        className="w-full h-full object-contain animate-fade-in-scale"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-right">
                    <div className="mb-4">
                      <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full animate-bounce-in">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground animate-slide-up">
                      {item.name}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl animate-slide-up" style={{animationDelay: '0.1s'}}>
                      {item.description}
                    </p>

                    {/* Services */}
                    <div className="mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">الخدمات المقدمة:</h4>
                      <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                        {item.services.map((service, serviceIndex) => (
                          <span 
                            key={serviceIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover-scale cursor-pointer transition-all duration-300 animate-bounce-in"
                            style={{animationDelay: `${serviceIndex * 0.1}s`}}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="animate-bounce-in" style={{animationDelay: '0.3s'}}>
                      <Button 
                        asChild
                        className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 text-lg px-8 py-3 animate-gradient hover-glow hover-scale"
                      >
                        <a 
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          زيارة الموقع
                          <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform group-hover-slide" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-scale" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-12 border border-primary/20 animate-gradient hover-glow">
            <h3 className="text-3xl font-bold mb-4 text-primary animate-bounce-in">
              هل تريد أن يكون مشروعك التالي؟
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
              انضم إلى قائمة عملائنا المتميزين واحصل على نتائج استثنائية لعلامتك التجارية
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 text-lg px-8 py-4 animate-gradient hover-glow hover-scale animate-bounce-in"
              style={{animationDelay: '0.2s'}}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ابدأ مشروعك معنا
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;