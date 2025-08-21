export function Timeline() {
  const timelineEvents = [
    {
      date: "2025年8月13日",
      time: "15:00 (UTC+8)",
      title: "停止L1提取",
      description: "OKX停止向以太坊L1提取OKB",
      status: "critical",
      icon: "🛑",
      color: "from-rose-500 to-red-600",
      bgColor: "from-rose-50/80 to-red-100/80",
      borderColor: "border-rose-200/50"
    },
    {
      date: "2025年8月15日",
      time: "14:00 (UTC+8)",
      title: "历史回购销毁",
      description: "一次性销毁65,256,712.097个历史回购OKB",
      status: "important",
      icon: "🔥",
      color: "from-orange-500 to-amber-600",
      bgColor: "from-orange-50/80 to-amber-100/80",
      borderColor: "border-orange-200/50"
    },
    {
      date: "2025年8月18日",
      time: "14:00 (UTC+8)",
      title: "智能合约升级",
      description: "OKB智能合约正式升级，移除铸造销毁功能",
      status: "milestone",
      icon: "⚡",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50/80 to-emerald-100/80",
      borderColor: "border-green-200/50"
    }
  ]

  const migrationMethods = [
    {
      title: "OKX一键转换（推荐）",
      description: "将以太坊钱包中的OKB充值到OKX账户，使用官方提供的&quot;Withdraw to X Layer&quot;功能",
      userAction: "充值到OKX后使用提现至X Layer功能",
      pros: ["最便捷方式", "一键跨链兑换", "安全快速", "官方推荐"],
      icon: "🚀",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50/80 to-teal-100/80"
    },
    {
      title: "官方直接发放",
      description: "团队根据对账清单，分批将等额新币发送到原地址",
      userAction: "无需操作，等待接收",
      pros: ["用户零操作", "自动到账", "风险最低"],
      icon: "📤",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50/80 to-blue-100/80"
    }
  ]

  return (
    <section className="space-y-16">
      {/* Timeline Section */}
      <div className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg animate-pulse-glow mb-4">
            <h2 className="text-3xl font-bold text-white">⏰ 关键时间线</h2>
          </div>
          <p className="text-slate-300 text-lg">重要节点时间安排</p>
        </div>
        
        <div className="relative">
          {/* Enhanced timeline line with glow effect */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 via-amber-400 to-emerald-400 rounded-full shadow-lg"></div>
          <div className="absolute left-9 top-0 bottom-0 w-3 bg-gradient-to-b from-rose-400/20 via-amber-400/20 to-emerald-400/20 rounded-full blur-sm"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start gap-8">
                  {/* Enhanced icon with 3D effect and pulsing animation */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse-glow`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                      <span className="relative z-10 animate-float">{event.icon}</span>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl blur-lg opacity-40 scale-125`}></div>
                  </div>
                  
                  {/* Enhanced content card */}
                  <div className={`flex-1 p-8 rounded-2xl bg-gradient-to-br ${event.bgColor} backdrop-blur-sm border ${event.borderColor} shadow-xl hover:shadow-2xl transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-500`}>
                    {/* Card glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <div className={`px-4 py-2 bg-gradient-to-r ${event.color} rounded-full text-white font-medium shadow-lg`}>
                            {event.date}
                          </div>
                          <div className="px-4 py-2 bg-white/60 rounded-full text-gray-700 font-medium">
                            {event.time}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration Methods Section */}
      <div className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-lg animate-pulse-glow mb-4">
            <h2 className="text-3xl font-bold text-white">🔄 代币迁移方式</h2>
          </div>
          <p className="text-slate-300 text-lg">多种方式满足不同用户需求</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {migrationMethods.map((method, index) => (
            <div key={index} className="group relative">
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${method.bgColor} backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500`}>
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${method.color} rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <span className="text-white text-2xl">{method.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {method.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {method.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className={`p-4 bg-gradient-to-r ${method.color} rounded-xl shadow-lg`}>
                      <p className="text-white font-bold mb-2">用户操作</p>
                      <p className="text-white/90 text-sm">{method.userAction}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-900 mb-3">优势特点</p>
                    <div className="space-y-2">
                      {method.pros.map((pro, proIndex) => (
                        <div key={proIndex} className="flex items-center gap-3 p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-200 transform hover:scale-105">
                          <div className={`w-2 h-2 bg-gradient-to-r ${method.color} rounded-full animate-pulse`}></div>
                          <span className="text-gray-700 font-medium text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}