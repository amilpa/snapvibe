import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Container, Stack } from "@mui/material";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Container maxWidth="full" sx={{ p: "0px" }}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar />
          {children}
        </Stack>
      </Container>
    </>
  );
}
