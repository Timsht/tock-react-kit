export interface TockOptions {
  timeoutBetweenMessage?: number;
  widgets?: any;
  closeButton?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  title?: string;
  subtitle?: string;
}

export default TockOptions;
