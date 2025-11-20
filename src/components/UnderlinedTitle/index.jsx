import { UnderlinedTitle as UnderlinedTitleBase } from './styles';

const UnderlinedTitle = ({ className, children, align = 'left' }) => {
  return (
    <UnderlinedTitleBase align={align} className={className}>
      {children}
    </UnderlinedTitleBase>
  );
};

export default UnderlinedTitle;
