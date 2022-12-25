export interface IButton {
  id?: string;
  onClick: () => void;
  style?: React.CSSProperties;
  type?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}