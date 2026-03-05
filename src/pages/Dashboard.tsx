import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Palette, Code, BarChart3, Database, Cloud, Shield, Search, ArrowRight, Sparkles, Users, Clock } from "@/components/icons";

const jobRoles = [
  { id: "uiux", icon: Palette, title: "UI/UX Designer", description: "Create beautiful, user-centered digital experiences with design thinking and modern tools.", duration: "12 weeks", learners: "2.4K", color: "text-pink-500", bgColor: "bg-pink-500/10" },
  { id: "frontend", icon: Code, title: "Frontend Developer", description: "Build interactive and responsive web applications with React, TypeScript, and modern CSS.", duration: "16 weeks", learners: "5.8K", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { id: "data-analyst", icon: BarChart3, title: "Data Analyst", description: "Transform raw data into actionable business insights using SQL, Python, and visualization tools.", duration: "14 weeks", learners: "3.2K", color: "text-green-500", bgColor: "bg-green-500/10" },
  { id: "backend", icon: Database, title: "Backend Developer", description: "Design and build scalable server-side applications and RESTful APIs.", duration: "16 weeks", learners: "4.1K", color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { id: "cloud", icon: Cloud, title: "Cloud Engineer", description: "Architect and manage cloud infrastructure using AWS, Docker, and Kubernetes.", duration: "18 weeks", learners: "1.8K", color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  { id: "security", icon: Shield, title: "Cybersecurity Analyst", description: "Protect systems and data from digital threats with security best practices.", duration: "20 weeks", learners: "1.5K", color: "text-red-500", bgColor: "bg-red-500/10" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRoles = useMemo(() => {
    if (!searchQuery.trim()) return jobRoles;
    const query = searchQuery.toLowerCase();
    return jobRoles.filter((role) => role.title.toLowerCase().includes(query) || role.description.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-muted/30">
      <Header isAuthenticated onLogout={() => navigate("/")} />
      <main className="container py-8">
        <div className="mb-8"><h1 className="text-3xl font-bold mb-2">Welcome back, Sanjay! 👋</h1><p className="text-muted-foreground">Ready to continue your learning journey? Explore job roles and start a new roadmap.</p></div>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-primary/10"><Sparkles className="h-5 w-5 text-primary" /></div><div><p className="text-2xl font-bold">3</p><p className="text-sm text-muted-foreground">Active Roadmaps</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-accent/10"><Clock className="h-5 w-5 text-accent" /></div><div><p className="text-2xl font-bold">24h</p><p className="text-sm text-muted-foreground">Learning Time</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-green-500/10"><Users className="h-5 w-5 text-green-500" /></div><div><p className="text-2xl font-bold">12</p><p className="text-sm text-muted-foreground">Skills Learned</p></div></CardContent></Card>
        </div>
        <div className="relative mb-8"><Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input placeholder="Search for job roles, skills, or topics..." className="pl-12 h-12 text-base" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4"><h2 className="text-xl font-semibold">Available Job Roles</h2>{searchQuery && <p className="text-sm text-muted-foreground">{filteredRoles.length} result{filteredRoles.length !== 1 ? "s" : ""} found</p>}</div>
          {filteredRoles.length === 0 ? (
            <Card className="p-12 text-center"><div className="flex flex-col items-center gap-3"><Search className="h-12 w-12 text-muted-foreground/50" /><h3 className="text-lg font-medium">No roles found</h3><p className="text-muted-foreground text-sm">Try searching with different keywords like "developer", "designer", or "analyst"</p><Button variant="outline" onClick={() => setSearchQuery("")} className="mt-2">Clear search</Button></div></Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoles.map((role) => (
                <Card key={role.id} variant="interactive" className="group">
                  <CardHeader className="pb-3"><div className="flex items-start justify-between"><div className={`inline-flex p-3 rounded-xl ${role.bgColor}`}><role.icon className={`h-6 w-6 ${role.color}`} /></div><div className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="h-3 w-3" />{role.learners}</div></div><CardTitle className="text-lg mt-3">{role.title}</CardTitle><CardDescription className="line-clamp-2">{role.description}</CardDescription></CardHeader>
                  <CardContent><div className="flex items-center justify-between"><div className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{role.duration}</div><Link to={`/roadmap/${role.id}`}><Button variant="default" size="sm" className="gap-2 group-hover:gap-3 transition-all">Start Roadmap<ArrowRight className="h-4 w-4" /></Button></Link></div></CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
