import { InputContent } from '@/components/form/ProfileForm/ProfileForm'

interface LoaderProps {
  isLoading?: boolean
  userInput?: InputContent
}

function Loader(Component: React.FC<{ userInput?: InputContent }>) {
  return function LoadingPersonsData({ isLoading, userInput }: LoaderProps) {
    if (!isLoading) {
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
