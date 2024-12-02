import { FC } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ContactSection: FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          צור קשר
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
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
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    פרטי התקשרות
                  </h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700">ronener@gmail.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Phone className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700">+972-50-123-4567</span>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    זמינות להרצאות
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    אני זמין להרצאות בנושאי בינה מלאכותית, טכנולוגיה ושיווק דיגיטלי ברחבי הארץ.
                    ניתן לתאם הרצאות לארגונים, חברות, מוסדות חינוך ואירועים מקצועיים.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                    <Input
                      type="text"
                      required
                      className="w-full bg-white/70 focus:bg-white transition-colors"
                      placeholder="הכנס את שמך המלא"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                    <Input
                      type="email"
                      required
                      className="w-full bg-white/70 focus:bg-white transition-colors"
                      placeholder="הכנס את כתובת האימייל שלך"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
                    <Textarea
                      required
                      className="w-full min-h-[150px] bg-white/70 focus:bg-white transition-colors"
                      placeholder="כתוב את הודעתך כאן..."
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    שלח הודעה
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 