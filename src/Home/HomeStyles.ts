import { createNamedStyles } from '../create_named_styles';
import backgroundImage from '../assets/backgroundgit.webp';

export const HomeStyles = createNamedStyles({
  bg: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
  },
});
