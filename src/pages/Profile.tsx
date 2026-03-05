import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, GraduationCap, Briefcase, Calendar, Edit, Clock, CheckCircle2, ArrowRight, Code, BarChart3, Palette } from "@/components/icons";

const userProfile = { name: "Sanjay Gummadi", email: "sanjay.dev@example.com", location: "Hyderabad, ***", education: "Bachelor's in Computer Science", institution: "Hyderabad university", experience: "Fresher", targetRole: "Frontend Developer", skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"], tools: ["VS Code", "Git", "Figma", "Chrome DevTools"] };
const suggestedCourses = [{ title: "Advanced React Patterns", duration: "8 hours", level: "Intermediate", icon: Code, color: "text-blue-500", bgColor: "bg-blue-500/10" }, { title: "TypeScript Masterclass", duration: "12 hours", level: "Intermediate", icon: Code, color: "text-cyan-500", bgColor: "bg-cyan-500/10" }, { title: "Data Visualization with D3", duration: "6 hours", level: "Advanced", icon: BarChart3, color: "text-green-500", bgColor: "bg-green-500/10" }];
const ongoingCourses = [{ title: "React Fundamentals", progress: 75, icon: Code, color: "text-blue-500" }, { title: "UI Design Basics", progress: 45, icon: Palette, color: "text-pink-500" }];
const completedCourses = [{ title: "HTML & CSS Basics", date: "Dec 2024" }, { title: "JavaScript Essentials", date: "Nov 2024" }, { title: "Git Version Control", date: "Nov 2024" }];

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-muted/30">
      <Header isAuthenticated onLogout={() => navigate("/")} />
      <main className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card><CardContent className="pt-6">
              <div className="text-center mb-6"><Avatar className="h-24 w-24 mx-auto mb-4"><AvatarImage src="" /><AvatarFallback className="text-2xl gradient-primary text-primary-foreground">JD</AvatarFallback></Avatar><h2 className="text-2xl font-bold">{userProfile.name}</h2><p className="text-muted-foreground">{userProfile.targetRole}</p><Badge variant="secondary" className="mt-2">{userProfile.experience}</Badge></div>
              <div className="space-y-4"><div className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-muted-foreground" /><span>{userProfile.email}</span></div><div className="flex items-center gap-3 text-sm"><MapPin className="h-4 w-4 text-muted-foreground" /><span>{userProfile.location}</span></div><div className="flex items-center gap-3 text-sm"><GraduationCap className="h-4 w-4 text-muted-foreground" /><span>{userProfile.education}</span></div><div className="flex items-center gap-3 text-sm"><Briefcase className="h-4 w-4 text-muted-foreground" /><span>{userProfile.institution}</span></div></div>
              <Button variant="outline" className="w-full mt-6 gap-2"><Edit className="h-4 w-4" />Edit Profile</Button>
            </CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">Skills</CardTitle></CardHeader><CardContent><div className="flex flex-wrap gap-2">{userProfile.skills.map((skill) => (<Badge key={skill} variant="secondary">{skill}</Badge>))}</div></CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">Tools</CardTitle></CardHeader><CardContent><div className="flex flex-wrap gap-2">{userProfile.tools.map((tool) => (<Badge key={tool} variant="outline">{tool}</Badge>))}</div></CardContent></Card>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <Card><CardHeader><CardTitle>Suggested for You</CardTitle><CardDescription>AI-recommended courses based on your learning path</CardDescription></CardHeader><CardContent><div className="grid sm:grid-cols-3 gap-4">{suggestedCourses.map((course) => (<div key={course.title} className="p-4 rounded-xl border bg-card hover:shadow-card-hover transition-all cursor-pointer group"><div className={`inline-flex p-2 rounded-lg ${course.bgColor} mb-3`}><course.icon className={`h-5 w-5 ${course.color}`} /></div><h4 className="font-medium text-sm mb-1 line-clamp-2">{course.title}</h4><div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock className="h-3 w-3" />{course.duration}</div><Badge variant="outline" className="mt-2 text-xs">{course.level}</Badge></div>))}</div></CardContent></Card>
            <Card><CardHeader><CardTitle>In Progress</CardTitle><CardDescription>Continue where you left off</CardDescription></CardHeader><CardContent><div className="space-y-4">{ongoingCourses.map((course) => (<div key={course.title} className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-card-hover transition-all cursor-pointer group"><div className="p-3 rounded-lg bg-primary/10"><course.icon className={`h-5 w-5 ${course.color}`} /></div><div className="flex-1"><h4 className="font-medium mb-2">{course.title}</h4><div className="flex items-center gap-3"><Progress value={course.progress} className="flex-1" /><span className="text-sm text-muted-foreground w-12">{course.progress}%</span></div></div><Button size="sm" className="gap-1 group-hover:gap-2 transition-all">Continue<ArrowRight className="h-4 w-4" /></Button></div>))}</div></CardContent></Card>
            <Card><CardHeader><CardTitle>Completed</CardTitle><CardDescription>Courses you've finished</CardDescription></CardHeader><CardContent><div className="space-y-3">{completedCourses.map((course) => (<div key={course.title} className="flex items-center justify-between p-3 rounded-lg border bg-green-500/5 border-green-500/20"><div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /><span className="font-medium">{course.title}</span></div><div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" />{course.date}</div></div>))}</div></CardContent></Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
