import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, Rectangle } from 'recharts'
import './session.css'
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">{payload[0].payload.min} min</div>
    )
  }
  return null
}

const CustomCursor = ({ points }) => {
  return (
    <Rectangle x={points[1].x} width={400} height={450} opacity="0.1" />
  )
}

export default function Session({ data }) {
  return (
    <div className="sessionChart">
      <h3 className="sessionTitle">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          data={data}>
          <defs>
            <linearGradient id="gradientLine" x1="0" x2="0.7" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFF", opacity: '50%' }} />
          <YAxis dataKey="min" hide={true} domain={["dataMin -15", "dataMax + 50"]} />
          <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line type="natural" dataKey="min" strokeWidth="2" stroke="url(#gradientLine)" dot={false} activeDot={{ stroke: 'rgba(255,255,255,0.5)', strokeWidth: 8, r: 4 }} />
        </LineChart>
      </ResponsiveContainer></div>
  )
}

Session.propTypes = {
  data : PropTypes.arrayOf(PropTypes.shape({
    day:PropTypes.string,
    min : PropTypes.number
  }))
}