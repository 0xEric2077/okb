export function MigrationFlow() {
  return (
    <section className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg animate-pulse-glow mb-4">
          <h2 className="text-3xl font-bold text-white">🔄 代币迁移流程图</h2>
        </div>
        <p className="text-slate-300 text-lg">从老合约到新合约的完整迁移路径</p>
      </div>

      <div className="relative bg-gradient-to-br from-slate-900/80 to-zinc-900/80 rounded-2xl p-8 border border-white/10">
        {/* Main flow container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Step 1: Old Contract */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl animate-pulse">
                <span className="text-3xl mb-2">🏠</span>
                <span className="text-sm font-bold text-center">以太坊L1<br/>老合约</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">❌</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-100/80 rounded-lg border border-red-200">
              <p className="text-red-800 text-sm font-medium text-center">逐步淘汰</p>
              <p className="text-red-700 text-xs text-center">不再支持提现</p>
            </div>
          </div>

          {/* Flow arrows and methods */}
          <div className="flex-1 max-w-2xl">
            
            {/* Method 1: OKX Exchange */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-400">OKX一键转换（推荐）</h3>
                  </div>
                  
                  <div className="relative">
                    {/* Flow path */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-red-500/20 rounded-full text-red-300 text-xs border border-red-500/30">
                        个人钱包
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-red-400 to-emerald-400"></div>
                      <div className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs border border-blue-500/30">
                        OKX充值
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
                      <div className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-xs border border-emerald-500/30">
                        X Layer提现
                      </div>
                    </div>
                    
                    {/* Action description */}
                    <div className="p-3 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
                      <p className="text-emerald-300 text-sm">
                        💡 将MetaMask等钱包中的OKB充值到OKX → 使用&quot;提现到X Layer&quot;功能
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2: Direct Distribution */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-bold text-cyan-400">官方直接发放</h3>
                  </div>
                  
                  <div className="relative">
                    {/* Flow path */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-red-500/20 rounded-full text-red-300 text-xs border border-red-500/30">
                        个人钱包
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400"></div>
                      <div className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs border border-purple-500/30">
                        对账清单
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                      <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-xs border border-cyan-500/30">
                        自动到账
                      </div>
                    </div>
                    
                    {/* Action description */}
                    <div className="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/30">
                      <p className="text-cyan-300 text-sm">
                        ⚡ 团队根据快照清单，直接将新币发送到原地址 - 用户无需操作
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Step 3: New Contract */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl animate-pulse-glow">
                <span className="text-3xl mb-2">🏛️</span>
                <span className="text-sm font-bold text-center">X Layer<br/>新合约</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-100/80 rounded-lg border border-emerald-200">
              <p className="text-emerald-800 text-sm font-medium text-center">固定2100万</p>
              <p className="text-emerald-700 text-xs text-center">无增发销毁</p>
            </div>
          </div>

        </div>

        {/* Key features */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-400 text-lg">🔒</span>
                <h4 className="text-emerald-300 font-bold text-sm">安全保障</h4>
              </div>
              <p className="text-emerald-200 text-xs">1:1等额兑换，余额完整迁移</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400 text-lg">⚡</span>
                <h4 className="text-blue-300 font-bold text-sm">高性能</h4>
              </div>
              <p className="text-blue-200 text-xs">5000 TPS，极低Gas费用</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-400 text-lg">🛡️</span>
                <h4 className="text-purple-300 font-bold text-sm">去中心化</h4>
              </div>
              <p className="text-purple-200 text-xs">多人共管，延迟生效机制</p>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-6 p-4 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl border border-teal-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-teal-300 font-bold text-sm">迁移进度</span>
            <span className="text-teal-200 text-sm">90%+</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
          <p className="text-teal-200 text-xs mt-2">超过90%的以太坊L1上OKB已完成迁移</p>
        </div>
      </div>
    </section>
  )
}