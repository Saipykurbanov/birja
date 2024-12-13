const Api = {}

Api.url = 'http://185.127.225.49:8083/'

Api.initToken = () => {
    let token = localStorage.getItem('accessToken')
    let time = localStorage.getItem('timestamp')

    if(token === '') {
        return 2
    }

    if(!token) {
        return 2
    }


    if(time < Date.now()) {
        Api.logout()
        return 2
    }

    return 3
}

Api.signIn = async (body) => {

    try {

        let res = await fetch(`${Api.url}api/users/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(body),
        })
    
        if(res.status === 200) {
            return res = await res.json()
        }

        return 'error'

    } catch(e) {
        return 'error'
    }

}

Api.post = async () => {
    try {

    } catch(e) {
        return 'error'
    }
}

Api.logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('timestamp')
    localStorage.removeItem('role')
    return window.location.reload()
}

Api.asyncGet = async (path) => {
    try {
        let token = localStorage.getItem('accessToken')

        let res = await fetch(`${Api.url}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json;charset=utf-8",
            },
        })

        if(res.status === 200) {
            return res = await res.json()
        }

        if(res.status === 401) {
            return Api.logout()
        }

        return 'error'

    } catch(e) {
        return 'error'
    }
}

Api.asyncPost = async (path) => {
    try {
        let token = localStorage.getItem('accessToken')

        let res = await fetch(`${Api.url}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json;charset=utf-8",
            },
        })

        if(res.status === 200) {
            return res = await res.json()
        }

        if(res.status === 401) {
            return Api.logout()
        }

        return 'error'

    } catch(e) {
        return 'error'
    }
}

Api.asyncPut = async (path, body) => {
    try {
        let token = localStorage.getItem('accessToken')

        let res = await fetch(`${Api.url}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(body)
        })

        if(res.status === 200) {
            return res = await res.json()
        }

        if(res.status === 401) {
            // return Api.logout()
            return console.log('')
        }

        return 'error'

    } catch(e) {
        return 'error'
    }
}

export default Api;