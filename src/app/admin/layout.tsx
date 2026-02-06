import RouteProtector from "@/components/admin/RouteProtector";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteProtector>
      <Sidebar>{children}</Sidebar>
    </RouteProtector>
  );
}
