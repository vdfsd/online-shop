import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/slices/goodsSlice';
import { Product } from '../Product/Product';

import { MoonLoader } from 'react-spinners';

export const ListProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.goods.filteredGoods);
    const status = useSelector((state) => state.goods.status);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            {status === 'loading' ? (
                <div className="flex justify-center items-center h-[100%] my-[200px]">
                    <MoonLoader color="#006064" />
                </div>
            ) : (
                <div className="container grid grid-cols-3 gap-3 py-8">
                    {products.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            )}
        </>
    );
};
