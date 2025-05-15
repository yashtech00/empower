import { Sidebar } from "../components/Sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
    



  return (
    <div className="flex bg-black ">
      <Sidebar />
          <main className="flex-1 p-6">
              
        {children}
      </main>
    </div>
  );
}
