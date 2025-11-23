import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">شركة مجاز الخليج المحدودة</h3>
            <p className="text-primary-foreground/80 mb-4">
              رائدون في تقديم خدمات الفحص والاختبار الهندسي بأعلى معايير الجودة والدقة
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="flex flex-col text-primary-foreground/80">
                  <span dir="ltr">+966 54 938 6526</span>
                  <span dir="ltr">+966 56 910 5824</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">majazalkhalij@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent" />
                <a 
                  href="https://www.majaz.com.sa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  www.majaz.com.sa
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">السعودية - المدينة المنورة</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-lg transition-all hover-scale"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-lg transition-all hover-scale"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-lg transition-all hover-scale"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-primary-foreground/60 text-sm">
                ساعات العمل: الأحد - الخميس
              </p>
              <p className="text-primary-foreground/60 text-sm">
                8:00 صباحاً - 5:00 مساءً
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            جميع الحقوق محفوظة لشركة مجاز الخليج المحدودة © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
