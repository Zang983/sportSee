import './piechart.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

export default function PieChartUser({ data }) {
    const radius = 88
    const centerColor = "#FFF"
    const COLORS = ['#FF0000', '#FBFBFB'];
    return (
        <div className="pieChart">
            {data && <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart >
                    <Pie //innerRadius is here to make the border of this pie.
                        isAnimationActive={false}
                        startAngle={180}
                        endAngle={-180}
                        data={data}
                        innerRadius={radius}
                        stroke="none"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell cornerRadius={100} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Pie //this pie is here to make center of first pie fill white is outerRadius === innerRadius of first pie
                        data={data}
                        outerRadius={radius}
                        fill={centerColor}
                        dataKey="value"
                        stroke={centerColor}
                    >
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            }
            <h3 className="pieChartTitle">Score</h3>
            <p className="targetPercentBlock">
            <strong>{data && data[0].value}% </strong> de votre objectif </p>

        </div>
    )
}

PieChartUser.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        name : PropTypes.string,
        value : PropTypes.number,
    }))
}