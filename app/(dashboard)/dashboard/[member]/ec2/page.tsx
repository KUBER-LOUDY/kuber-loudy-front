import { Ec2Button } from "@/components/common/button";

export default function Ec2Page() {
  return (
    <main className="w-full flex-grow p-6">
      <h1 className="w-full text-3xl text-black pb-6">EC2 상태</h1>
      <Ec2Button text="ec2 생성하기"></Ec2Button>
    </main>
  );
}

Ec2Page;
