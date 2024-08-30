import Hero from "@/components/hero/Hero";
import HomeLayout from "@/components/Layout/HomeLayout";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

export default async function Home() {
  // Fetch user data from the database
  const users = await prisma.user.findMany();

  return (
    <HomeLayout>
<Hero />

    <div className="grid grid-rows-1 gap-4 p-4 sm:grid-cols-3 xs:grid-cols-2    grid-cols-4">
      <div className="p-4 bg-gray-100 rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a voluptatum, eligendi consequuntur commodi incidunt consequatur neque eos beatae, exercitationem fuga debitis tempora iusto? Obcaecati quia hic eum possimus vero!
      </div>
      <div className="p-4 bg-gray-100 rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a voluptatum, eligendi consequuntur commodi incidunt consequatur neque eos beatae, exercitationem fuga debitis tempora iusto? Obcaecati quia hic eum possimus vero!
      </div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <h1 className="text-green-500">User Data</h1>
        <ul>
          {users.map((user)=>(

          <li key={user.id}>{user.name}</li>
          ))}
     

        </ul>
      </div>
    </div>
    </HomeLayout>
  );
}
