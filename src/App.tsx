import React, { useState, useEffect } from 'react';
import { Code2, BarChart3, ArrowRight, Mail, Linkedin, MapPin } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/diogo.melo@wish4wisdom.pt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });

      if (response.ok) {
        setFormStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Wish4Wisdom</span>
            </div>
            <div className="hidden sm:flex space-x-8">
              {['About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    activeSection === item.toLowerCase() ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Transforming Ideas into
                <span className="text-indigo-600"> Digital Reality</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We're a team of passionate developers and analysts dedicated to crafting innovative solutions 
                that drive business success. With cutting-edge technology and data-driven insights, 
                we help businesses thrive in the digital age.
              </p>
              <div className="flex items-center mt-4 text-gray-600">
                <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                <span>Lisbon, Portugal</span>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Code2 className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Software Development</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Custom software solutions tailored to your needs. From web applications to mobile apps,
                we deliver scalable and maintainable solutions using cutting-edge technologies.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  Full-stack Development
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  Cloud Solutions
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  API Integration
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">BI Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform your data into actionable insights. Our BI solutions help you make
                data-driven decisions and uncover hidden opportunities in your business.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  Data Analytics
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  Dashboard Development
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  Predictive Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Build Something Amazing</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to transform your business? Get in touch with us to discuss your project
                and explore how we can help you achieve your goals.
              </p>
              <div className="space-y-4">
                <a href="mailto:diogo.melo@wish4wisdom.pt" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  diogo.melo@wish4wisdom.pt
                </a>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>Lisbon, Portugal</span>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  Message successfully sent. We'll get in touch ASAP!
                </div>
              )}
              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md">
                  Failed to send message. Please try again.
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;