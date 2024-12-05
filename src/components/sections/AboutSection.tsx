import { FC, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { images } from '@/components/ImageGallerySection';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const AboutSection: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const aboutItems = [
    {
      title: "ניסיון בתעשייה",
      text: <>רונן הוא <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">מומחה מוביל בתחום הבינה המלאכותית</span>, עם ניסיון של למעלה מ-20 שנה בתעשיית ההיי-טק. כיום הוא <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">מוביל את תחום חווית הלקוח במיקרוסופט במחלקת BizApps</span>, ולאורך הקריירה שלו עבד בחברות מובילות כמו אינטל, אמדוקס ואורקל.</>,
      gradient: "from-blue-100 to-blue-50",
      border: "border-blue-100"
    },
    {
      title: "התמחות בהנגשת AI",
      text: <>רונן מתמחה בהנגשת נושאי בינה מלאכותית לקהלים מגוונים - <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">החל מתלמידים וסטודנטים ועד אנשי מקצוע</span>. בהרצאותיו, הוא מתמקד בהשפעות המעשיות, העסקיות והחברתיות של טכנולוגיות מתקדמות.</>,
      gradient: "from-purple-100 to-purple-50",
      border: "border-purple-100"
    },
    {
      title: "רקע ייחודי",
      text: <>לרונן <span className="font-semibold text-purple-700 px-2 py-1 bg-purple-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">רקע ייחודי</span> - את דרכו המקצועית החל דווקא בתחום הבידור, כשהופיע במחזות זמר בתל אביב, שיחק בטלנובלה ואף עבד בצוות הבידור באילת. לאחר סיום לימודיו בטכניון, עבר לתחום ההיי-טק.</>,
      gradient: "from-indigo-100 to-indigo-50",
      border: "border-indigo-100"
    },
    {
      title: "הישגים ועיסוק מרכזי",
      text: <>ב-2022 זכה במקום הראשון <span className="font-semibold text-green-700 px-2 py-1 bg-green-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">בתחרות Technical Story Telling באורקל בשבדיה</span>, שם שילב באופן יצירתי את ריקוד הסלסה כמטאפורה למוצרי שיווק טכנולוגיים. כיום הוא מרצה בנושאים כמו <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">שיווק דיגיטלי מתקדם ו-CRM Sales בעידן הבינה המלאכותית</span> עם Copilot.</>,
      gradient: "from-green-100 to-green-50",
      border: "border-green-100"
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={cn(
              "h-full p-6 sm:p-8",
              "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm",
              "border-0 shadow-xl shadow-blue-100/20",
              "hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-300"
            )}>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src={images.ronenCNN}
                alt="רונן ארנרייך"
                className="w-full h-auto rounded-lg mb-4 hover:scale-[1.02] transition-transform duration-300"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  רונן ארנרייך
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">פרטי התקשרות</h3>
                  <motion.div 
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm sm:text-base text-gray-700">ronener@gmail.com</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm sm:text-base text-gray-700">זמין להרצאות ברחבי הארץ</span>
                  </motion.div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={cn(
              "h-full p-6 sm:p-8",
              "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm",
              "border-0 shadow-xl shadow-purple-100/20",
              "hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-300"
            )}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">אודות</h2>
              <div className="space-y-4">
                {aboutItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "rounded-xl border shadow-sm overflow-hidden",
                      `bg-gradient-to-br ${item.gradient}`,
                      `hover:border-${item.border}`,
                      "group"
                    )}
                  >
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full p-4 flex justify-between items-center hover:bg-black/5 transition-colors"
                    >
                      <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0">
                            <p className="text-gray-700 leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 