import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      value: "01007113793",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "راسلنا",
      value: "info@wasla.com",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "زورنا",
      value: "مصر - التجمع الخامس",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "الأحد - الخميس: 9 صباحاً - 6 مساءً",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">تواصل</span>{" "}
            <span className="text-primary">معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            هل أنت مستعد لتحويل أفكارك إلى واقع؟ تواصل معنا اليوم ولنبدأ رحلة النجاح معاً
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                ابدأ مشروعك اليوم
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                نحن متحمسون لسماع قصتك ومساعدتك في تحقيق أهدافك التسويقية. 
                تواصل معنا بالطريقة التي تناسبك أكثر.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm animate-slide-in-right"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{info.title}</h4>
                    <p className={`${info.color} text-sm font-medium`}>{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20 animate-fade-in animate-gradient hover-glow" style={{animationDelay: '0.4s'}}>
              <h4 className="text-xl font-bold mb-4 text-primary animate-bounce-in">تابعنا على وسائل التواصل</h4>
              <p className="text-muted-foreground mb-6 animate-slide-up">
                ابق على اطلاع بآخر أعمالنا ونصائحنا التسويقية
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a 
                  href="https://www.facebook.com/share/1AqTAQsf8h/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-all duration-300 hover-scale animate-bounce-in hover-glow"
                  style={{animationDelay: '0.1s'}}
                >
                  <Facebook className="h-5 w-5 text-primary-foreground" />
                </a>
                <a 
                  href="https://www.instagram.com/wasla_agencyy?utm_source=qr&igsh=czl3encyMmJyNncy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-all duration-300 hover-scale animate-bounce-in hover-glow"
                  style={{animationDelay: '0.2s'}}
                >
                  <Instagram className="h-5 w-5 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="border-none bg-card/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">أرسل رسالة</h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">الاسم</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">البريد الإلكتروني</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">رقم الهاتف</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">نوع الخدمة</label>
                    <select className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background">
                      <option>اختر نوع الخدمة</option>
                      <option>التسويق الرقمي</option>
                      <option>وسائل التواصل الاجتماعي</option>
                      <option>تحسين محركات البحث</option>
                      <option>تطوير المواقع</option>
                      <option>إنشاء المحتوى</option>
                      <option>أخرى</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">الرسالة</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                      placeholder="أخبرنا عن مشروعك..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 text-lg py-6"
                  >
                    إرسال الرسالة
                    <Send className="mr-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-primary-foreground">
              مستعد لتبدأ؟
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية اليوم واكتشف كيف يمكن لوصلة أن تحول أفكارك إلى نجاح حقيقي
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-4"
            >
              احجز استشارة مجانية
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;