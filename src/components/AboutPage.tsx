import { GraduationCap, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Academic Background',
      description: 'Currently pursuing a Masters degree in Audiology, combining rigorous academic training with a passion for improving hearing healthcare accessibility.',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      icon: Sparkles,
      title: 'Research Focus',
      description: 'Deeply interested in the intersection of artificial intelligence and healthcare, exploring innovative ways to leverage technology for better patient outcomes and accessible care delivery.',
      color: 'from-pink-400 to-rose-400',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Committed to addressing healthcare disparities in rural and remote Indigenous communities through culturally appropriate, technology-driven solutions.',
      color: 'from-orange-400 to-amber-400',
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
            Meet Aaliya Ismail
          </h1>
          <p className="text-xl text-slate-200">
            The innovator behind HearAI, bridging technology and healthcare for community impact
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-rose-300 rounded-3xl blur-3xl opacity-30"></div>
              <img
                src="/me.jpg"
                alt="Aaliya Ismail"
                className="relative w-full max-w-sm mx-auto object-cover rounded-3xl shadow-2xl"
              />
            </div>

            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                Masters in Audiology
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Aaliya Ismail
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                An innovative audiologist and technologist dedicated to democratizing access to hearing healthcare. Aaliya combines rigorous academic training in audiology with a deep passion for leveraging artificial intelligence to address healthcare disparities in underserved communities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Through HearAI, Aaliya is working to ensure that geographic location is never a barrier to accessing quality healthcare. Her work represents a commitment to using technology as a force for social good and health equity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-40 transition-opacity rounded-2xl"></div>

                <div className={`bg-gradient-to-r ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">
                  The Vision Behind HearAI
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  HearAI was born from a recognition of the significant barriers Indigenous Australians face in accessing hearing healthcare. With many communities located hundreds of kilometers from the nearest audiologist, early detection and intervention for hearing loss becomes a challenge.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  By combining expertise in audiology with the power of artificial intelligence, HearAI aims to democratize access to hearing screening, ensuring that geographic location is no longer a barrier to quality healthcare.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This project represents a commitment to using technology as a force for social good and health equity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-12 md:p-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-4">🎯</div>
                  <p className="text-2xl font-bold text-slate-800">
                    Equitable access to hearing care for all
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl p-12 text-slate-800 text-center">
            <h3 className="text-3xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Aaliya is open to research collaborations, partnerships, and discussions about advancing healthcare accessibility
            </p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
