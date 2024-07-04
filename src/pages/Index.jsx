import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Welcome to Your Bare-Bones App</h1>
        <p className="text-xl text-muted-foreground">Start building your application here.</p>
      </header>
      <main className="mb-8">
        <p className="mb-4">This is a minimal web application. Use this as a starting point to build your own features.</p>
        <Button variant="primary">Get Started</Button>
      </main>
      <footer className="text-muted-foreground">
        © 2023 Your Company
      </footer>
    </div>
  );
};

export default Index;