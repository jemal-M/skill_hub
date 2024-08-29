import { PrismaClient } from "@prisma/client";
import Image from "next/image";

// Initialize Prisma Client
const prisma = new PrismaClient();

export default async function Home() {
  // Fetch user data from the database
  const users = await prisma.user.findMany();

  return (
    <div className="text-center text-2xl mt-10">
      <h1 className="text-green-500">User Data</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="my-2">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
}
