import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

// Define class variants using cva
const classes = cva('border h-12 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-lime-400 text-neutral-950 border-lime-400',
            secondary: 'border-white text-white bg-transparent',
        },
    },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary";
}

export default function Button({ variant, className, ...rest }: ButtonProps) {
    const buttonClasses = classes({ variant, className });

    return <button className={buttonClasses} {...rest}></button>;
}
