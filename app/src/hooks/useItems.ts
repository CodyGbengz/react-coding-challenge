import { useCallback, useEffect, useState  } from 'react';
import { IResponse } from 'src/@types/common';
import { getItems, updateItem } from '../services/apiService';

export function useItems() {
    const [items, setItems] = useState<IItem[]>([]);
    const [sortDirection, setSortDirection] = useState<string>('asc');
    const [selectedItem, setSelectedItem] = useState<IItem |null>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchItems = useCallback(
       async () => {
           setLoading(true)
           const results: any = await getItems();
           if (results) {
               setLoading(false);
               results.success ? setItems(results?.payload) : setError(results?.errors);
           }
           
       }, []);

    useEffect(() => {
        fetchItems()
    }, []);

    const handleFilter = (keyword: string) => {
        setTimeout(() => setFilterTerm(keyword), 200);
    }

    const sortItems = () => {
        let itemsToSort = [...items];
    
        if(sortDirection === 'asc') {
            setSortDirection('dsc');
            setItems(
                itemsToSort.sort((a: IItem,b: IItem) => a.name < b.name ? 1 : (b.name < a.name) ? -1 : 0)
            );
        }
        else {
            setSortDirection('asc');
            setItems(
                itemsToSort.sort((a: IItem,b: IItem) => a.name > b.name ? 1 : (b.name > a.name) ? -1 : 0)
            );
        }
    }

    const toggleModal = (itemId: number) => {
        const getSelectedItem: IItem[] = [...items].filter((item: IItem) => item.id === itemId);
        setSelectedItem(getSelectedItem[0]);
    }

    const handleClose = () => {
        setSelectedItem(null)
    }

    const updateStatus = async (data: IItem) => {
        const updatedStatus: IResponse<IItem> = await updateItem(data)
        const { payload } = updatedStatus;
        let itemsCopy = [...items];
        itemsCopy[itemsCopy.findIndex(el => el.id === payload.id)] = payload;
        setItems(itemsCopy);
    }

    return {
        items,
        handleFilter,
        sortItems,
        sortDirection,
        handleClose,
        selectedItem,
        toggleModal,
        filterTerm,
        updateStatus,
        loading,
        error
    };
}
