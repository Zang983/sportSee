import { ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, RadarChart } from 'recharts'
import './radarGraph.css'
import PropTypes from 'prop-types';

export default function RadarGraph({ data }) {

    return (
        <>
            {data && data.length &&
                <div className="radarGraph">
                    <ResponsiveContainer className="radarChart">
                        <RadarChart outerRadius={90} data={data}>
                            <PolarGrid radialLines={false}  />
                            <PolarAngleAxis dy={3} dataKey="subject" stroke="white" tickLine={false} />
                            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>}
        </>
    )
}

RadarGraph.propTypes = {
data : PropTypes.arrayOf(PropTypes.shape({
    subject : PropTypes.string,
    value : PropTypes.number,
    kind : PropTypes.number,
}))
}