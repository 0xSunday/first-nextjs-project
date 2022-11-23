import { useRouter } from "next/router";
export default function Clin() {
  const router = useRouter();
  console.log("this is clin file inside the dynamic folder");
  console.log(router.query);
  console.log(router.asPath);
  return (
    <div>
      <h1>
        this is nested file inside the nested folder of dynamic route of cl
      </h1>
    </div>
  );
}
