import React from 'react';
import { 
  Zap, 
  Search, 
  LayoutDashboard, 
  Radio, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Calendar, 
  Download, 
  TrendingUp, 
  Wallet,
  FileText,
  CheckCircle,
  MessageSquare,
  Grip
} from 'lucide-react';
import ProductPhaseTile from './components/ProductPhaseTile';

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-white">
      {/* TopNavBar Component */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-3 bg-background-light dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">EventPulse Enterprise</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Dashboard</a>
            <a className="text-[#9ca6ba] text-sm font-medium leading-normal hover:text-white transition-colors" href="#">Events</a>
            <a className="text-[#9ca6ba] text-sm font-medium leading-normal hover:text-white transition-colors" href="#">Analytics</a>
            <a className="text-[#9ca6ba] text-sm font-medium leading-normal hover:text-white transition-colors" href="#">Campaigns</a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white/5 border border-white/10">
              <div className="text-[#9ca6ba] flex items-center justify-center pl-4 rounded-l-lg">
                <Search className="w-5 h-5" />
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden border-none bg-transparent focus:outline-0 focus:ring-0 text-white placeholder:text-[#9ca6ba] text-sm font-normal px-4" 
                placeholder="Search analytics..." 
                defaultValue="" 
              />
            </div>
          </label>
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal transition-all hover:brightness-110">
            <span className="truncate">Create Event</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-white/20" 
            style={{ backgroundImage: 'url("https://picsum.photos/200/200?random=99")' }}
          ></div>
        </div>
      </header>

      <div className="flex flex-1 flex-row">
        {/* SideNavBar Component */}
        <aside className="hidden lg:flex w-64 flex-col justify-between border-r border-white/10 bg-background-dark p-6 sticky top-[65px] h-[calc(100vh-65px)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h1 className="text-white text-sm font-semibold uppercase tracking-wider opacity-50">Marketing Suite</h1>
              <p className="text-primary text-xs font-bold leading-normal">Enterprise Plan</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                <LayoutDashboard className="w-5 h-5" />
                <p className="text-sm font-medium">Overview</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#9ca6ba] hover:bg-white/5 hover:text-white transition-all cursor-pointer">
                <Radio className="w-5 h-5" />
                <p className="text-sm font-medium">Live Events</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#9ca6ba] hover:bg-white/5 hover:text-white transition-all cursor-pointer">
                <Users className="w-5 h-5" />
                <p className="text-sm font-medium">Attendee Tracking</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#9ca6ba] hover:bg-white/5 hover:text-white transition-all cursor-pointer">
                <CreditCard className="w-5 h-5" />
                <p className="text-sm font-medium">Revenue Attribution</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#9ca6ba] hover:bg-white/5 hover:text-white transition-all cursor-pointer">
                <BarChart3 className="w-5 h-5" />
                <p className="text-sm font-medium">Reports</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
            <Settings className="text-[#9ca6ba] w-5 h-5" />
            <p className="text-[#9ca6ba] text-sm font-medium">Workspace Settings</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center p-8 bg-background-dark overflow-y-auto">
          <div className="w-full max-w-[1200px] flex flex-col gap-10">
            {/* PageHeading Component */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Event Impact Dashboard</p>
                <p className="text-[#9ca6ba] text-lg font-normal max-w-2xl leading-relaxed">Real-time visualization of event marketing ROI and attendee engagement for global enterprise initiatives.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
                  <Calendar className="w-4 h-4" />
                  Last 30 Days
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Hero Section / Visualization */}
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
              {/* REPLACED ORIGINAL HTML TILE WITH REACT COMPONENT */}
              <ProductPhaseTile />

              {/* Right Column: Stats & Timeline */}
              <div className="flex flex-col gap-6">
                {/* Stats Component */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-3 rounded-xl p-8 bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                    <div className="flex justify-between items-start">
                      <p className="text-[#9ca6ba] text-base font-medium">Pipeline Lift</p>
                      <TrendingUp className="text-primary group-hover:scale-110 transition-transform w-6 h-6" />
                    </div>
                    <p className="text-white tracking-tighter text-5xl font-black leading-tight">+38%</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0bda5e] text-sm font-bold bg-[#0bda5e]/10 px-2 py-0.5 rounded">+5.2%</span>
                      <span className="text-[#9ca6ba] text-xs">Since last quarter</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 rounded-xl p-8 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all group">
                    <div className="flex justify-between items-start">
                      <p className="text-[#9ca6ba] text-base font-medium">Influenced Revenue</p>
                      <Wallet className="text-cyan-400 group-hover:scale-110 transition-transform w-6 h-6" />
                    </div>
                    <p className="text-white tracking-tighter text-5xl font-black leading-tight">$1.2M</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0bda5e] text-sm font-bold bg-[#0bda5e]/10 px-2 py-0.5 rounded">+12%</span>
                      <span className="text-[#9ca6ba] text-xs">Exceeded goal</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Component (Horizontal modification) */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-2">
                    <BarChart3 className="text-primary w-6 h-6" />
                    Conversion Funnel
                  </h3>
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-[40px_1fr] gap-x-4">
                      {/* Step 1 */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="w-[2px] bg-white/10 h-10"></div>
                      </div>
                      <div className="flex flex-1 flex-col pb-6">
                        <div className="flex justify-between items-start">
                          <p className="text-white text-base font-bold">Registration Phase</p>
                          <span className="text-xs font-mono text-white/40">STEP 01</span>
                        </div>
                        <p className="text-[#9ca6ba] text-sm mt-1">Early bird phase closed with 4.2k confirmed tickets.</p>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="w-[2px] bg-white/10 h-10"></div>
                      </div>
                      <div className="flex flex-1 flex-col pb-6">
                        <div className="flex justify-between items-start">
                          <p className="text-white text-base font-bold">Live Attendance</p>
                          <span className="text-xs font-mono text-white/40">STEP 02</span>
                        </div>
                        <p className="text-[#9ca6ba] text-sm mt-1">Real-time check-ins monitored via mobile app (82% rate).</p>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="size-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div className="w-[2px] bg-white/10 h-10"></div>
                      </div>
                      <div className="flex flex-1 flex-col pb-6">
                        <div className="flex justify-between items-start">
                          <p className="text-white text-base font-bold">Networking & 1:1s</p>
                          <span className="text-xs font-mono text-white/40">STEP 03</span>
                        </div>
                        <p className="text-[#9ca6ba] text-sm mt-1">High engagement recorded across 12,000+ member meetings.</p>
                      </div>

                      {/* Step 4 */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between items-start">
                          <p className="text-white text-base font-bold">Revenue Attribution</p>
                          <span className="text-xs font-mono text-white/40">STEP 04</span>
                        </div>
                        <p className="text-[#9ca6ba] text-sm mt-1">Final pipeline impact calculated at $1.2M influenced revenue.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pb-10">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-[#9ca6ba] text-xs font-bold uppercase tracking-widest mb-2">Cost Per Lead</p>
                <p className="text-2xl font-bold">$124.00</p>
                <p className="text-red-400 text-xs mt-1">-2.1% efficiency</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-[#9ca6ba] text-xs font-bold uppercase tracking-widest mb-2">Social Reach</p>
                <p className="text-2xl font-bold">450k</p>
                <p className="text-[#0bda5e] text-xs mt-1">+114% mentions</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-[#9ca6ba] text-xs font-bold uppercase tracking-widest mb-2">Engagement Rate</p>
                <p className="text-2xl font-bold">64.2%</p>
                <p className="text-[#0bda5e] text-xs mt-1">+8% interaction</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-[#9ca6ba] text-xs font-bold uppercase tracking-widest mb-2">Sponsor ROI</p>
                <p className="text-2xl font-bold">4.2x</p>
                <p className="text-primary text-xs mt-1">On target</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}