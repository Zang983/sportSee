/*
This component was this first version for radial chart (to display percent of target accomplishment)
In V1 of SportSee this component isn't use, And we used piechart to make this.
*/
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import Title from '../../title/title'
import './radialChart.css'
import PropTypes from 'prop-types';


export default function RadialChart({ score }) {
  return (
    <div className="radialChart">
      <h3 className="radialChartTitle">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart  margin={{ top: 40 }} innerRadius="100%" startAngle={205} endAngle={-155} barSize={10} data={score} >
        <Title>Testule</Title>
          <PolarAngleAxis domain={[0, 1]} type="number"  tick={false} />
          <RadialBar
            background={{ fill: "green" }}
            fill="#FF0101"
            cornerRadius={100}
            dataKey="score"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

RadialChart.propTypes = {
  data : PropTypes.arrayOf(PropTypes.shape({
    name : PropTypes.string,
    value : PropTypes.number
  }))
}