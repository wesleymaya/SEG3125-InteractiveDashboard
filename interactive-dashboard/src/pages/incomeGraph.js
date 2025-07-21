import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../i18nTranslations.js';
import { useTranslation } from 'react-i18next';

const incomeData = [
      { name: '2018', income: 40600 },
      { name: '2019', income: 40300 },
      { name: '2020', income: 41900 },
      { name: '2021', income: 43500 },
      { name: '2022', income: 43400 },
      { name: '2023', income: 44000 },
    ];

function IncomeGraph(){
  const {t, i18n} = useTranslation();
  const currencyTranslator = i18n.language || 'en-CA';

  return(
    <div>
      <ResponsiveContainer width="95%" height={350}>
        <BarChart
          data={incomeData}
          margin={{ top: 5, right: 30, left: 70, bottom: 20 }}
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
            offset: 50,
          }}
          tickFormatter={(value) =>
            value.toLocaleString(currencyTranslator, {
              style: 'currency',
              currency: 'CAD',
              maximumFractionDigits: 0,
            })
          }
          />
          <Tooltip 
          formatter={(value) =>
            value.toLocaleString(currencyTranslator, {
              style: 'currency',
              currency: 'CAD',
              maximumFractionDigits: 0,
            })
          }
          />
          <Bar 
          dataKey='income' 
          fill='green'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};

export default IncomeGraph;