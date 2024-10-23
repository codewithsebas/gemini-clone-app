export interface InputComponentProps {
  message: string;
  setMessage: (value: string) => void;
  handleSubmit: () => void;
  loading: boolean;
}
