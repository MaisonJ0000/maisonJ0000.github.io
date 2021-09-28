type PostType = {
  title: string
  description: string
  date: number
  path: string
  content: string
  slug?: string
  type: string
  isDraft?: boolean
}

export default PostType;
