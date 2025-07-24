import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "الرئيسية",
    "خدماتنا", 
    "من نحن",
    "أعمالنا",
    "تواصل معنا"
  ];

  const services = [
    "التسويق الرقمي",
    "وسائل التواصل الاجتماعي",
    "تحسين محركات البحث",
    "إنشاء المحتوى",
    "تطوير المواقع"
  ];

  return (
    <footer className="bg-gradient-to-b from-accent to-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">و</span>
              </div>
              <span className="text-2xl font-bold text-primary">وصلة</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              شركة رائدة في التسويق الرقمي، نساعد الشركات على الوصول إلى أهدافها من خلال استراتيجيات مبتكرة ومدروسة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  أعمالنا
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@waslah.com</span>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">الأحد - الخميس<br />9 صباحاً - 6 مساءً</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-right">
              © 2025 وصلة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;