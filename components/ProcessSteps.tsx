export function ProcessSteps() {
  const steps = [
    {
      title: "定格账本",
      description: "项目方提前公布明确时间点，像拍照一样记录每个地址的余额，与交易所配合暂停旧币充值提现",
      icon: "📸",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50/80 to-teal-100/80",
      borderColor: "border-emerald-200/50",
      details: [
        "提前公布快照时间点",
        "像拍照记录所有地址余额",
        "暂停旧币充值提现",
        "保持账本照片稳定"
      ]
    },
    {
      title: "制作对账清单",
      description: "根据定格账本列出地址余额清单，公开透明，用户可自行核对数额是否正确",
      icon: "📋",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50/80 to-cyan-100/80",
      borderColor: "border-teal-200/50",
      details: [
        "列出所有地址余额",
        "公开透明任何人可查",
        "特殊地址单独标注",
        "避免误分配给团队地址"
      ]
    },
    {
      title: "发行新版代币",
      description: "发行新版代币，去掉随意增减总量入口，多人共同批准权限，延迟生效防止单点失误",
      icon: "🪙",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50/80 to-blue-100/80",
      borderColor: "border-cyan-200/50",
      details: [
        "相当于发行新版合约",
        "去掉随意增减总量入口",
        "多人共同批准管理",
        "重要改动延迟生效"
      ]
    },
    {
      title: "照顾集中托管应用",
      description: "币在交易所后台自动置换，去中心化流动性池需要手动取出重新注入新币池子",
      icon: "🏦",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50/80 to-indigo-100/80",
      borderColor: "border-blue-200/50",
      details: [
        "交易所后台自动置换",
        "用户无需任何操作",
        "重新开放充值提现",
        "去中心化池子需手动处理"
      ]
    },
    {
      title: "收尾与锁定",
      description: "关闭所有增发权限，公开关键信息供外界核对，设置认领截止时间和未领取处理方式",
      icon: "🔒",
      color: "from-slate-500 to-zinc-600",
      bgColor: "from-slate-50/80 to-zinc-100/80",
      borderColor: "border-slate-200/50",
      details: [
        "关掉所有增发权限",
        "公开地址时间记录信息",
        "设置认领截止日期",
        "说明未领取部分处理"
      ]
    }
  ]

  return (
    <section className="glass rounded-3xl shadow-2xl p-10 animate-slide-up hover-lift">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg animate-pulse-glow mb-4">
          <h2 className="text-3xl font-bold text-white">🔄 迁移流程五步骤</h2>
        </div>
        <p className="text-slate-300 text-lg">完整的代币迁移流程，确保安全可靠</p>
      </div>
      
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 via-cyan-400 via-blue-400 to-slate-400 rounded-full opacity-30"></div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="flex gap-8">
                {/* Step number with 3D effect */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <span className="relative z-10">{index + 1}</span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-md opacity-50 scale-110`}></div>
                </div>
                
                {/* Content card with 3D hover effect */}
                <div className={`flex-1 p-8 rounded-2xl bg-gradient-to-br ${step.bgColor} backdrop-blur-sm border ${step.borderColor} shadow-xl hover:shadow-2xl transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-500`}>
                  {/* Card glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl animate-float">{step.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg group-hover:text-gray-600 transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200 transform hover:scale-105">
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                          <span className="text-gray-700 font-medium">{detail}</span>
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
      
      <div className="mt-12 p-8 bg-gradient-to-r from-emerald-100/90 to-teal-100/90 border-2 border-emerald-200/50 rounded-3xl backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl">
            <span className="text-white text-2xl">👤</span>
          </div>
          <h4 className="text-2xl font-bold text-emerald-900">用户操作要点</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <p className="text-emerald-800 font-semibold mb-2">💰 币在交易所</p>
            <p className="text-emerald-700 text-sm">等待后台置换完成即可，通常不需要任何操作</p>
          </div>
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <p className="text-emerald-800 font-semibold mb-2">🔗 币在个人钱包</p>
            <p className="text-emerald-700 text-sm">自动收到新币或去官方页面认领或兑换</p>
          </div>
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <p className="text-emerald-800 font-semibold mb-2">🔄 迁移完成后</p>
            <p className="text-emerald-700 text-sm">重新给常用应用授权，旧授权不会自动沿用</p>
          </div>
          <div className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <p className="text-emerald-800 font-semibold mb-2">🛡️ 安全提醒</p>
            <p className="text-emerald-700 text-sm">只使用官方公布的地址与链接</p>
          </div>
        </div>
      </div>
    </section>
  )
}