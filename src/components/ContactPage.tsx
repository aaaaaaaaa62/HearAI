import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'aaliya.ismail@example.edu.au',
      gradient: 'from-cyan-400 to-blue-400',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Australia',
      gradient: 'from-emerald-400 to-teal-400',
    },
    {
      icon: Phone,
      title: 'Collaborations',
      value: 'Research partnerships & inquiries',
      gradient: 'from-pink-400 to-rose-400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-200">
            Let's connect and make a difference together in healthcare accessibility
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 text-center"
              >
                <div className={`bg-gradient-to-r ${method.gradient} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {method.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-3xl p-12 border border-yellow-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Why Reach Out?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Whether you're interested in learning more about HearAI, exploring collaboration opportunities, or discussing the intersection of AI and healthcare, Aaliya would love to connect with you.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-slate-700">Research collaborations in audiology and AI</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-slate-700">Partnership opportunities for HearAI implementation</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-slate-700">Speaking engagements and knowledge sharing</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-slate-700">Community outreach and project participation</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-yellow-400">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">All inquiries are welcome.</span> I'm committed to using technology to create meaningful impact in remote Indigenous communities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-12 border border-slate-200">
              <h2 className="text-3xl font-bold mb-8 text-slate-900">
                Send a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    placeholder="Research collaboration, partnership, etc."
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none transition-colors resize-none bg-slate-50 focus:bg-white"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-slate-700 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              <p className="text-center text-slate-500 text-sm mt-6">
                We typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Follow HearAI's Journey
          </h2>
          <p className="text-lg text-slate-200">
            Stay updated on the latest developments in accessible hearing healthcare technology
          </p>
        </div>
      </section>
    </div>
  );
}
