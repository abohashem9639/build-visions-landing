import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.title || !formData.message || !formData.phone) {
      toast.error("الرجاء ملء جميع الحقول");
      return;
    }

    // Here you would typically send the email
    console.log("Form submitted:", formData);
    toast.success("تم إرسال رسالتك بنجاح!");
    
    // Reset form
    setFormData({
      email: "",
      title: "",
      message: "",
      phone: ""
    });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            نحن هنا للإجابة على استفساراتكم وتقديم أفضل الحلول الهندسية
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                البريد الإلكتروني
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                رقم الهاتف
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+963 xxx xxx xxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-border"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">عنوان الرسالة</Label>
            <Input
              id="title"
              type="text"
              placeholder="استفسار عن خدماتكم"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">محتوى الرسالة</Label>
            <Textarea
              id="message"
              placeholder="اكتب رسالتك هنا..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[150px] border-border resize-none"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-bold"
          >
            <Send className="ml-2 h-5 w-5" />
            إرسال الرسالة
          </Button>
        </form>
      </div>
    </section>
  );
};
