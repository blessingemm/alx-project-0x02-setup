export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  title: string;
  content: string;
}

interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}



