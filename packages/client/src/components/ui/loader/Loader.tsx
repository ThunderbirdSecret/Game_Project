interface LoaderProps {
    isLoading?: boolean;
    userInput: any;
}

function Loader(Component: React.FC<LoaderProps>) {
    return function LoadingPersonsData({ isLoading, userInput }:LoaderProps) {
        if (!isLoading){ 
            return <Component userInput={userInput} />
        }
        return (
            <div>
                <h1>Upload...</h1>
            </div>
        )
    }
}

export default Loader
