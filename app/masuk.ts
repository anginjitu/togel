import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Masuk = () => {
    const router = useRouter();

    useEffect(() => {
        const redirectUrl = 'https://angin303.xyz/';
        window.location.href = redirectUrl;
    }, []);

    return null;
};

export default Masuk;