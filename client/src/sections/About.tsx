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
      <section id="about" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">About The Conference</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/work/about.jfif" 
                alt="Engineers collaborating at conference" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Innovation & Sustainability in Engineering</h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                The Zimbabwe Institution of Engineers (ZIE) International Conference 2023 brings together engineers, researchers, industry leaders, and policymakers from around the world to address the challenges and opportunities in sustainable engineering practices.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                This premier event focuses on innovative engineering solutions that contribute to Zimbabwe's development while embracing global sustainability goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Networking</h4>
                    <p className="text-sm text-neutral-600">Connect with 500+ engineers and industry leaders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Innovation</h4>
                    <p className="text-sm text-neutral-600">Explore cutting-edge technologies and solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <School className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Knowledge</h4>
                    <p className="text-sm text-neutral-600">Learn from 30+ expert speakers and workshops</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Partnerships</h4>
                    <p className="text-sm text-neutral-600">Develop collaborations for future projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Key Conference Topics</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-neutral-600">
              Join discussions on critical areas shaping the future of engineering in Zimbabwe and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="text-secondary text-4xl mb-4">
                <Sun className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Renewable Energy Solutions</h3>
              <p className="text-neutral-600">
                Exploring sustainable energy technologies and implementation strategies for Zimbabwe's growing energy needs.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="text-secondary text-4xl mb-4">
                <Building2 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Infrastructure Development</h3>
              <p className="text-neutral-600">
                Building resilient infrastructure systems to support economic growth and community development.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="text-secondary text-4xl mb-4">
                <Droplet className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Water Resources Management</h3>
              <p className="text-neutral-600">
                Innovative approaches to water conservation, treatment, and distribution systems.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="text-secondary text-4xl mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Smart Cities & Urban Planning</h3>
              <p className="text-neutral-600">
                Integrating technology and sustainable practices in urban development and city management.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="text-secondary text-4xl mb-4">
                <Cpu className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Digital Transformation</h3>
              <p className="text-neutral-600">
                Leveraging emerging technologies to advance engineering practices and solve complex challenges.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="text-secondary text-4xl mb-4">
                <Sprout className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Environmental Engineering</h3>
              <p className="text-neutral-600">
                Developing solutions for waste management, pollution control, and environmental protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
