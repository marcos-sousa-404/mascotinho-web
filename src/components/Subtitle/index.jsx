import { Subtitle as SubtitleBase } from './styles';

const Subtitle = ({ children, className }) => (
  <SubtitleBase className={className}>{children}</SubtitleBase>
);

export default Subtitle;
