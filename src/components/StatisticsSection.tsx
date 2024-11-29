import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "./ui/card";

const data = [
  { year: '2019', lectures: 20 },
  { year: '2020', lectures: 35 },
  { year: '2021', lectures: 45 },
  { year: '2022', lectures: 60 },
  { year: '2023', lectures: 85 },
];

export function StatisticsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">סטטיסטיקות</h2>
        <Card className="p-6">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorLectures" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="lectures" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorLectures)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </section>
  );
}
