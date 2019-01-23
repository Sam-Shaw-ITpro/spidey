export interface OneComic {
    data: {
        results: {
            characters: object,
            creators: object,
            id: number,
            title: string
            thumbnail: 
                {
                    path: string,
                }
        }
    }
}
