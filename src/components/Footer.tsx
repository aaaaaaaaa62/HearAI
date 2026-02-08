import { Heart, Ear } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-yellow-300 to-pink-300 p-2 rounded-lg">
                <Ear className="w-5 h-5 text-slate-700" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                HearAI
              </span>
            </div>
            <p className="text-slate-400">
              Empowering Indigenous communities with accessible, AI-powered hearing healthcare.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400 text-sm">
              Breaking barriers to hearing healthcare through innovative, offline-first technology for rural and remote communities.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 HearAI. Dedicated to improving healthcare accessibility for Indigenous Australians.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Made with</span>
              <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
              <span className="text-slate-400">for communities in need</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
