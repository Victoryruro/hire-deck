import { useState, useEffect } from 'react'
import { FiUsers, FiBriefcase } from 'react-icons/fi'

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  return count
}

function StatBadge({ icon, count, showPulse = false }) {
  const animatedCount = useCountUp(count)

  return (
    <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white font-semibold px-4 py-2 rounded-full">
      {showPulse ? (
        <span className="relative flex h-2.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          
        </span>
      ) : (
        <span className="text-white/80">{icon}</span>
      )}
      <span>{animatedCount.toLocaleString()} </span>
    </div>
  )
}

export default function StatsBar({ persons = 2500, companies = 340 }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xl">
      <StatBadge icon={<FiUsers size={16} />} count={persons} showPulse={true} />
      <StatBadge icon={<FiBriefcase size={16} />} count={companies}  />
    </div>
  )
}