import { Approach, ContactMe, Profile, Question, Services } from "@/components/shared";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Profile />
      <Question />
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
