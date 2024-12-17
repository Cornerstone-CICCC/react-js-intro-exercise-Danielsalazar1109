type HeaderProps = {
    logoText: string
}

const Header = ({logoText}:HeaderProps) => {
    return (
        <h1>{logoText}</h1>
    )}

    export default Header