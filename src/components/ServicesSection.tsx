import { Hammer, Mountain, Boxes, FlaskConical, FileCheck, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Hammer,
    title: "فحص الخرسانة",
    description: "اختبارات شاملة لمقاومة وجودة الخرسانة المسلحة"
  },
  {
    icon: Mountain,
    title: "فحص التربة",
    description: "تحليل خواص التربة والأساسات الجيوتقنية"
  },
  {
    icon: Boxes,
    title: "فحص المعادن",
    description: "اختبارات معملية لجودة ومواصفات المعادن"
  },
  {
    icon: FlaskConical,
    title: "التحاليل المعملية",
    description: "تحاليل كيميائية وفيزيائية متخصصة"
  },
  {
    icon: FileCheck,
    title: "الاستشارات الهندسية",
    description: "دراسات وتقارير فنية متكاملة"
  },
  {
    icon: Wrench,
    title: "مراقبة الجودة",
    description: "إشراف ومراقبة جودة التنفيذ في الموقع"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدماتنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الهندسية المتخصصة لضمان سلامة وجودة مشاريعكم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-glow)] transition-all hover-scale border-border"
              >
                <div className="bg-gradient-to-br from-accent to-accent/80 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
