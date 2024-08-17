import './Loader.css';

function Loader() {
  return (
    <div className='loader'>
      <svg className='svg' x="0px" y="0px" width="170.49px" height="177px" viewBox="0 0 170.49 177">
        <polygon className="hex" points="16.623,87 0,58.5 16.623,30 49.868,30 66.49,58.5 49.868,87" />
        <polygon className="hex" points="68.623,57 52,28.5 68.623,0 101.868,0 118.49,28.5 101.868,57" />
        <polygon className="hex" points="120.623,87 104,58.5 120.623,30 153.868,30 170.49,58.5 153.868,87" />
        <polygon className="hex" points="120.623,147 104,118.5 120.623,90 153.868,90 170.49,118.5 153.868,147" />
        <polygon className="hex" points="68.623,177 52,148.5 68.623,120 101.868,120 118.49,148.5 101.868,177" />
        <polygon className="hex" points="16.623,147 0,118.5 16.623,90 49.868,90 66.49,118.5 49.868,147" />
        <polygon className="hex" points="68.623,117 52,88.5 68.623,60 101.868,60 118.49,88.5 101.868,117" />

        <defs>
          <linearGradient id="grad">
            <stop offset="0" stop-color="#ddb972" />
            <stop offset="1" stop-color="#dfbe6a" />
          </linearGradient>

          <linearGradient id="grad2">
            <stop offset="0" stop-color="#dfbe6a" />
            <stop offset="1" stop-color="#b18f4a" />
          </linearGradient>

          <linearGradient id="grad3">
            <stop offset="0" stop-color="#b18f4a" />
            <stop offset="1" stop-color="#947136" />
          </linearGradient>

          <linearGradient id="grad4">
            <stop offset="0" stop-color="#947136" />
            <stop offset="1" stop-color="#947136" />
          </linearGradient>

          <linearGradient id="grad5">
            <stop offset="0" stop-color="#947136" />
            <stop offset="1" stop-color="#b18f4a" />
          </linearGradient>

          <linearGradient id="grad6">
            <stop offset="0" stop-color="#b18f4a" />
            <stop offset="1" stop-color="#dfbe6a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Loader
