interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-[8vw] md:px-[6vw] lg:px-[5vw] ${narrow ? 'max-w-narrow' : 'max-w-container'} ${className}`}
    >
      {children}
    </div>
  );
}
