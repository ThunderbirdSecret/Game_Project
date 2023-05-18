interface LoaderProps {
    isLoading?: boolean;
    userInput?: User;
}

function Loader(Component: React.FC<{ userInput?: User }>) {
    return function LoadingPersonsData({ isLoading, userInput }:LoaderProps): JSX.Element {
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
