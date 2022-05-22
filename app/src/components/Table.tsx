import React from 'react';
import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

const StyledTable = styled.div`
    table {
        border-collapse: collapse;
        color: ${(props) => props.theme.text};
        width: 100%;
    }
    
    td, th {
        border: 1px solid #999;
        padding: 0.5rem;
        text-align: left;
    }
     
    .clickableHeader: hover {
        cursor: pointer;
    }

    tr:nth-child(odd) {
        background: ${(props) => props.theme.secondary};
    }

    tr:nth-child(even) {
        background: ${(props) => props.theme.primary};
    }
    
    img {
        border-radius: 50%;
        height: 80px;
        object-fit: cover;
        width: 80px;
    }

    img: hover {
        cursor: pointer;
    }
`;

const StyledSpan = styled.span`
    background: ${props => { 
        if(props.color === 'new') {
            return '#00f';
        }

        if(props.color === 'processing') {
            return '#ff0';
        }

        if(props.color === 'done') {
            return '#0f0';
        }

        if(props.color === 'error') {
            return '#f00'
        }
    }};
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    text-align: center;
    width: 100px;
`;

export interface TableProps {
    items: IItem[];
    sortDirection: string;
    sortItems: () => void;
    selectItem: (id: number) => void;
    filterTerm: string;
}

export const Table: React.FC<TableProps> = ({
    items,
    sortDirection,
    sortItems,
    selectItem,
    filterTerm,
}) => {
    const filteredItems = items?.filter((item: IItem) => item.name.toLowerCase().indexOf(filterTerm) > -1);
    const listData = filterTerm ? filteredItems : items;
    const { theme } = useTheme();

    return (
        <StyledTable theme={theme}>
            <table>
                <thead>
                    <tr>
                        <th
                          onClick={() => sortItems()}
                          className="clickableHeader"
                          data-testid="name-column"
                        >
                          Name {sortDirection === 'asc' ? <span>&#8615;</span> : <span>&#8613;</span> }
                        </th>
                        <th>Image</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listData?.map(item => (
                    <tr key={item.id}>
                        <td >
                            {item.name}
                        </td>
                        <td >
                            <img
                                src={item.image || 'http://via.placeholder.com/300'}
                                alt="item image"
                                onClick={() => selectItem(item.id)}
                                data-testid={item.name}
                                />

                        </td>
                        <td >
                            <StyledSpan color={item.status}>{item.status}</StyledSpan>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </StyledTable>
    )
}
