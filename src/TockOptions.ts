export interface TockOptions {
  timeoutBetweenMessage?: number;
  widgets?: any;
  closeButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  subtitle?: string;
}

export default TockOptions;
