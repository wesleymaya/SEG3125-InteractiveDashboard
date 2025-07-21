import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../i18nTranslations.js';
import { useTranslation } from 'react-i18next';


const rentData = [
      { name: '2019', price: 1270 },
      { name: '2020', price: 1374 },
      { name: '2021', price: 1431 },
      { name: '2022', price: 1446 },
      { name: '2023', price: 1538 },
      { name: '2024', price: 1708 },
    ];

function RentGraph(){
  const {t, i18n} = useTranslation();

  return(
    <div>
      <ResponsiveContainer width="95%" height={350}>
        <LineChart
          data={rentData}
          margin={{ top: 5, right: 30, left: 30, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" 
          label={{
            value: t('year'),
            position: 'insideBottom',
            offset: -20,
          }}/>
          <YAxis 
          label={{
            value: t('price'),
            angle: -90,
            position: 'left',
            offset: 0,
          }}/>
          <Tooltip />
          {/* <Legend/> */}
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
};

export default RentGraph;