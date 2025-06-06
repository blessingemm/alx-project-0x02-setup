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