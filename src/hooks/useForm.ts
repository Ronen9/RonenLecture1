import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import { FormData, FormErrors } from '../types';

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    
    if (!value.trim()) {
      error = 'שדה חובה';
    } else if (name === 'email' && !isValidEmail(value)) {
      error = 'כתובת אימייל לא תקינה';
    }

    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      fullName: !formData.fullName.trim() ? 'שדה חובה' : '',
      email: !formData.email.trim() ? 'שדה חובה' : !isValidEmail(formData.email) ? 'כתובת אימייל לא תקינה' : '',
      subject: !formData.subject.trim() ? 'שדה חובה' : '',
      message: !formData.message.trim() ? 'שדה חובה' : ''
    };

    setFormErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    // TODO: Handle form submission
    console.log('Form submitted:', formData);
  };

  return {
    formData,
    formErrors,
    handleInputChange,
    handleInputBlur,
    handleSubmit
  };
}; 