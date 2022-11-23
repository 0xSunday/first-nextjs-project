import { useRouter } from "next/router";
export default function cl() {
  const router = useRouter();
  console.log(router.query);
  console.log(router.asPath);
  const clickHandler = () => {
    router.push('/client/sunil/project')
  };
  return (
    <div>
      <h1>this is index.js file inside cl file which is a dynamic folder</h1>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}
