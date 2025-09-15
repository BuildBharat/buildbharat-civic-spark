import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CarFront, Lightbulb, Trash2, AlertTriangle, PawPrint, Droplets, TrafficCone, MapPin } from 'lucide-react';
import heroImage from '@/assets/civic-hero-illustration.jpg';

const Index = () => {
  const civicIssues = [
    { icon: CarFront, title: "Road Potholes" },
    { icon: Lightbulb, title: "Street Lights" },
    { icon: Trash2, title: "Garbage & Cleanliness" },
    { icon: AlertTriangle, title: "Exposed Manholes" },
    { icon: PawPrint, title: "Stray Animals" },
    { icon: Droplets, title: "Water Supply" },
    { icon: TrafficCone, title: "Traffic Obstructions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Civic Issues,{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Solved Together
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Report local problems, track their resolution, and collaborate with your community to build a better Bharat.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/report">
                  <Button size="lg" className="group w-full sm:w-auto">
                    Report an Issue 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/track">
                  <Button variant="teal" size="lg" className="w-full sm:w-auto">
                    Track Issue Status
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <img 
                src={heroImage} 
                alt="Illustration of civic engagement and smart city technology" 
                className="relative w-full h-auto object-cover rounded-2xl shadow-card hover:shadow-elegant transition-shadow duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Can You Report?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From potholes to power cuts, help improve your neighborhood by reporting civic issues
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {civicIssues.map((issue, index) => (
              <Link to="/report" key={index} className="block group">
                <Card className="h-full hover:shadow-card transition-all duration-300 border-2 border-transparent hover:border-accent/20 group-hover:scale-105">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-block p-4 rounded-xl bg-accent-light group-hover:bg-accent/20 transition-colors">
                      <issue.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {issue.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Link to="/map" className="block group">
              <Card className="h-full hover:shadow-card transition-all duration-300 border-2 border-transparent hover:border-accent/20 group-hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-block p-4 rounded-xl bg-accent-light group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-8 w-8 text-accent"/>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    View All Issues
                  </h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to make a difference 
                <br className="hidden sm:block" />
                in your community?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Join thousands of citizens who are already building a better Bharat, one issue at a time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/report">
                <Button variant="outline-white" size="lg" className="group w-full sm:w-auto">
                  Start Reporting Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
