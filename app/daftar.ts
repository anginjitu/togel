import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Daftar = () => {
    const router = useRouter();

    useEffect(() => {
        // Ganti URL dengan URL tujuan
        const websiteURL = 'https://angin303.xyz/register';

        // Redirect ke website
        window.location.href = websiteURL;
    }, []);

    return null;
};

export default Daftar;