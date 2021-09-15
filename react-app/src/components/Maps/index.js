import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import Maps from './Maps';

const MapContainer = ({ missions }) => {
    const key = useSelector((state) => state?.maps?.key);
    const dispatch = useDispatch();
    console.log('gets inside map')

    useEffect(() => {
        if (!key) {
            dispatch(getKey());
        }
    }, [dispatch, key]);

    if (!key) {
        return null;
    }

    return (
        <Maps apiKey={key} missions={missions}/>
    );
};

export default MapContainer;