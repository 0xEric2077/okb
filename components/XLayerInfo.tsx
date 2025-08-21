export function XLayerInfo() {
  return (
    <section className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg animate-pulse-glow mb-4">
          <h2 className="text-3xl font-bold text-white">🌐 X Layer 生态整合</h2>
        </div>
        <p className="text-slate-300 text-lg">OKX高性能Layer 2网络详细介绍</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm border border-blue-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">X Layer 技术特性</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">高达5000 TPS交易速度</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">极低Gas费用</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">与以太坊完全兼容</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">基于zkEVM技术</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-100/80 backdrop-blur-sm border border-indigo-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                <span className="text-white text-xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">DeFi生态战略布局</h3>
            </div>
            <div className="space-y-6">
              {/* DeFi协议开发 */}
              <div className="p-4 bg-white/70 rounded-xl border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  去中心化金融协议开发
                </h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  X Layer将成为下一代DeFi基础设施的核心，凭借5000 TPS的高性能和近零Gas费用，为开发者提供了构建复杂金融应用的理想环境。OKX正在积极招募顶级DeFi项目迁移或原生部署。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <p className="text-indigo-800 font-medium text-xs mb-1">核心协议类型</p>
                    <p className="text-indigo-700 text-xs">AMM DEX、借贷协议、衍生品交易、收益聚合器</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-800 font-medium text-xs mb-1">技术优势</p>
                    <p className="text-purple-700 text-xs">高频交易支持、MEV保护、跨链互操作性</p>
                  </div>
                </div>
              </div>

              {/* RWA整合 */}
              <div className="p-4 bg-white/70 rounded-xl border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">🏢</span>
                  现实世界资产(RWA)整合
                </h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  X Layer正在构建全球领先的RWA代币化平台，将房地产、商品、债券、股票等传统资产上链。通过与合规机构合作，为全球投资者提供24/7的传统资产交易服务。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-800 font-medium text-xs mb-1">资产类别</p>
                    <p className="text-purple-700 text-xs">房地产、贵金属、国债、企业债券、股票指数</p>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <p className="text-indigo-800 font-medium text-xs mb-1">合规框架</p>
                    <p className="text-indigo-700 text-xs">KYC/AML、监管报告、托管服务、审计透明</p>
                  </div>
                </div>
              </div>

              {/* 支付解决方案 */}
              <div className="p-4 bg-white/70 rounded-xl border-l-4 border-teal-500">
                <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">💳</span>
                  全球支付解决方案
                </h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  基于X Layer的支付基础设施正在重新定义跨境支付。通过集成稳定币、CBDC和传统法币，为企业和个人提供即时、低成本的全球支付服务，支持Web2到Web3的无缝过渡。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-teal-50 rounded-lg">
                    <p className="text-teal-800 font-medium text-xs mb-1">支付场景</p>
                    <p className="text-teal-700 text-xs">跨境汇款、商户支付、薪资发放、供应链金融</p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <p className="text-cyan-800 font-medium text-xs mb-1">技术特性</p>
                    <p className="text-cyan-700 text-xs">秒级确认、多币种支持、智能路由、隐私保护</p>
                  </div>
                </div>
              </div>

              {/* 生态激励 */}
              <div className="p-4 bg-white/70 rounded-xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  生态基金与流动性激励
                </h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  OKX已承诺投入数亿美元用于X Layer生态建设，包括开发者赠款、流动性挖矿、用户奖励和战略投资。通过多层次的激励机制，吸引优质项目和活跃用户，快速建立网络效应。
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <p className="text-emerald-800 font-medium text-xs mb-1">开发者激励</p>
                    <p className="text-emerald-700 text-xs">$50M+ 开发赠款</p>
                  </div>
                  <div className="p-3 bg-teal-50 rounded-lg">
                    <p className="text-teal-800 font-medium text-xs mb-1">流动性挖矿</p>
                    <p className="text-teal-700 text-xs">高APY奖励池</p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <p className="text-cyan-800 font-medium text-xs mb-1">用户奖励</p>
                    <p className="text-cyan-700 text-xs">交易返佣计划</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">迁移建议</h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl text-white">
                <p className="font-bold mb-2">推荐方式：OKX一键转换</p>
                <p className="text-sm text-emerald-100">将MetaMask等钱包中的OKB充值到OKX，使用&quot;提现到X Layer&quot;功能完成一键跨链转换</p>
              </div>
              <div className="p-3 bg-white/60 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>重要：</strong> 未来以太坊链上的OKB支持将终止，请尽快完成迁移
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-100/80 backdrop-blur-sm border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">OKT整合计划</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200">
                <p className="text-gray-700 text-sm mb-2">
                  <strong>OKTChain逐步关停</strong>
                </p>
                <p className="text-gray-600 text-xs">
                  OKT代币将分阶段兑换为OKB，进一步统一OKX生态系统
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-blue-100/90 to-indigo-100/90 border-2 border-blue-200/50 rounded-3xl backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
            <span className="text-white text-2xl">🏗️</span>
          </div>
          <h4 className="text-2xl font-bold text-blue-900">技术架构与性能</h4>
        </div>
        
        {/* 技术栈可视化 */}
        <div className="mb-8">
          <h5 className="text-lg font-bold text-gray-800 mb-4">zkEVM Validium 架构层级</h5>
          <div className="relative bg-white/40 rounded-2xl p-6 h-48">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
              {/* Layer 1 - Ethereum */}
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-bold animate-pulse">
                以太坊 L1 (安全性验证)
              </div>
              {/* Arrow */}
              <div className="text-2xl text-blue-500">↕️</div>
              {/* Layer 2 - X Layer */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-lg text-sm font-bold animate-bounce">
                X Layer zkEVM (执行层)
              </div>
              {/* Arrow */}
              <div className="text-2xl text-green-500">↕️</div>
              {/* Data Availability */}
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg text-sm font-bold">
                链下数据存储 (Validium)
              </div>
            </div>
            
            {/* Performance indicators */}
            <div className="absolute right-4 top-4 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">5,000 TPS</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">近零 Gas</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">ZK 证明</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🔷</span>
              <p className="font-bold text-blue-800">Polygon CDK</p>
            </div>
            <p className="text-blue-700 text-sm">基于最新Polygon链开发工具包</p>
            <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🔗</span>
              <p className="font-bold text-blue-800">以太坊兼容</p>
            </div>
            <p className="text-blue-700 text-sm">100%兼容EVM智能合约</p>
            <div className="mt-2 w-full bg-green-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">⚡</span>
              <p className="font-bold text-blue-800">高性能</p>
            </div>
            <p className="text-blue-700 text-sm">5000 TPS + 极低延迟</p>
            <div className="mt-2 w-full bg-yellow-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
            </div>
          </div>
        </div>

        {/* 性能对比图表 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white/40 rounded-xl">
            <h6 className="font-bold text-gray-800 mb-3">TPS 性能对比</h6>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">以太坊 L1</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-300 rounded-full">
                    <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-xs">15</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Polygon PoS</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-blue-200 rounded-full">
                    <div className="w-6 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-xs">7K</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-bold">X Layer</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-emerald-200 rounded-full">
                    <div className="w-12 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-bold">5K</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/40 rounded-xl">
            <h6 className="font-bold text-gray-800 mb-3">交易成本对比</h6>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">以太坊 L1</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-red-200 rounded-full">
                    <div className="w-full h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-xs">$20+</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Polygon PoS</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-yellow-200 rounded-full">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-xs">$0.01</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-bold">X Layer</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-green-200 rounded-full">
                    <div className="w-1 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-bold">≈$0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}