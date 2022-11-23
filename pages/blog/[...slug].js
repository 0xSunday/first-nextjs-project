import { useRouter } from "next/router";
export default function slug() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>
        this is slug page where this page return array with user enterd value in
        url
      </h1>
    
    </div>
  );
}
