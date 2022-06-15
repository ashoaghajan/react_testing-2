const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "John",
                    last: "Doe"
                },
                picture: {
                    large: 'https://randomuser.me/api/portraits/men/4.jpg'
                },
                login: {
                    username: 'TheGoat'
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}