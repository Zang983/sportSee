import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./activityBarChart.css"

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activityBarChartTooltip">
        <p>{payload[0].payload.kilogram}kg </p>
        <p>{payload[0].payload.calories}Kcal</p>
      </div>
    )
  }
  return null
}
export default function ActivityBarChart({ data }) {
  return (
    <div className="dailyGraph">
      <header>
        <h3 className="dailyGraphTitle">Activité quotidienne</h3>
        <div className="legend">
          <p className="heightLegend">Poids (kg)</p>
          <p className="caloriesLegend">Calories brûlées(kCal)</p>
        </div>
      </header>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barGap={8}
          data={data}
          barSize={7}
          margin={{
            top: 55,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="4 2" vertical={false} />
          <XAxis fontSize="14" dataKey="index" tickLine={false} stroke="#9B9EAC" dy={15} />
          <YAxis domain={[0, "dataMax + 25"]} fontSize="14" orientation={"right"} axisLine={false} tickLine={false} stroke="#9B9EAC" dx={15} />
          <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} cursor={false} />
          <Bar radius={[20, 20, 0, 0]} dataKey="kilogram" fill="#282D30" />
          <Bar radius={[20, 20, 0, 0]} maxY={[0, 100]} dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


ActivityBarChart.propTypes = {
  data : PropTypes.arrayOf(PropTypes.shape({
    index : PropTypes.number,
    kilogram : PropTypes.number,
    calories : PropTypes.number,
  }))
}