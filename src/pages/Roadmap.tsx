import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Code, Briefcase, MessageSquare, Trophy, CheckCircle2, Circle, Play, Clock, ExternalLink, Sparkles, ChevronRight } from "@/components/icons";

const milestones = [
  { id: 1, title: "Foundation", description: "Core concepts and fundamentals", progress: 100, status: "completed", icon: BookOpen, color: "bg-progress-foundation", modules: [{ title: "HTML & CSS Basics", completed: true }, { title: "JavaScript Fundamentals", completed: true }, { title: "Git Version Control", completed: true }] },
  { id: 2, title: "Tools & Frameworks", description: "Modern development tools", progress: 75, status: "in-progress", icon: Code, color: "bg-progress-tools", modules: [{ title: "React Fundamentals", completed: true }, { title: "TypeScript Essentials", completed: true }, { title: "State Management", completed: false }, { title: "Testing with Jest", completed: false }] },
  { id: 3, title: "Projects", description: "Hands-on portfolio projects", progress: 33, status: "in-progress", icon: Briefcase, color: "bg-progress-projects", modules: [{ title: "Portfolio Website", completed: true }, { title: "E-commerce Dashboard", completed: false }, { title: "Real-time Chat App", completed: false }] },
  { id: 4, title: "Interview Prep", description: "Technical interview mastery", progress: 0, status: "locked", icon: MessageSquare, color: "bg-progress-interview", modules: [{ title: "DSA Essentials", completed: false }, { title: "System Design Basics", completed: false }, { title: "Behavioral Questions", completed: false }] },
  { id: 5, title: "Job Ready", description: "Ready to land your dream job", progress: 0, status: "locked", icon: Trophy, color: "bg-progress-ready", modules: [{ title: "Resume Building", completed: false }, { title: "LinkedIn Optimization", completed: false }, { title: "Mock Interviews", completed: false }] },
];

const Roadmap = () => {
  const navigate = useNavigate();
  const overallProgress = Math.round(milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length);

  return (
    <div className="min-h-screen bg-muted/30">
      <Header isAuthenticated onLogout={() => navigate("/")} />
      <main className="container py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><span>Dashboard</span><ChevronRight className="h-4 w-4" /><span className="text-foreground font-medium">Frontend Developer</span></div>
              <h1 className="text-3xl font-bold">Frontend Developer Roadmap</h1><p className="text-muted-foreground mt-1">Your personalized AI-generated learning path</p>
            </div>
            <Card className="px-4 py-3"><div className="flex items-center gap-3"><div className="text-right"><p className="text-2xl font-bold text-primary">{overallProgress}%</p><p className="text-xs text-muted-foreground">Complete</p></div><div className="w-16 h-16"><svg className="transform -rotate-90 w-16 h-16"><circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted" /><circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="none" strokeDasharray={`${overallProgress * 1.76} 176`} className="text-primary transition-all duration-500" /></svg></div></div></Card>
          </div>
          <Card className="bg-primary/5 border-primary/20"><CardContent className="p-4 flex items-start gap-3"><div className="p-2 rounded-lg bg-primary/10"><Sparkles className="h-5 w-5 text-primary" /></div><div><p className="font-medium text-sm">AI Insight</p><p className="text-sm text-muted-foreground">You're making great progress! Focus on completing "State Management" next - it's essential for React interviews and used in 85% of frontend positions.</p></div></CardContent></Card>
        </div>
        <div className="mb-8 flex items-center justify-between mb-4">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${milestone.status === "completed" ? "gradient-primary text-primary-foreground" : milestone.status === "in-progress" ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}`}>{milestone.status === "completed" ? <CheckCircle2 className="h-5 w-5" /> : <milestone.icon className="h-5 w-5" />}</div>
                <span className="text-xs mt-2 text-center font-medium hidden sm:block">{milestone.title}</span><span className="text-xs text-muted-foreground hidden sm:block">{milestone.progress}%</span>
              </div>
              {index < milestones.length - 1 && <div className="flex-1 h-1 mx-2 rounded-full bg-muted overflow-hidden"><div className="h-full gradient-primary transition-all duration-500" style={{ width: `${milestone.progress}%` }} /></div>}
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <Card key={milestone.id} variant={milestone.status === "locked" ? "ghost" : "default"} className={milestone.status === "locked" ? "opacity-60" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3"><div className={`p-2 rounded-lg ${milestone.status === "completed" ? "bg-green-500/10" : milestone.status === "in-progress" ? "bg-primary/10" : "bg-muted"}`}><milestone.icon className={`h-5 w-5 ${milestone.status === "completed" ? "text-green-500" : milestone.status === "in-progress" ? "text-primary" : "text-muted-foreground"}`} /></div><div><CardTitle className="text-lg">{milestone.title}</CardTitle><CardDescription>{milestone.description}</CardDescription></div></div>
                  <div className="text-right"><p className="text-lg font-bold">{milestone.progress}%</p><p className="text-xs text-muted-foreground">Complete</p></div>
                </div>
                <Progress value={milestone.progress} className="mt-3" />
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {milestone.modules.map((module, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg border ${module.completed ? "bg-green-500/5 border-green-500/20" : "bg-card hover:bg-muted/50"}`}>
                      {module.completed ? <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> : milestone.status === "locked" ? <Circle className="h-5 w-5 text-muted-foreground shrink-0" /> : <Play className="h-5 w-5 text-primary shrink-0" />}
                      <span className={`text-sm ${module.completed ? "text-muted-foreground" : ""}`}>{module.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Roadmap;
