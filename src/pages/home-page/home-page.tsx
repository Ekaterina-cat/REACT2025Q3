import { Button } from '@components/button';

export const HomePage = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-between">
      <Button textButton="Form with React Hooks" />
      <Button textButton="Form without control" />
    </section>
  );
};
