import { Link } from "react-router-dom";
import { BookOpen, Linkedin, Twitter, Github } from "@/components/icons";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Roadmaps", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Resources", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">SkillBridge</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">AI-powered learning roadmaps to help you become job-ready for your dream career.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">{footerLinks.product.map((link) => (<li key={link.name}><Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.name}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">{footerLinks.company.map((link) => (<li key={link.name}><Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.name}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">{footerLinks.support.map((link) => (<li key={link.name}><Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.name}</Link></li>))}</ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 SkillBridge. All rights reserved.sanjay Gummadi</p>
          <p className="text-sm text-muted-foreground">Made with ❤️ for learners worldwide</p>
        </div>
      </div>
    </footer>
  );
}
