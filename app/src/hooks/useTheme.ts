import { useContext } from 'react';

import { ThemeContext } from '../Root';

function useTheme() {
	const { theme } = useContext(ThemeContext);
	return { theme };
}

export default useTheme;
