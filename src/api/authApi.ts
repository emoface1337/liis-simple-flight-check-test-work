export type FormDataType = {
    email: string
    password: string
}

export type LogInRequestType = {
    success: boolean
}

export const authApi = {
    logIn: (formData: FormDataType): Promise<LogInRequestType> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (formData.email === 'test@test.ru' && formData.password === 'qwerty12')
                    resolve({
                        success: true
                    })
            }, 1000)
        })
    }
}
