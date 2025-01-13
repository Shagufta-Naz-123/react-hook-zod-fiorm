"use client";

import Form from "./components/Form";

function Home() {
  return (
    <main
      className="
        flex 
        flex-col 
        items-center 
        justify-between 
        min-h-screen 
        w-full 
        p-20 
        sm:p-12 
        lg:p-24 
        bg-cover 
        bg-center 
        bg-no-repeat 
        text-black 
        md:pt-10
      "
      style={{
        backgroundImage: "url('/background.jpg')", // Ensure this path is correct
      }}
    >
      <Form />
    </main>
  );
}

export default Home;
