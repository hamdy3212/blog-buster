import { useState, FormEvent, useCallback } from 'react';
import { EMAIL_REGEX } from '@/lib/constants';

interface UseEmailFormReturn {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  error: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

/**
 * Custom hook for email form validation and submission
 * Encapsulates form logic for reusability and testability
 */
export function useEmailForm(): UseEmailFormReturn {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = useCallback((email: string): boolean => {
    return EMAIL_REGEX.test(email);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // TODO: Replace with actual API call
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      console.log("Email submitted:", email);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Email submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, validateEmail]);

  return {
    email,
    setEmail,
    isSubmitting,
    error,
    handleSubmit,
  };
}
