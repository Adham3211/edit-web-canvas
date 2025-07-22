import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent animate-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-float hover-glow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-primary/20 rounded-lg animate-float animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary/30 rotate-45 animate-float animate-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-float opacity-20" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-scale">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground animate-slide-up">نحن</span>{" "}
              <span className="inline-flex items-center">
                <img src="/src/assets/w-logo.png" alt="وصلة" className="h-16 lg:h-20 mx-2 animate-glow animate-pulse-glow" />
              </span>
              <br />
              <span className="text-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>نجاحك</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl animate-slide-up" style={{animationDelay: '0.4s'}}>
              شركة متخصصة في التسويق الرقمي والحلول الإبداعية التي تربط علامتك التجارية بجمهورك المستهدف
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 text-lg px-8 py-6 animate-gradient hover-glow hover-scale"
            >
              ابدأ مشروعك معنا
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform group-hover-slide" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 hover-scale hover-glow"
            >
              <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform animate-bounce-in" style={{animationDelay: '0.1s'}} />
              شاهد أعمالنا
            </Button>
          </div>

          {/* Join Now Card */}
          <div className="pt-8 animate-fade-in-scale" style={{animationDelay: '0.8s'}}>
            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-8 text-center relative overflow-hidden animate-gradient hover-glow hover-scale cursor-pointer">
              <div className="absolute top-0 right-0 text-6xl font-bold text-white/10 animate-float">و</div>
              <h3 className="text-2xl font-bold text-white mb-4 animate-bounce-in">
                نحن هنا لربط نجاحك معك
              </h3>
              <p className="text-white/90 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
                We Are Here To Connect your Success with you
              </p>
              <Button 
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-3 hover-scale animate-bounce-in" 
                style={{animationDelay: '0.2s'}}
              >
                انضم الآن
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fade-in-scale hover-scale" style={{animationDelay: '0.3s'}}>
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Wasla Marketing Agency" 
              className="w-full h-auto rounded-2xl shadow-2xl animate-float hover-glow transition-all duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-xl animate-glow animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover-scale cursor-pointer">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover-glow transition-all duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;