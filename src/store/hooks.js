import { useContext } from 'react';
import Context from './Context';

const useStore = () => {
    const [store, dispatch] = useContext(Context);
    return [store, dispatch];
};
export { useStore };
