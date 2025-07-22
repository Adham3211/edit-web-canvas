import { 
  Megaphone, 
  TrendingUp, 
  Search, 
  PenTool, 
  Target, 
  BarChart3,
  Smartphone,
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "التسويق الرقمي",
      description: "استراتيجيات تسويقية متكاملة تصل بعلامتك التجارية إلى أوسع جمهور ممكن"
    },
    {
      icon: Smartphone,
      title: "وسائل التواصل الاجتماعي",
      description: "إدارة احترافية لحساباتك على جميع منصات التواصل الاجتماعي"
    },
    {
      icon: Search,
      title: "تحسين محركات البحث",
      description: "رفع ترتيب موقعك في نتائج البحث وزيادة الزيارات الطبيعية"
    },
    {
      icon: PenTool,
      title: "إنشاء المحتوى",
      description: "محتوى إبداعي وجذاب يحكي قصة علامتك التجارية بطريقة مميزة"
    },
    {
      icon: Target,
      title: "استراتيجية العلامة التجارية",
      description: "بناء هوية بصرية قوية ومتميزة تعكس شخصية علامتك التجارية"
    },
    {
      icon: BarChart3,
      title: "التحليل والتقارير",
      description: "تحليل دقيق للبيانات وتقارير شاملة لقياس نجاح حملاتك التسويقية"
    },
    {
      icon: Globe,
      title: "تطوير المواقع",
      description: "مواقع إلكترونية عصرية وسريعة تحول الزوار إلى عملاء فعليين"
    },
    {
      icon: TrendingUp,
      title: "الإعلانات المدفوعة",
      description: "حملات إعلانية مدروسة ومستهدفة لضمان أفضل عائد على الاستثمار"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 animate-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-scale">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground animate-slide-up">خدماتنا</span>{" "}
            <span className="text-primary animate-glow animate-pulse-glow">المتميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            نقدم مجموعة شاملة من الخدمات التسويقية المبتكرة التي تلبي جميع احتياجات عملك الرقمي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm animate-fade-in-scale hover-scale hover-glow cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-gradient animate-float">
                    <service.icon className="h-8 w-8 text-primary-foreground animate-bounce-in" style={{animationDelay: `${index * 0.05}s`}} />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse-glow"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors animate-slide-up" style={{animationDelay: `${index * 0.05 + 0.1}s`}}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed animate-slide-up" style={{animationDelay: `${index * 0.05 + 0.2}s`}}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-scale" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-8 border border-primary/20 animate-gradient hover-glow hover-scale cursor-pointer">
            <h3 className="text-2xl font-bold mb-4 text-foreground animate-bounce-in">
              هل تريد خدمة مخصصة؟
            </h3>
            <p className="text-muted-foreground mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              نحن نقدم حلول مخصصة تماماً لاحتياجات عملك الفريدة
            </p>
            <button className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 animate-gradient hover-glow animate-bounce-in" style={{animationDelay: '0.2s'}}>
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;