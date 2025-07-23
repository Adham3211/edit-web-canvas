import { CheckCircle, Users, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "فريق خبراء",
      description: "متخصصون في جميع مجالات التسويق الرقمي"
    },
    {
      icon: Award,
      title: "جودة مضمونة",
      description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا"
    },
    {
      icon: Lightbulb,
      title: "حلول إبداعية",
      description: "أفكار مبتكرة تميز علامتك التجارية"
    }
  ];

  const achievements = [
    "أكثر من 150 عميل راضي",
    "500+ مشروع مكتمل بنجاح",
    "5 سنوات من الخبرة المتراكمة",
    "فريق من 20+ خبير تسويق"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">من نحن؟</span>
                <br />
                <span className="text-primary">نحن وصلة نجاحك</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                وصلة هي شركة رائدة في مجال التسويق الرقمي، نساعد الشركات والعلامات التجارية 
                على الوصول إلى أهدافها من خلال استراتيجيات تسويقية مبتكرة ومدروسة.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">إنجازاتنا:</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 space-x-reverse animate-slide-in-right"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-foreground text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button 
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                تعرف على فريقنا
              </button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-none bg-card/80 backdrop-blur-sm animate-slide-in-right"
                style={{animationDelay: `${(index + 3) * 0.1}s`}}
              >
                <CardContent className="p-6 flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20 animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <h4 className="text-xl font-bold mb-4 text-primary">رسالتنا</h4>
              <p className="text-foreground leading-relaxed">
                نؤمن بأن كل علامة تجارية لها قصة فريدة تستحق أن تُحكى. 
                نحن هنا لنكون الوصلة التي تربط بين قصتك وجمهورك المستهدف، 
                ونساعدك في بناء علاقات قوية ومستدامة مع عملائك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;