import { report } from "node:process";


export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}
export async function getStaticProps() {

  const response = await fetch('http://localhost:3333');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 68 * 8,
  }

}