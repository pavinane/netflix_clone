import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";

export  async function getServerSideProps(context:NextPageContext) {
   const session = await getSession(context); 

   if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props:{}
  }
}

const Profile = () => {
  return (
    <div className="flex items-center justify-center  h-full">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Who is Watching
        </h1>
        <div className="flex items-center justify-center gap-10 mt-10">
          <div onClick={() => {}}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="w-46
                    h-46
                    rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white"
              >
                <Image
                className="rounded-md"
                  src="/images/default-blue.png"
                  alt="profile"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile