import {
  Users,
  Lightbulb,
  School,
  Handshake,
  Sun,
  Building2,
  Droplet,
  Building,
  Cpu,
  Sprout
} from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ABOUT THE CONFERENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Engineering Excellence in Action</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Black engineers collaborating at conference" 
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/90">Engineers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">Innovation & Sustainability in Engineering</h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                The Zimbabwe Institution of Engineers (ZIE) International Conference 2025 is Zimbabwe's premier engineering event, uniting global experts, innovators, and industry leaders in a celebration of engineering excellence.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-2 text-lg">Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To foster collaboration between engineers, researchers, and policymakers, driving sustainable development through innovative engineering solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
                  <h4 className="font-bold text-primary mb-2 text-lg">Our Focus</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Addressing critical engineering challenges while promoting sustainable practices that align with both national development goals and global sustainability standards.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
                  <div className="text-secondary mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading font-bold mb-3 text-lg text-primary">Networking</h4>
                  <p className="text-gray-600">Connect with 500+ engineers and industry leaders from across Africa</p>
                </div>
                <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 p-6 rounded-xl border border-secondary/20">
                  <div className="text-accent mb-4">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading font-bold mb-3 text-lg text-primary">Innovation</h4>
                  <p className="text-gray-600">Explore cutting-edge technologies and breakthrough solutions</p>
                </div>
                <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 rounded-xl border border-accent/20">
                  <div className="text-primary mb-4">
                    <School className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading font-bold mb-3 text-lg text-primary">Knowledge</h4>
                  <p className="text-gray-600">Learn from 30+ expert speakers and interactive workshops</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/5 to-green-500/10 p-6 rounded-xl border border-green-500/20">
                  <div className="text-green-600 mb-4">
                    <Handshake className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading font-bold mb-3 text-lg text-primary">Partnerships</h4>
                  <p className="text-gray-600">Develop meaningful collaborations for impactful projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-semibold mb-4">
              CONFERENCE FOCUS AREAS
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Engineering the Future</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-8"></div>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
              Join thought-provoking discussions on critical engineering domains that are shaping Zimbabwe's technological landscape and sustainable development goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl group">
              <div className="text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Renewable Energy Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Exploring sustainable energy technologies and implementation strategies for Zimbabwe's growing energy needs and green transition.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl group">
              <div className="text-accent text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Infrastructure Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building resilient infrastructure systems to support economic growth, community development, and regional connectivity.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl group">
              <div className="text-blue-500 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Droplet className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Water Resources Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovative approaches to water conservation, treatment, distribution systems, and sustainable water security solutions.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl group">
              <div className="text-purple-500 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Smart Cities & Urban Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrating technology and sustainable practices in urban development, city management, and future-ready communities.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl group">
              <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Digital Transformation</h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging emerging technologies, AI, and digitalization to advance engineering practices and solve complex challenges.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl group">
              <div className="text-green-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sprout className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Environmental Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing innovative solutions for waste management, pollution control, environmental protection, and climate resilience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
