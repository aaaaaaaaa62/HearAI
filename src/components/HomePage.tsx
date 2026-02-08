import { Heart, MapPin, Smartphone, Sparkles, WifiOff, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Accessible',
      description: 'Easy-to-use mobile app designed for remote communities',
      gradient: 'from-cyan-100 to-blue-100',
      iconBg: 'from-cyan-200 to-blue-200',
      iconColor: 'text-cyan-700',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Advanced AI technology for accurate hearing assessment',
      gradient: 'from-pink-100 to-rose-100',
      iconBg: 'from-pink-200 to-rose-200',
      iconColor: 'text-pink-700',
    },
    {
      icon: WifiOff,
      title: 'Works Offline',
      description: 'Full functionality without internet connection for remote areas',
      gradient: 'from-emerald-100 to-teal-100',
      iconBg: 'from-emerald-200 to-teal-200',
      iconColor: 'text-emerald-700',
    },
    {
      icon: MapPin,
      title: 'Rural Focused',
      description: 'Specifically designed for rural and remote Indigenous communities',
      gradient: 'from-yellow-100 to-orange-100',
      iconBg: 'from-yellow-200 to-orange-200',
      iconColor: 'text-yellow-700',
    },
    {
      icon: Heart,
      title: 'Community Care',
      description: 'Culturally appropriate healthcare accessible to all',
      gradient: 'from-orange-100 to-amber-100',
      iconBg: 'from-orange-200 to-amber-200',
      iconColor: 'text-orange-700',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden flex items-center py-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-orange-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-300 bg-opacity-40 border border-yellow-300 border-opacity-50 rounded-full">
              <span className="text-yellow-100 text-sm font-semibold">Transforming Healthcare Access</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Remote Communities
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              AI-powered hearing screening designed for Indigenous Australians in rural areas, works offline when needed most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-300 to-pink-300 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-300/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                Explore HearAI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Why HearAI
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Breaking barriers to hearing healthcare with innovative technology designed specifically for remote Indigenous communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-40 transition-opacity rounded-2xl"></div>

                <div className={`bg-gradient-to-br ${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-slate-700 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Access to hearing healthcare is a fundamental right, yet Indigenous communities in rural and remote Australia face significant barriers. Long distances to healthcare facilities, limited resources, and cultural considerations often prevent timely hearing assessments.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  HearAI bridges this gap by delivering cutting-edge AI technology directly to communities, enabling early detection and intervention for hearing loss. Our culturally sensitive approach ensures that everyone, regardless of location, can access quality hearing healthcare.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100 p-12 md:p-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                    Healthcare for all, regardless of location
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-emerald-400">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <WifiOff className="w-6 h-6 text-emerald-600" />
                Works Offline
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Understanding the challenges of rural connectivity, HearAI has been built to function completely offline. Users can perform comprehensive hearing screenings without an active internet connection.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Data is securely stored locally. When internet becomes available, the app seamlessly synchronizes assessment results, ensuring no critical health information is lost.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-yellow-400">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-600" />
                Culturally Sensitive
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Designed with input from Indigenous communities and healthcare professionals, HearAI respects cultural values and communication preferences.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This offline-first approach guarantees that hearing screenings can happen whenever and wherever they're needed, regardless of network availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 text-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in bringing accessible hearing healthcare to remote Indigenous communities
          </p>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
