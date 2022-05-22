
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import { ErrorBanner } from '../ErrorBanner';


describe('ErrorBanner', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ErrorBanner message={'this is an error'}/>
        )
        expect(screen.getByText('this is an error')).toBeInTheDocument();
        expect(container.parentElement).toMatchSnapshot();
    })
})