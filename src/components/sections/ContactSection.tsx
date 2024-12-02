import { FC } from 'react';
import { cn } from '../../lib/utils';
import { useForm } from '../../hooks/useForm';

const ContactSection: FC = () => {
  const {
    formData,
    formErrors,
    handleInputChange,
    handleInputBlur,
    handleSubmit
  } = useForm({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">צור קשר</h2>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 p-4 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                    שם מלא
                    <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={cn(
                      "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                      formErrors.fullName 
                        ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                    )}
                  />
                  {formErrors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                    אימייל
                    <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={cn(
                      "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                      formErrors.email 
                        ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                    )}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                  נושא
                  <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={cn(
                    "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                    formErrors.subject 
                      ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                  )}
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                  הודעה
                  <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={cn(
                    "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                    formErrors.message 
                      ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                  )}
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
              >
                שליחה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 