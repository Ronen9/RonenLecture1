import { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactConfetti from 'react-confetti';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import { supabase } from '@/lib/supabase';

const ContactSection: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      message: ''
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Submit to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.fullName,
            email: data.email,
            message: data.message,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      // Send email notification
      const emailResponse = await fetch(import.meta.env.DEV ? 'http://localhost:3000/api/send-email' : '/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          message: data.message,
        }),
      });

      const emailResult = await emailResponse.json();

      if (!emailResponse.ok) {
        throw new Error(`Email error: ${emailResult.details || emailResult.error || 'Unknown error'}`);
      }
      
      // Show success UI
      setSubmitSuccess(true);
      setShowConfetti(true);
      reset();
      
      // Reset success state after delay
      setTimeout(() => {
        setShowConfetti(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting the form');
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-12 px-6">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          colors={['#2563eb', '#7c3aed', '#ec4899', '#f59e0b']}
        />
      )}
      
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
                      <span className="text-gray-700">052-2826436</span>
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                    <Input
                      {...register('fullName')}
                      className={cn(
                        "w-full bg-white/70 focus:bg-white transition-colors",
                        errors.fullName && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="הכנס את שמך המלא"
                    />
                    {errors.fullName && (
                      <span className="text-sm text-red-500 mt-1 block">{errors.fullName.message}</span>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                    <Input
                      {...register('email', {
                        onChange: (e) => {
                          // Trigger validation on change
                          e.target.value;
                        },
                      })}
                      type="email"
                      className={cn(
                        "w-full bg-white/70 focus:bg-white transition-colors",
                        errors.email && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="הכנס את כתובת האימייל שלך"
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
                    <Textarea
                      {...register('message')}
                      className={cn(
                        "w-full min-h-[150px] bg-white/70 focus:bg-white transition-colors",
                        errors.message && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="כתוב את הודעתך כאן..."
                    />
                    {errors.message && (
                      <span className="text-sm text-red-500 mt-1 block">{errors.message.message}</span>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                      "hover:from-blue-700 hover:to-purple-700 transition-all duration-300",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        שולח...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        שלח הודעה
                      </>
                    )}
                  </Button>

                  {submitError && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center text-red-600 font-medium mt-4"
                    >
                      {submitError}
                    </motion.p>
                  )}

                  {submitSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center text-green-600 font-medium mt-4"
                    >
                      ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                    </motion.p>
                  )}
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