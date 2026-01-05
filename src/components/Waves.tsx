// Wave pattern generator for smooth waves
const generateWavePath = (amplitude: number, frequency: number, offset: number = 0) => {
  const points: string[] = []
  const steps = 100 // More steps for smoother curves
  const width = 200
  const height = 2000
  
  for (let i = 0; i <= steps; i++) {
    const y = (height / steps) * i
    const x = width / 2 + Math.sin((y / frequency) + offset) * amplitude
    if (i === 0) {
      points.push(`M${x},${y}`)
    } else {
      points.push(` L${x},${y}`)
    }
  }
  
  return points.join('')
}

// Generate background path (closed shape for fill)
const generateWaveBgPath = (amplitude: number, frequency: number, offset: number = 0) => {
  const wavePath = generateWavePath(amplitude, frequency, offset)
  return `M0,0 ${wavePath} L0,2000 Z`
}

export const Waves = () => {
  // Using parameters: amplitude (how far waves go), frequency (spacing - higher = more space), offset (phase)
  // Lower frequency = more space between peaks (we want ~450px spacing, so frequency ~4.5)
  const wave1Path = generateWavePath(20, 3, Math.PI / 2)
  const wave1BgPath = generateWaveBgPath(20, 3, Math.PI / 2)
  
  const wave2Path = generateWavePath(20, 3, Math.PI / 2)
  const wave2BgPath = generateWaveBgPath(20, 3, Math.PI / 2)
  
  const wave3Path = generateWavePath(20, 3, Math.PI / 2)
  const wave3BgPath = generateWaveBgPath(20, 3, Math.PI / 2)

  return (
    <div className="waves-container">
      <div className="waves-side waves-left">
        <svg className="wave wave-1" viewBox="0 0 200 2000" preserveAspectRatio="none">
          <path d={wave1BgPath} className="wave-bg" fill="currentColor"/>
          <path d={wave1Path} 
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="wave wave-2" viewBox="0 0 200 2000" preserveAspectRatio="none">
          <path d={wave2BgPath} className="wave-bg" fill="currentColor"/>
          <path d={wave2Path} 
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="wave wave-3" viewBox="0 0 200 2000" preserveAspectRatio="none">
          <path d={wave3BgPath} className="wave-bg" fill="currentColor"/>
          <path d={wave3Path} 
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="waves-side waves-right">
        <svg className="wave wave-1" viewBox="0 0 200 2000" preserveAspectRatio="none">
          <path d={wave1BgPath} className="wave-bg" fill="currentColor"/>
          <path d={wave1Path} 
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="wave wave-2" viewBox="0 0 200 2000" preserveAspectRatio="none">
          <path d={wave2BgPath} className="wave-bg" fill="currentColor"/>
          <path d={wave2Path} 
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="wave wave-3" viewBox="0 0 200 2000" preserveAspectRatio="none">
          <path d={wave3BgPath} className="wave-bg" fill="currentColor"/>
          <path d={wave3Path} 
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

