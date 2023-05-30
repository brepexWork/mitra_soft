export interface IPostsSlice {
    loading: boolean
    error: null | string
    posts: IPostItem[]
}

export interface IPostItem {
    userId: number
    id: number
    title: string
    body: string
}