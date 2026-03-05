import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, ArrowLeft, ArrowRight, Check, User, GraduationCap, Briefcase } from "@/components/icons";

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Education", icon: GraduationCap },
  { id: 3, title: "Career Goals", icon: Briefcase },
];

const jobRoles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Data Analyst", "Data Scientist", "Cloud Engineer", "DevOps Engineer", "Cybersecurity Analyst", "Product Manager"];

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "", age: "", educationLevel: "", specialization: "", institution: "", year: "", targetRole: "", experience: "", skills: "", tools: "" });

  const updateFormData = (field: string, value: string) => setFormData({ ...formData, [field]: value });
  const handleNext = () => currentStep < 3 ? setCurrentStep(currentStep + 1) : navigate("/dashboard");
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  return (
    <div className="min-h-screen gradient-hero py-8 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary"><BookOpen className="h-5 w-5 text-primary-foreground" /></div>
          <span className="text-2xl font-bold tracking-tight">SkillBridge</span>
        </Link>
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${currentStep >= step.id ? "gradient-primary border-transparent text-primary-foreground" : "border-muted-foreground/30 text-muted-foreground"}`}>
                {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </div>
              {index < steps.length - 1 && <div className={`w-12 sm:w-20 h-0.5 mx-2 transition-all duration-300 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>
        <Card variant="elevated" className="shadow-xl animate-scale-in">
          <CardHeader className="text-center"><CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle><CardDescription>Step {currentStep} of {steps.length}</CardDescription></CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="name">Full Name *</Label><Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => updateFormData("name", e.target.value)} /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => updateFormData("email", e.target.value)} /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="phone">Phone Number *</Label><Input id="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => updateFormData("phone", e.target.value)} /></div>
                  <div className="space-y-2"><Label htmlFor="location">Location</Label><Input id="location" placeholder="City, Country" value={formData.location} onChange={(e) => updateFormData("location", e.target.value)} /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="age">Age (Optional)</Label><Input id="age" type="number" placeholder="25" className="w-32" value={formData.age} onChange={(e) => updateFormData("age", e.target.value)} /></div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-2"><Label>Education Level *</Label><Select value={formData.educationLevel} onValueChange={(value) => updateFormData("educationLevel", value)}><SelectTrigger><SelectValue placeholder="Select your education level" /></SelectTrigger><SelectContent><SelectItem value="high-school">High School</SelectItem><SelectItem value="bachelors">Bachelor's Degree</SelectItem><SelectItem value="masters">Master's Degree</SelectItem><SelectItem value="phd">PhD</SelectItem><SelectItem value="self-taught">Self-Taught</SelectItem></SelectContent></Select></div>
                <div className="space-y-2"><Label htmlFor="specialization">Specialization / Major</Label><Input id="specialization" placeholder="e.g., Computer Science, Design" value={formData.specialization} onChange={(e) => updateFormData("specialization", e.target.value)} /></div>
                <div className="space-y-2"><Label htmlFor="institution">College / Institution</Label><Input id="institution" placeholder="Your institution name" value={formData.institution} onChange={(e) => updateFormData("institution", e.target.value)} /></div>
                <div className="space-y-2"><Label htmlFor="year">Graduation Year</Label><Input id="year" type="number" placeholder="2024" className="w-32" value={formData.year} onChange={(e) => updateFormData("year", e.target.value)} /></div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-2"><Label>Target Job Role *</Label><Select value={formData.targetRole} onValueChange={(value) => updateFormData("targetRole", value)}><SelectTrigger><SelectValue placeholder="Select your dream role" /></SelectTrigger><SelectContent>{jobRoles.map((role) => (<SelectItem key={role} value={role.toLowerCase().replace(/\s+/g, "-")}>{role}</SelectItem>))}</SelectContent></Select></div>
                <div className="space-y-2"><Label>Experience Level *</Label><Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}><SelectTrigger><SelectValue placeholder="Select your experience level" /></SelectTrigger><SelectContent><SelectItem value="fresher">Fresher (0-1 years)</SelectItem><SelectItem value="junior">Junior (1-3 years)</SelectItem><SelectItem value="mid">Mid-Level (3-5 years)</SelectItem><SelectItem value="senior">Senior (5+ years)</SelectItem></SelectContent></Select></div>
                <div className="space-y-2"><Label htmlFor="skills">Skills You Know</Label><Input id="skills" placeholder="e.g., HTML, CSS, JavaScript" value={formData.skills} onChange={(e) => updateFormData("skills", e.target.value)} /><p className="text-xs text-muted-foreground">Separate multiple skills with commas</p></div>
                <div className="space-y-2"><Label htmlFor="tools">Tools You Know</Label><Input id="tools" placeholder="e.g., VS Code, Figma, Git" value={formData.tools} onChange={(e) => updateFormData("tools", e.target.value)} /><p className="text-xs text-muted-foreground">Separate multiple tools with commas</p></div>
              </div>
            )}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="gap-2"><ArrowLeft className="h-4 w-4" />Back</Button>
              <Button variant="hero" onClick={handleNext} className="gap-2">{currentStep === 3 ? "Complete Registration" : "Next"}{currentStep < 3 && <ArrowRight className="h-4 w-4" />}</Button>
            </div>
          </CardContent>
        </Card>
        <p className="text-center mt-6 text-sm text-muted-foreground">Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link></p>
      </div>
    </div>
  );
};

export default Register;
