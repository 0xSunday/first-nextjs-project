import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const clientData = [
    { id: 1, name: "sunil" },
    { id: 2, name: "siva" },
  ];

  return (
    <div>
      <h1>hello next js</h1>
      <ul>
        {/* <li>
          <Link href="/about">about</Link>
        </li> */}
        {clientData.map((client) => (
          <li key={client.id}>
            <Link href={`/blog/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
