import { Approach, ContactMe, Profile, Services } from "@/components/shared";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Profile />
      <Services />
      <Approach />
      <ContactMe
        message={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
      />
    </main>
  );
}
