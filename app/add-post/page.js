import { getServerSession } from "next-auth";
import AddPosts from "./AddPosts";
import { redirect } from "next/navigation";

export default async function AddPage(){
  const session = await getServerSession();
  if(!session){
    redirect('/authentication')
  }
  return (
    <AddPosts />
  )
}