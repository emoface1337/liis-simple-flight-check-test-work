export type FormDataType = {
    email: string
    password: string
}

export type LoginResponseType = {
    success: boolean
}

// hardcoded authorization

export const authApi = {
    logIn(formData: FormDataType): Promise<LoginResponseType> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (formData.email === 'test@test.ru' && formData.password === 'qwerty12')
                    resolve({
                        success: true
                    })
                resolve({
                    success: false
                })
            }, 750)
        })
    },
    logOut(): Promise<LoginResponseType> {
        return new Promise<LoginResponseType>((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true
                })
            }, 10)
        })
    }
}
