import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, BarChart3, Database, Cloud, Shield, ArrowRight } from "@/components/icons";

const jobRoles = [
  { icon: Palette, title: "UI/UX Designer", description: "Create beautiful, user-centered digital experiences", skills: ["Figma", "Design Systems", "User Research"], color: "text-pink-500", bgColor: "bg-pink-500/10" },
  { icon: Code, title: "Frontend Developer", description: "Build interactive web applications with modern frameworks", skills: ["React", "TypeScript", "CSS"], color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { icon: BarChart3, title: "Data Analyst", description: "Transform data into actionable business insights", skills: ["SQL", "Python", "Tableau"], color: "text-green-500", bgColor: "bg-green-500/10" },
  { icon: Database, title: "Backend Developer", description: "Design and build scalable server-side applications", skills: ["Node.js", "PostgreSQL", "APIs"], color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { icon: Cloud, title: "Cloud Engineer", description: "Architect and manage cloud infrastructure", skills: ["AWS", "Docker", "Kubernetes"], color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  { icon: Shield, title: "Cybersecurity", description: "Protect systems and data from digital threats", skills: ["Security", "Networking", "Compliance"], color: "text-red-500", bgColor: "bg-red-500/10" },
];

export function JobRolesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Top Job Roles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose from 50+ in-demand career paths. Each comes with an AI-generated roadmap tailored to industry requirements.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobRoles.map((role, index) => (
            <Card key={role.title} variant="interactive" className="group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl ${role.bgColor} mb-4`}><role.icon className={`h-6 w-6 ${role.color}`} /></div>
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">{role.skills.map((skill) => (<span key={skill} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">{skill}</span>))}</div>
                <Button variant="ghost" className="p-0 h-auto text-primary group-hover:gap-3 gap-2 transition-all">View Roadmap<ArrowRight className="h-4 w-4" /></Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10"><Link to=""><Button variant="outline" size="lg" className="gap-2">View All Roles<ArrowRight className="h-4 w-4" /></Button></Link></div>
      </div>
    </section>
  );
}
