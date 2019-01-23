export interface AllComics {
    data: {
        results: {
            characters:
            {
                items:
                {
                    resourceURI: string,
                    name: string,
                }
            }
        }
    }
}