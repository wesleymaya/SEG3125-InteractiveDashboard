import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../i18nTranslations.js';
import { useTranslation } from 'react-i18next';

const incomeData = [
      { name: '2018', price: 40600 },
      { name: '2019', price: 40300 },
      { name: '2020', price: 41900 },
      { name: '2021', price: 43500 },
      { name: '2022', price: 43400 },
      { name: '2023', price: 44000 },
    ];

// **Add translation function
function IncomeGraph(){
  const {t, i18n} = useTranslation();

  return(
    <div>
      <ResponsiveContainer width="95%" height={350}>
        <BarChart
          data={incomeData}
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
            value: t('income'),
            angle: -90,
            position: 'left',
            offset: 10,
          }}/>
          <Tooltip />
          <Bar dataKey='price' fill='green'/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};

export default IncomeGraph;