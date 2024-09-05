import {NavigationSidebar} from "@/components/navigation/navigation-sidebar";
//error: the sidebar is not showing during adding to the functionalities on the add component
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar/>
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};
export default MainLayout;
