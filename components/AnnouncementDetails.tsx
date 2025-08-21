export function AnnouncementDetails() {
  return (
    <section className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
      <div className="flex items-center justify-center mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg animate-pulse-glow">
          <h2 className="text-3xl font-bold text-white">📢 官方公告要点</h2>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-8 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full"></div>
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                ⏰ 重要时间节点
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
                <p className="text-sm"><span className="font-bold text-emerald-700">2025年8月13日 15:00 (UTC+8):</span></p>
                <p className="text-gray-700">停止向以太坊L1提取OKB</p>
              </div>
              <div className="p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
                <p className="text-sm"><span className="font-bold text-emerald-700">2025年8月15日 14:00 (UTC+8):</span></p>
                <p className="text-gray-700">一次性销毁历史回购OKB</p>
              </div>
              <div className="p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
                <p className="text-sm"><span className="font-bold text-emerald-700">2025年8月18日 14:00 (UTC+8):</span></p>
                <p className="text-gray-700">OKB智能合约升级</p>
              </div>
            </div>
          </div>
          
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-100/80 backdrop-blur-sm border border-teal-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-8 bg-gradient-to-b from-teal-400 to-cyan-600 rounded-full"></div>
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                👤 用户操作指引
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <p className="text-gray-700">将以太坊L1的OKB转入OKX交易所</p>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <p className="text-gray-700">使用&quot;提现到X Layer&quot;一键转换功能</p>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <p className="text-gray-700">OKX不再支持OKB提取到以太坊L1</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50/80 to-zinc-100/80 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-8 bg-gradient-to-b from-slate-400 to-zinc-600 rounded-full"></div>
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                ⚙️ 技术变更
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <p className="text-gray-700">一次性销毁历史回购和团队OKB</p>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <p className="text-gray-700">移除所有增发和销毁功能</p>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <p className="text-gray-700">总供应量永久固定为2100万</p>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <p className="text-gray-700">以太坊L1版本逐步淘汰</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-cyan-100/90 to-teal-100/90 border-2 border-cyan-300/50 rounded-2xl backdrop-blur-sm animate-float">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500 rounded-full">
                <span className="text-white text-lg">📊</span>
              </div>
              <div>
                <p className="font-bold text-cyan-800 text-sm">迁移进度</p>
                <p className="text-cyan-700 text-sm">超过90%的以太坊L1上OKB已完成X Layer迁移</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}