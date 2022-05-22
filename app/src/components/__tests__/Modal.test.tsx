import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { render } from '../../utils/test-utils'
import { Modal } from '../Modal';

describe('Modal', () => {
    const item:IItem = {
        id: 2,
        name: "Dragon",
        image: "https://picsum.photos/200/300",
        status: "new"
    };
    const onClose = jest.fn();
    const handleSelectStatus = jest.fn()
    it('should render correctly', () => {
        const { container } = render(
            <Modal 
                onClose={onClose}
                item={item}
                handleSelectStatus={handleSelectStatus}
            />
        )
        expect(screen.getByText('Dragon')).toBeInTheDocument();
        expect(container.parentElement).toMatchSnapshot();
    });
})
