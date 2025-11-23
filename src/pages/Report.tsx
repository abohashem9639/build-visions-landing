import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader2, FileText, Calendar, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReportData {
  data: {
    report: {
      reportTypeName: string;
      reportNumber: string;
      landNumber: string;
      issueDate: string;
      customerName: string;
    };
  };
}

const fetchReport = async (reportId: string): Promise<ReportData> => {
  const response = await fetch(
    `https://crm-api.majazalkhalig.com.sa/v1/ConfirmedReport?reportNumber=${reportId}`
  );
  
  if (!response.ok) {
    throw new Error("فشل في تحميل التقرير");
  }
  
  return response.json();
};

const Report = () => {
  const { reportId } = useParams<{ reportId: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["report", reportId],
    queryFn: () => fetchReport(reportId!),
    enabled: !!reportId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">جاري تحميل التقرير...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-destructive/5 flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive text-center">خطأ في تحميل التقرير</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              عذراً، حدث خطأ أثناء تحميل التقرير. يرجى التحقق من رقم التقرير والمحاولة مرة أخرى.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const report = data?.data?.report;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">تفاصيل التقرير</h1>
          <p className="text-muted-foreground">معلومات التقرير الفني المعتمد</p>
        </div>

        {/* Report Card */}
        <Card className="shadow-elegant animate-fade-in border-border/50">
          <CardHeader className="bg-gradient-subtle border-b border-border/50">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <CardTitle className="text-2xl">{report?.reportTypeName}</CardTitle>
              <Badge variant="secondary" className="text-base px-4 py-2">
                {report?.reportNumber}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            {/* Customer Info */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">اسم العميل</p>
                <p className="text-lg font-semibold text-foreground">{report?.customerName}</p>
              </div>
            </div>

            {/* Land Number */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">رقم الأرض</p>
                <p className="text-lg font-semibold text-foreground">{report?.landNumber}</p>
              </div>
            </div>

            {/* Issue Date */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">تاريخ الإصدار</p>
                <p className="text-lg font-semibold text-foreground">{report?.issueDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>هذا التقرير معتمد ومصادق عليه من قبل الشركة</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
