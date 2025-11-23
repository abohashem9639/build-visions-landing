import { Building2, Target, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            من نحن
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            شركة رائدة في مجال الاستشارات الهندسية، نقدم خدمات متكاملة في فحص واختبار المواد الإنشائية
            بأحدث التقنيات وأعلى معايير الجودة العالمية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover-scale">
            <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">خبرة واسعة</h3>
            <p className="text-muted-foreground">
              سنوات من الخبرة في تقديم الاستشارات الهندسية للمشاريع الكبرى والمتوسطة
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover-scale">
            <div className="bg-gradient-to-br from-accent to-accent/80 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">دقة عالية</h3>
            <p className="text-muted-foreground">
              نستخدم أحدث الأجهزة والتقنيات لضمان نتائج دقيقة وموثوقة في جميع الفحوصات
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover-scale">
            <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">جودة معتمدة</h3>
            <p className="text-muted-foreground">
              نلتزم بأعلى معايير الجودة العالمية ونحمل شهادات اعتماد من جهات محلية ودولية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
