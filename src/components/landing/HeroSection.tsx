import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, TrendingUp } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />AI-Powered Learning Paths
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">Your Personalized<br /><span className="text-gradient">Career Roadmap</span><br />Starts Here</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">SkillBridge uses AI to analyze your skills, identify gaps, and create a structured learning path tailored to your dream job role.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register"><Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">Start Your Journey<ArrowRight className="h-5 w-5" /></Button></Link>
              <Link to=""><Button variant="outline" size="xl" className="w-full sm:w-auto">Explore Roles</Button></Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-4">
              <div><p className="text-3xl font-bold text-foreground">50+</p><p className="text-sm text-muted-foreground">Career Paths</p></div>
              <div><p className="text-3xl font-bold text-foreground">10K+</p><p className="text-sm text-muted-foreground">Learners</p></div>
              <div><p className="text-3xl font-bold text-foreground">95%</p><p className="text-sm text-muted-foreground">Success Rate</p></div>
            </div>
          </div>
          <div className="relative animate-float hidden lg:block">
            <div className="relative bg-card rounded-2xl shadow-xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center"><Target className="h-6 w-6 text-primary-foreground" /></div>
                  <div><p className="font-semibold">Frontend Developer</p><p className="text-sm text-muted-foreground">Your Target Role</p></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Progress</span><span className="font-medium text-primary">68%</span></div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full w-[68%] gradient-primary rounded-full" /></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted/50 rounded-lg"><TrendingUp className="h-5 w-5 text-accent mb-1" /><p className="text-sm font-medium">12 Skills</p><p className="text-xs text-muted-foreground">Mastered</p></div>
                  <div className="p-3 bg-muted/50 rounded-lg"><Sparkles className="h-5 w-5 text-primary mb-1" /><p className="text-sm font-medium">3 Projects</p><p className="text-xs text-muted-foreground">Completed</p></div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center"><Sparkles className="h-4 w-4 text-accent" /></div>
                  <div className="flex-1"><p className="text-sm font-medium">AI Insight</p><p className="text-xs text-muted-foreground">Focus on React hooks next</p></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-3 border animate-scale-in"><p className="text-xs font-medium text-accent">✓ Job Ready</p></div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 border animate-scale-in" style={{ animationDelay: "0.2s" }}><p className="text-xs font-medium text-primary">🎯 Personalized</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
