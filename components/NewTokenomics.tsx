export function NewTokenomics() {
  return (
    <section className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg animate-pulse-glow mb-4">
          <h2 className="text-3xl font-bold text-white">⚖️ 新币代币经济学</h2>
        </div>
        <p className="text-slate-300 text-lg">OKB革命性经济模型的全面解析</p>
      </div>

      {/* 核心经济模型对比 */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50/80 to-orange-100/80 backdrop-blur-sm border border-red-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
              <span className="text-white text-xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">传统通胀模型</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 rounded-xl">
              <h4 className="font-bold text-red-800 mb-2">供应机制</h4>
              <ul className="space-y-2 text-red-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>无固定上限，可随时增发</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>中心化控制铸造权限</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>通胀压力持续存在</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/60 rounded-xl">
              <h4 className="font-bold text-red-800 mb-2">价值风险</h4>
              <ul className="space-y-2 text-red-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>稀释风险难以预测</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>长期价值存储能力有限</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
              <span className="text-white text-xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">OKB稀缺模型</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 rounded-xl">
              <h4 className="font-bold text-emerald-800 mb-2">供应机制</h4>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>永久固定2100万总量</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>智能合约移除铸造功能</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>类比特币稀缺属性</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/60 rounded-xl">
              <h4 className="font-bold text-emerald-800 mb-2">价值优势</h4>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>通缩预期明确可预测</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>长期价值存储属性增强</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 供应分布和使用场景 */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm border border-blue-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <span className="text-white text-xl">🏦</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">分布结构</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/60 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-800 font-medium text-sm">流通供应</span>
                <span className="text-blue-600 font-bold text-sm">≈18M</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="p-3 bg-white/60 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-800 font-medium text-sm">生态储备</span>
                <span className="text-blue-600 font-bold text-sm">≈3M</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full animate-pulse" style={{width: '15%'}}></div>
              </div>
            </div>
            <div className="text-xs text-blue-600 mt-3">
              * 已销毁: 65,256,712 OKB
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/80 to-pink-100/80 backdrop-blur-sm border border-purple-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
              <span className="text-white text-xl">⛽</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Gas费机制</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-purple-800 text-sm mb-1">X Layer专用</h4>
              <p className="text-purple-700 text-xs">OKB为X Layer唯一Gas代币</p>
            </div>
            <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-purple-800 text-sm mb-1">极低成本</h4>
              <p className="text-purple-700 text-xs">交易费用接近零，大规模应用友好</p>
            </div>
            <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-purple-800 text-sm mb-1">实际消耗</h4>
              <p className="text-purple-700 text-xs">每笔交易消耗OKB创造真实需求</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 to-yellow-100/80 backdrop-blur-sm border border-amber-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl">
              <span className="text-white text-xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">治理权益</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-amber-800 text-sm mb-1">生态治理</h4>
              <p className="text-amber-700 text-xs">参与X Layer网络重大决策</p>
            </div>
            <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-amber-800 text-sm mb-1">质押奖励</h4>
              <p className="text-amber-700 text-xs">质押OKB获得网络奖励分成</p>
            </div>
            <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-amber-800 text-sm mb-1">优先权益</h4>
              <p className="text-amber-700 text-xs">生态项目空投和优先参与权</p>
            </div>
          </div>
        </div>
      </div>

      {/* 经济循环模型 */}
      <div className="p-8 bg-gradient-to-br from-slate-100/90 to-gray-100/90 border-2 border-slate-200/50 rounded-3xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 mb-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-slate-600 to-gray-700 rounded-2xl">
            <span className="text-white text-2xl">🔄</span>
          </div>
          <h4 className="text-2xl font-bold text-slate-800">经济循环飞轮</h4>
        </div>

        <div className="relative bg-white/40 rounded-2xl p-8 h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* 中心核心 */}
              <div className="absolute inset-1/3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-sm text-center">OKB<br/>生态</span>
              </div>
              
              {/* 外围节点 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-bold animate-bounce">
                  Gas消耗
                </div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="bg-purple-500 text-white px-3 py-1 rounded-lg text-xs font-bold animate-bounce">
                  质押奖励
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <div className="bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-bold animate-bounce">
                  治理参与
                </div>
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold animate-bounce">
                  稀缺性
                </div>
              </div>
              
              {/* 连接线 */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" className="animate-spin" style={{animationDuration: '20s'}} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 价值驱动因素 */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50/80 to-emerald-100/80 backdrop-blur-sm border border-green-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <span className="text-white text-xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">价值增长驱动</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-green-800 mb-2">供给侧</h4>
              <ul className="space-y-1 text-green-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>固定2100万总量，永久稀缺</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Gas消耗创造通缩压力</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>质押锁仓减少流通量</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-green-800 mb-2">需求侧</h4>
              <ul className="space-y-1 text-green-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>X Layer生态扩张增加Gas需求</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>DeFi应用增加OKB使用场景</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>机构和零售投资者配置需求</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50/80 to-red-100/80 backdrop-blur-sm border border-orange-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
              <span className="text-white text-xl">⚠️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">风险因素分析</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-orange-800 mb-2">技术风险</h4>
              <ul className="space-y-1 text-orange-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>X Layer网络技术风险</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>智能合约安全风险</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>跨链桥安全考虑</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200">
              <h4 className="font-bold text-orange-800 mb-2">市场风险</h4>
              <ul className="space-y-1 text-orange-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>加密市场整体波动性</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>竞争对手Layer 2方案</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>监管政策不确定性</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}