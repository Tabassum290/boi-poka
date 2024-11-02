import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Chart = () => {
    return (
        <div>
            <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" tick={renderCustomAxisTick} />
                <Bar></Bar>
            </BarChart>
        </div>
    );
};

export default Chart;