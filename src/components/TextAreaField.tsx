import React from 'react';
import { Label } from '@/components/ui/label'; // Adjust based on your project structure
import { cn } from "@/lib/utils";

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  className?: string;

}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  label,
  placeholder = '',
  required = false,
  value,
  onChange,
  error,
  className
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>
        {label} {required && <span className="text-red-400 text-xs">*</span>}
      </Label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        className={cn(
          'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent',
          error ? 'border-red-400' : 'border-gray-300'
        )}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
};

export default TextAreaField;
