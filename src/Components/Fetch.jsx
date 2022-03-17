import { useState, useEffect } from "react";
const url = "http://api.github.com/users";

export default function Fetch() {
  const [u, setU] = useState([]);
  async function getData(url) {
    let a = await fetch(url);
    let b = await a.json();
    // console.log(b);
    return b;
  }
  useEffect(() => {
    getData(url).then((res) => {
      //   console.log(res);
      setU(res);
    });
  }, []);
  if (!u.length) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Fetch Github Profiles</h1>
      <section id="github">
        {u.map((i, id) => {
          return (
            <div key={id}>
              <img src={i.avatar_url} alt="" />
              <h1>{i.login}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
}
