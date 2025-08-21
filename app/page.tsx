import { Timeline } from '@/components/Timeline'
import { ProcessSteps } from '@/components/ProcessSteps'
import { AnnouncementDetails } from '@/components/AnnouncementDetails'
import { XLayerInfo } from '@/components/XLayerInfo'
import { MigrationFlow } from '@/components/MigrationFlow'
import { TokenomicsImpact } from '@/components/TokenomicsImpact'
import { NewTokenomics } from '@/components/NewTokenomics'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-neutral-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6">
        <header className="text-center mb-20">
          <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-emerald-300/20 shadow-2xl mb-8 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6">
              OKB 合约迁移流程
            </h1>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              了解 OKB 代币合约升级的完整流程，包括技术细节、时间安排和用户操作指南
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <div className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              📈 实时更新
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full text-white text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🔒 官方信息
            </div>
          </div>
        </header>

        <div className="space-y-20">
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <AnnouncementDetails />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <TokenomicsImpact />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <NewTokenomics />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <MigrationFlow />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <XLayerInfo />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <ProcessSteps />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500">
            <Timeline />
          </div>
        </div>

        <footer className="text-center mt-20 pt-8">
          <div className="inline-block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-300/10">
            <p className="text-slate-300 text-sm">
              本页面仅供参考，不构成投资建议
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
