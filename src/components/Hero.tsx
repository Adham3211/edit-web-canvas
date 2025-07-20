import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-primary/20 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary/30 rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">نحن</span>{" "}
              <span className="text-primary animate-glow">وصلة</span>
              <br />
              <span className="text-foreground">نجاحك</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
              شركة متخصصة في التسويق الرقمي والحلول الإبداعية التي تربط علامتك التجارية بجمهورك المستهدف
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
            >
              ابدأ مشروعك معنا
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              شاهد أعمالنا
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center animate-slide-in-right">
              <div className="text-3xl font-bold text-primary">+150</div>
              <div className="text-sm text-muted-foreground">عميل راضي</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-primary">+500</div>
              <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">سنوات خبرة</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Waslah Marketing Agency" 
              className="w-full h-auto rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-xl animate-glow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;