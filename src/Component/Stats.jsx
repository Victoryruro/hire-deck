import { useState, useEffect, useRef } from 'react'

function useCountUp(target, duration = 1500, startAnimation) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(progress * target)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration, startAnimation])

  return count
}

function StatItem({ value, suffix = '', decimals = 0, label, startAnimation }) {
  const animated = useCountUp(value, 1500, startAnimation)

  const display =
    decimals > 0
      ? animated.toFixed(decimals)
      : Math.floor(animated).toLocaleString()

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-[#4c42dc]">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-gray-500 text-sm md:text-base">{label}</p>
    </div>
  )
}

export default function StatsRow() {
  const [startAnimation, setStartAnimation] = useState(false)
  const sectionRef = useRef(null)

  // Trigger animation only when the row scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="w-full py-12 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-50 dark:bg-gray-900 p-20 pb-30 pt-30" 
    >
      <StatItem className="text-4xl md:text-6xl font-extrabold text-[#4c42dc]" value={2500} suffix="+" label="Active Jobs" startAnimation={startAnimation} />
      <StatItem className="text-4xl md:text-6xl font-extrabold text-[#4c42dc]" value={500} suffix="+" label="Companies" startAnimation={startAnimation} />
      <StatItem className="text-4xl md:text-6xl font-extrabold text-[#4c42dc]" value={50} suffix="K+" label="Successful Hires" startAnimation={startAnimation} />
      <StatItem className="text-4xl md:text-6xl font-extrabold text-[#4c42dc]" value={4.8} decimals={1} label="User Rating" startAnimation={startAnimation} />
    
    </div>
  )
}