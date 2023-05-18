
interface LoaderProps {
    isLoading: boolean;
    userInput: User | undefined;
}

function Loader(Component: any) {
    return function LoadingPersonsData({ isLoading, userInput }:LoaderProps) {
        if (!isLoading){ 
            console.log('this load', userInput)
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
