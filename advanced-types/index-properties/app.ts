interface ErrorContainer {
    id: string
    [props: string]: string,
}


const errorBag: ErrorContainer = {
    id: 'email001',
    email: "this email is exist",
    password: 'min 7(seven) character'
}