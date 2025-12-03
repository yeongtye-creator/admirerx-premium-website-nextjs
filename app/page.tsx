'use client';

import { Heart, Cog, Lock, Clock, Briefcase, GraduationCap, TrendingUp, Zap, Users, Award, BarChart3 } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Healthcare & Pharma', desc: 'HIPAA-compliant patient support services', tag: 'Expertise', highlight: 'Secure', highlight2: 'Operations' },
  { icon: Cog, title: 'Technology & SaaS', desc: 'Technical support and customer success', tag: 'Expertise', highlight: '24/7', highlight2: 'Support' },
  { icon: Briefcase, title: 'Banking & Insurance', desc: 'Fraud prevention and claims processing', tag: 'Expertise', highlight: 'Fast', highlight2: 'Processing' },
  { icon: GraduationCap, title: 'Education & E-Learning', desc: 'Student support and enrollment services', tag: 'Expertise', highlight: 'Smart', highlight2: 'Solutions' }
];

const certifications = [
  { icon: Lock, title: 'ISO 27001 Certified', desc: 'Enterprise-grade information security', tag: 'Security First' },
  { icon: Award, title: 'GDPR & PCI DSS Compliant', desc: 'Full regulatory compliance', tag: '100% Compliant' }
];

const stats = [
  { value: 'Ready', desc: 'To Launch Projects', icon: Briefcase },
  { value: '6', desc: 'Industries Ready', icon: Users },
  { value: '100%', desc: 'Dedicated Service', icon: BarChart3 },
  { value: 'Fresh', desc: 'Innovative Approach', icon: Zap }
];

const features = [
  { icon: BarChart3, value: '100%', title: 'Commitment to Excellence', desc: 'Dedicated to building long-term partnerships through exceptional service.' },
  { icon: Clock, value: '<30s', title: 'Target Response Time', desc: 'AI-powered automation designed for rapid response and resolution.' },
  { icon: Users, value: '24/7', title: 'Global Support', desc: 'Round-the-clock service delivery across all time zones.' }
];

const pillars = [
  { icon: Users, title: 'Strategic Partnership', desc: 'Building lasting relationships through trust, transparency, and mutual success' },
  { icon: Zap, title: 'AI-Powered Innovation', desc: 'Leveraging cutting-edge technology and intelligent automation for operational excellence' },
  { icon: TrendingUp, title: 'Measurable Results', desc: 'Committed to delivering quantifiable business value and performance from day one' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-md z-50 border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AdmirerX</div>
          <div className="flex gap-8 items-center">
            <a href="#" className="text-slate-300 hover:text-white transition">About Us</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Our Services</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Careers</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Partner With Us</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Contact Us</a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">Book Appointment</button>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="group bg-slate-800/30 backdrop-blur border border-blue-500/20 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">{service.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <div className="flex gap-2">
                  <span className="text-purple-400 font-semibold">{service.highlight}</span>
                  <span className="text-blue-400 font-semibold">{service.highlight2}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quality & Compliance */}
      <div className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-semibold mb-4">Trusted & Certified</div>
            <h2 className="text-5xl font-bold text-white mb-4">Quality & Compliance</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div key={i} className="bg-slate-800/30 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">{cert.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-400 text-sm">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <div className="p-4 bg-slate-800/30 border border-blue-500/20 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.value}</h3>
                <p className="text-slate-400 text-sm">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Built for Performance */}
      <div className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">Built for <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Performance</span></h2>
            <p className="text-slate-400 mt-4">State-of-the-art infrastructure ready to deliver exceptional results.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-slate-800/30 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{feature.value}</h3>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-slate-800/30 backdrop-blur border border-blue-500/20 rounded-3xl p-8">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-blue-500/10 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">AdmirerX</h2>
            <p className="text-slate-400 max-w-md">Empowering global businesses with AI-driven solutions and exceptional human expertise. Together, we transform customer experiences and drive innovation.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="text-slate-400 hover:text-white transition block text-sm">About</a>
                <a href="#" className="text-slate-400 hover:text-white transition block text-sm">Services</a>
                <a href="#" className="text-slate-400 hover:text-white transition block text-sm">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="text-slate-400 hover:text-white transition block text-sm">Careers</a>
                <a href="#" className="text-slate-400 hover:text-white transition block text-sm">Partner With Us</a>
                <a href="#" className="text-slate-400 hover:text-white transition block text-sm">Support</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-500/10 text-center text-slate-500 text-sm">
            <p>&copy; 2024 AdmirerX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
