import Image from "next/image";


export default function UserPage() {
    return (
        <div>
            <h2>Users</h2>
            <Image src={"/assets/node.png"} width={500} height={500} alt={"Image"} />
        </div>
    )
}