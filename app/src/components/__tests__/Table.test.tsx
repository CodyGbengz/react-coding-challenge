import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { render } from '../../utils/test-utils'
import { Table } from '../Table';

describe('Table', () => {
    const items:IItem[] = [
        {
            id: 2,
            name: "Dragon",
            image: "https://picsum.photos/200/300",
            status: "new"
        },
        {
            id: 1,
            name: "Dog",
            image: "https://picsum.photos/200/300",
            status: "error"
        },
        
    ];
    const selectItem = jest.fn();
    const sortItems = jest.fn()
    it('should render correctly', () => {
        const { container } = render(
            <Table
                items={items}
                sortDirection='asc'
                selectItem={selectItem}
                filterTerm=''
                sortItems={sortItems}
            />
        )
        expect(screen.getByText('Dragon')).toBeInTheDocument();
        expect(container.parentElement).toMatchSnapshot();
    });


    it('should call selectItem when item image is clicked', () => {
        render(<Table
            items={items}
            sortDirection='asc'
            selectItem={selectItem}
            filterTerm=''
            sortItems={sortItems}
        />
        )
        let itemImage = screen.getByTestId('Dragon');
        fireEvent.click(itemImage);
        expect(selectItem).toHaveBeenCalled()
    });

    it('should call sortItem when Name column is clicked', () => {
        render(<Table
            items={items}
            sortDirection='asc'
            selectItem={selectItem}
            filterTerm=''
            sortItems={sortItems}
        />
        )
        let nameColumn = screen.getByTestId('name-column');
        fireEvent.click(nameColumn);
        expect(sortItems).toHaveBeenCalled()
    });
})
