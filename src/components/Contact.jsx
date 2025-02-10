import { useState } from 'react';
import { Mail, Phone, MessageSquare, User, Send, Linkedin, Twitter, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_id_here',
        'template_id_here',
        {
          name: formData.name,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        },
        'public_id_here'
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', interest: '', message: '' });
      })
      .catch((error) => console.error('Error sending email:', error));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information Card */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="text-blue-400 shrink-0" size={24} />
                  <span className="text-lg">+92 3169560467</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail className="text-purple-400 shrink-0" size={24} />
                  <span className="text-lg">contact@rainthos.com</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-6">
                  {[
                    { icon: Linkedin, color: 'text-blue-600', link: 'https://www.linkedin.com/company/rainthos/' },
                    { icon: Twitter, color: 'text-sky-500', link: '#' },
                    { icon: Github, color: 'text-gray-800', link: '#' }
                  ].map((SocialIcon, index) => (
                    <a
                      key={index}
                      href={SocialIcon.link}
                      className={`${SocialIcon.color} hover:scale-110 transition-transform`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon.icon size={28} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <div className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 text-gray-500 border-2 border-blue-400 rounded-lg bg-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border-2  text-gray-500 border-blue-400 rounded-lg bg-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-3 border-2 text-gray-500 border-blue-400 rounded-lg bg-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">What are you interested in?</option>
                  <option value="cloud_infrastructure">Cloud Infrastructure</option>
                  <option value="automation">Automation</option>
                  <option value="ci_cd">CI/CD Pipeline</option>
                  <option value="containerization">Containerization</option>
                  <option value="monitoring">Monitoring & Logging</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-500" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 border-2 text-gray-500 border-blue-400 rounded-lg bg-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                <Send size={20} />
                Send Message
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 text-green-800 border border-green-200 rounded-lg shadow-sm">
                  Message sent successfully! 🎉
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;