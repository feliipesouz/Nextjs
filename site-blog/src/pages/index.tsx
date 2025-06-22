import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen items-center flex flex-col justify-center min-w-full bg-slate-200">
      <h2 className="text-4xl text-black">Home</h2>
      <Link href={"/users"} className="hover:scale-105">Pagina de usuarios</Link>

      <Button variant={"secondary"}>Botão</Button>
    </div>
  );
}
