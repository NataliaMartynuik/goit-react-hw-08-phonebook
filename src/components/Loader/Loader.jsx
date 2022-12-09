import { Circles } from 'react-loader-spinner';
 
export const Loader = () => {
        return (
            <>
                <Circles
                    height="30"
                    width="30"
                    color=" #1976d2"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
            </>
        );
    }