type WelcomeProps = {
    message: string
}

const Welcome = ({message}:WelcomeProps) => {
    return <p>{message}</p>
}

export default Welcome