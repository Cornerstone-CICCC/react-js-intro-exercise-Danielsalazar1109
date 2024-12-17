type InfoProps = {
    firstName: string,
    lastName:string,
    age:number,
    isStudent:boolean
}

const info  = ({firstName, lastName, age, isStudent}:InfoProps) => {
    return <div>Name: {firstName} {lastName}, Age: {age}, Is student: {isStudent ? "Yes" : "No"}</div>
}

export default info