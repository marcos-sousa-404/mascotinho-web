import { Input as InputBase } from './styles';

const Input = ({ as = 'input', ...props }) => <InputBase as={as} {...props} />;

export default Input;
