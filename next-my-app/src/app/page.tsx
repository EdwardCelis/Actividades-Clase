import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center bg-cover bg-center" style={{backgroundImage:"url(https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
     
      </div>
      <h1 className="text-lg font-bold"> Hola Mundo </h1>
      <ContactForm/>
    </main>
    
  );
}
