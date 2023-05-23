import { useEffect } from 'react'
import { route } from '../../store/store';
import { useLocation } from 'react-router-dom';

const Messages = () => {
    const { setUrl } = route();

    const url = useLocation().state;

    useEffect(() => {
        setUrl(url)
        console.log(url);
    }, [])
    
    return ( 
        <>
        </>
     );
}

export default Messages