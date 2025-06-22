import { useRouter } from "next/router"

export default function PostPage() {
    const router = useRouter()
    console.log(router.query.slug)
    return (
        <h1>PostPage: {router.query.slug}</h1>
    )
}