import { Profile, Services } from "@/components/shared";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Profile />
      <Services />
    </main>
  );
}
