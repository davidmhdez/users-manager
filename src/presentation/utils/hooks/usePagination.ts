import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import usersListTexts from "../../views/UsersList/usersListTexts";

type Config = {
    perPage: number
    onSearch: (page: number, perPage: number) => Promise<any[]>
}

const usePagination = ({perPage, onSearch}: Config) => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const onChangePage = async (page: number) =>{
        setIsLoading(true);
        try {
            const dataResults = await onSearch(page, perPage);
            if(dataResults.length === 0 && page > 1){
                setHasMore(false);
            }else{
                setData(dataResults);
                setPage(page);
                dataResults.length < perPage ? setHasMore(false) : setHasMore(true);
            }
        }catch (error: any) {
            toast.error(usersListTexts.getUsersError)
        }
        setIsLoading(false);
    }

    const refresh = (action?: 'deleteItem') => {
        if(action === 'deleteItem' && data.length === 1 && page > 1){
            onChangePage(page - 1);
        }else{
            onChangePage(page)
        }
    }

    useEffect(() => {
        onChangePage(1);
    }, []);

    return {
        isLoading,
        perPage,
        page,
        data,
        hasMore,
        onChangePage,
        refresh
    }
};

export default usePagination;