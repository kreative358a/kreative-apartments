"use client";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";
import { useState } from "react";

export interface PasswordInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
	({ className, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false);
		return (
			<>
				<Input
					type={showPassword ? "text" : "password"}
					endIcon={
						showPassword ? (
							<EyeIcon
								onClick={() => setShowPassword(false)}
								className="size-8 select-none text-blue-800 dark:text-blue-50"
							/>
						) : (
							<EyeOffIcon
								onClick={() => setShowPassword(true)}
								className="select-nonetext-blue-800 size-8 dark:text-blue-50"
							/>
						)
					}
					className={className}
					{...props}
					ref={ref}
				/>
			</>
		);
	},
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };