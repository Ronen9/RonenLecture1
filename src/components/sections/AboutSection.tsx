import { FC } from 'react';
import { Card } from '../ui/card';
import { Mail, Calendar } from 'lucide-react';
import { images } from '../ImageGallerySection';

const AboutSection: FC = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12">
          <div className="w-full md:w-1/3">
            <Card className="h-full p-6 sm:p-8">
              <img 
                src={images.ronenCNN}
                alt="רונן ארנרייך"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">רונן ארנרייך</h2>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">פרטי התקשרות</h3>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">ronener@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">זמין להרצאות ברחבי הארץ</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="w-full md:w-2/3">
            <Card className="h-full p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">אודות</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
                  <p className="text-gray-700 leading-relaxed">
                    רונן הוא <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">מומחה מוביל בתחום הבינה המלאכותית</span>, עם ניסיון של למעלה מ-20 שנה בתעשיית ההיי-טק. כיום הוא <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">מוביל את תחום חווית הלקוח במיקרוסופט במחלקת BizApps</span>, ולאורך הקריירה שלו עבד בחברות מובילות כמו אינטל, אמדוקס ואורקל.
                  </p>
                </div>

                <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200">
                  <p className="text-gray-700 leading-relaxed">
                    רונן מתמחה בהנגשת נושאי בינה מלאכותית לקהלים מגוונים - <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">החל מתלמידים וסטודנטים ועד אנשי מקצוע</span>. בהרצאותיו, הוא מתמקד בהשפעות המעשיות, העסקיות והחברתיות של טכנולוגיות מתקדמות.
                  </p>
                </div>

                <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200">
                  <p className="text-gray-700 leading-relaxed">
                    לרונן <span className="font-semibold text-purple-700 px-2 py-1 bg-purple-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">רקע ייחודי</span> - את דרכו המקצועית החל דווקא בתחום הבידור, כשהופיע במחזות זמר בתל אביב, שיחק בטלנובלה ואף עבד בצוות הבידור באילת. לאחר סיום לימודיו בטכניון, עבר לתחום ההיי-טק.
                  </p>
                </div>

                <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-green-200">
                  <p className="text-gray-700 leading-relaxed">
                    ב-2022 זכה במקום הראשון <span className="font-semibold text-green-700 px-2 py-1 bg-green-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">בתחרות Technical Story Telling באורקל בשבדיה</span>, שם שילב באופן יצירתי את ריקוד הסלסה כמטאפורה למוצרי שיווק טכנולוגיים. כיום הוא מרצה בנושאים כמו <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">שיווק דיגיטלי מתקדם ו-CRM Sales בעידן הבינה המלאכותית</span> עם Copilot.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 