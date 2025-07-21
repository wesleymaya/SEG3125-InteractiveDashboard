import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const incomeData = [
      { name: '2018', price: 40600 },
      { name: '2019', price: 40300 },
      { name: '2020', price: 41900 },
      { name: '2021', price: 43500 },
      { name: '2022', price: 43400 },
      { name: '2023', price: 44000 },
    ];

// **Add translation function
function rentGraph(){
  return(
    <div>
      <ResponsiveContainer width="95%" height={350}>
        <BarChart
          data={incomeData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Bar dataKey='price' fill='green'/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};

export default rentGraph;