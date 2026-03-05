import { User, Target, Route, Trophy } from "@/components/icons";

const steps = [
  { icon: User, step: "01", title: "Tell Us About You", description: "Share your educational background, current skills, and the tools you already know." },
  { icon: Target, step: "02", title: "Choose Your Goal", description: "Select your target job role from our curated list of 50+ in-demand careers." },
  { icon: Route, step: "03", title: "Get Your Roadmap", description: "Our AI analyzes skill gaps and creates a personalized learning path just for you." },
  { icon: Trophy, step: "04", title: "Become Job Ready", description: "Track progress, complete projects, and prepare for interviews with confidence." },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SkillBridge Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Four simple steps to transform your career journey with AI-powered guidance</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />}
              <div className="relative bg-card rounded-2xl p-6 border shadow-card hover:shadow-card-hover transition-all duration-300">
                <span className="absolute -top-3 -right-3 text-6xl font-bold text-primary/10 select-none">{step.step}</span>
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl gradient-primary mb-4"><step.icon className="h-6 w-6 text-primary-foreground" /></div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
