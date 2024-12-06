import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const valuePoints = [
  {
    icon: Lightbulb,
    title: "חדשנות וידע מעשי",
    description: "שילוב ייחודי של תיאוריה ופרקטיקה בתחום ה-AI, עם דוגמאות מהשטח והתנסות מעשית",
    gradient: "from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600"
  },
  {
    icon: Target,
    title: "התאמה מושלמת לקהל היעד",
    description: "תוכן מותאם אישית לצרכי הארגון שלך, מסטודנטים ועד מנהלים בכירים",
    gradient: "from-purple-50 to-purple-100/50",
    iconColor: "text-purple-600"
  },
  {
    icon: Users,
    title: "אינטראקציה והעצמה",
    description: "הרצאות אינטראקטיביות המעודדות חשיבה יצירתית ומעוררות השראה",
    gradient: "from-pink-50 to-pink-100/50",
    iconColor: "text-pink-600"
  },
  {
    icon: TrendingUp,
    title: "ערך עסקי מוכח",
    description: "כלים פרקטיים ותובנות שניתן ליישם מיד לשיפור התהליכים והתוצאות העסקיות",
    gradient: "from-indigo-50 to-indigo-100/50",
    iconColor: "text-indigo-600"
  }
];

const ValuePropositionSection: FC = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center px-2"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            למה לבחור בהרצאה של רונן?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-bold text-sm sm:text-base px-4 leading-relaxed"
        >
          הרצאה שתשאיר חותם ותעניק לקהל ולארגון{" "}
          ידע, חזון ותובנות להצלחה{" "}
          בעידן הבינה המלאכותית
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valuePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn(
                "h-full p-4 sm:p-6",
                `bg-gradient-to-br ${point.gradient}`,
                "border-0 shadow-md hover:shadow-xl transition-all duration-300",
                "transform hover:-translate-y-1 active:translate-y-0",
                "touch-pan-y"
              )}>
                <div className="flex items-center sm:block mb-3 sm:mb-4">
                  <point.icon className={cn(
                    "w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-0", 
                    point.iconColor,
                    "flex-shrink-0"
                  )} />
                  <h3 className="font-bold text-base sm:text-lg text-gray-800">{point.title}</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 