import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Share2, Calendar, CheckCircle2, Crown, Sparkles, Code, Palette, BarChart3 } from "@/components/icons";

const certificates = [
  { id: 1, title: "HTML & CSS Fundamentals", issueDate: "December 15, 2024", credentialId: "SB-2024-HTML-CSS-001", icon: Code, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { id: 2, title: "JavaScript Essentials", issueDate: "November 28, 2024", credentialId: "SB-2024-JS-002", icon: Code, color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
  { id: 3, title: "Git Version Control", issueDate: "November 10, 2024", credentialId: "SB-2024-GIT-003", icon: Code, color: "text-purple-500", bgColor: "bg-purple-500/10" },
];
const subscriptionPlan = { name: "Pro Learner", status: "Active", renewalDate: "January 15, 2025", features: ["Unlimited AI roadmaps", "All job role paths", "Priority support", "Certificate verification", "Interview prep resources"] };

const Certificates = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-muted/30">
      <Header isAuthenticated onLogout={() => navigate("/")} />
      <main className="container py-8">
        <div className="mb-8"><h1 className="text-3xl font-bold mb-2">Certificates & Subscription</h1><p className="text-muted-foreground">View your earned certificates and manage your subscription</p></div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card><CardHeader><div className="flex items-center justify-between"><div><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5 text-primary" />Your Certificates</CardTitle><CardDescription>Certificates earned upon completing courses</CardDescription></div><Badge variant="secondary" className="text-sm">{certificates.length} Earned</Badge></div></CardHeader><CardContent><div className="space-y-4">{certificates.map((cert) => (<div key={cert.id} className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-card-hover transition-all"><div className="flex items-start gap-4"><div className={`p-3 rounded-xl ${cert.bgColor}`}><cert.icon className={`h-6 w-6 ${cert.color}`} /></div><div className="flex-1"><h3 className="font-semibold text-lg mb-1">{cert.title}</h3><div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3"><div className="flex items-center gap-1"><Calendar className="h-4 w-4" />{cert.issueDate}</div><div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-500" />Verified</div></div><p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p></div><div className="flex gap-2"><Button variant="outline" size="sm" className="gap-1"><Share2 className="h-4 w-4" />Share</Button><Button variant="default" size="sm" className="gap-1"><Download className="h-4 w-4" />Download</Button></div></div><div className="absolute top-0 right-0 w-20 h-20 gradient-primary opacity-5 rounded-bl-full" /></div>))}</div></CardContent></Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="relative overflow-hidden"><div className="absolute inset-0 gradient-primary opacity-10" /><div className="absolute inset-[1px] bg-card rounded-xl" /><CardHeader className="relative"><div className="flex items-center gap-2 mb-2"><Crown className="h-5 w-5 text-primary" /><Badge className="gradient-primary text-primary-foreground">{subscriptionPlan.status}</Badge></div><CardTitle className="text-2xl">{subscriptionPlan.name}</CardTitle><CardDescription>Renews on {subscriptionPlan.renewalDate}</CardDescription></CardHeader><CardContent className="relative"><div className="space-y-3 mb-6">{subscriptionPlan.features.map((feature, index) => (<div key={index} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /><span>{feature}</span></div>))}</div><div className="space-y-3"><Button variant="outline" className="w-full">Manage Subscription</Button><Button variant="ghost" className="w-full text-muted-foreground">View Billing History</Button></div></CardContent></Card>
            <Card className="mt-6 gradient-primary text-primary-foreground"><CardContent className="pt-6"><div className="flex items-center gap-2 mb-3"><Sparkles className="h-5 w-5" /><span className="font-semibold">Upgrade to Team</span></div><p className="text-sm opacity-90 mb-4">Get team features, analytics, and dedicated support for your organization.</p><Button variant="secondary" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">Learn More</Button></CardContent></Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
