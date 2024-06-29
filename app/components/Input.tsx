import { forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, disabled, icon, ...props }, ref) => {
    return (
        <div className="relative flex items-center w-full">
            {icon && <div className="absolute left-3 text-neutral-400">{icon}</div>}
            <input 
                type={type} 
                className={twMerge(`
                    flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm 
                    file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
                    disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none 
                    ${icon ? 'pl-10' : ''}  // Add padding to the left for the icon if present
                `, className)} 
                disabled={disabled} 
                ref={ref} 
                {...props} 
            />
        </div>
    )
});

Input.displayName = 'Input';

export default Input;
