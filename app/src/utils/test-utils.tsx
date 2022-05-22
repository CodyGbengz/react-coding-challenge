import React, {FC, ReactElement} from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import  theme  from '../configs/theme';
import { ThemeContext } from '../Root';

const AllTheProviders: FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}