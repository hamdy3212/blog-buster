import { useState, FormEvent, useCallback } from 'react';
import { EMAIL_REGEX } from '@/lib/constants';
import { useToast } from '@/context/ToastContext';

interface UseEmailFormReturn {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

/**
 * Custom hook for email form validation and submission
 * Encapsulates form logic for reusability and testability
 */
export function useEmailForm(): UseEmailFormReturn {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const validateEmail = useCallback((email: string): boolean => {
    return EMAIL_REGEX.test(email);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      showError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // TODO: Replace with actual API call
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      console.log("Email submitted:", email);
      showSuccess("Thank you! We'll be in touch soon.");
      setEmail("");
    } catch (err) {
      showError("Something went wrong. Please try again.");
      console.error("Email submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, validateEmail, showSuccess, showError]);

  return {
    email,
    setEmail,
    isSubmitting,
    handleSubmit,
  };
}
